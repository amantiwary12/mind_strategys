// import axios from 'axios'
// import React, { useState } from 'react'

// const Chatai = () => {
//     const [ question, setQuestion ] = useState( " " )
//     const [ answer, setAnswer ] = useState( " " )

//     async function generateai() {
//         setAnswer( "loading..." );
//         const responce = await axios( {
//             url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCgagcHqqAhnl0pwsfV6PE_jVzrpUMf5qQ',
//             method: "post",
//             data: {
//                 "contents": [
//                     {
//                         "parts": [
//                             {
//                                 "text": question
//                             }
//                         ]
//                     }
//                 ]
//             }
//         } )
//         setAnswer( responce[ 'data' ][ 'candidates' ][ 0 ][ 'content' ][ 'parts' ][ 0 ][ 'text' ] )

//     }


//     return (
//         <div>
//             {/* <h1>chat ai</h1> */}
//             <div className='flex flex-col justify-center '>

//                 <div className='flex justify-center'>
//                     <div className='borderd p-5 gap-7 flex'>
//                         <input type="text" value={question} onChange={( e ) => setQuestion( e.target.value )} placeholder='Ask about any trip' className=' bg-slate-200  w-[60vw] md:h-12  p-3 ' />
//                         <div>
//                             <button onClick={generateai} className='bg-black text-sm text-white md:text-2xl p-3 rounded-2xl'>Ask with ai</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='h-12 flex justify-center m-4'>
//                     <p className='w-[60vw] overflow-hidden overflow-y-scroll h-12 flex justify-center p-3'>{answer}</p>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Chatai



// npm install lucide-react firebase  ---  need to install all this 

import { useState, useEffect, useRef } from 'react';
// Import icons for the chatbot UI and new features from lucide-react
// Added 'BookOpen' for Explain Concept and 'Feather' for Generate Poem
import { MountainSnow, X, Send, Brain, Lightbulb, PenTool, Book, BookOpen, Feather } from 'lucide-react'; 
// Import Firebase core and authentication modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
// getFirestore is imported for Firebase setup, but Firestore itself isn't used for chat message persistence in this specific Q&A bot.
import { getFirestore } from 'firebase/firestore'; 

const Chatai = () => {
    // State to manage the visibility of the chatbot window (true for open, false for closed)
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    // State to store all chat messages (both user questions and AI answers)
    const [messages, setMessages] = useState([]);
    // State to hold the current text being typed by the user in the input field
    const [questionInput, setQuestionInput] = useState('');
    // State to track the index of the message being hovered over, to show paraphrase option
    const [hoveredMessageIndex, setHoveredMessageIndex] = useState(null);

    // Firebase instances are needed by the Canvas environment to securely provide the LLM API key.
    const [db, setDb] = useState(null); // Firestore database instance
    const [auth, setAuth] = useState(null); // Firebase Authentication instance
    const [userId, setUserId] = useState(null); // The authenticated user's unique ID
    // Ref for automatically scrolling to the bottom of the chat message area
    const messagesEndRef = useRef(null);

    // Effect hook for Firebase initialization and user authentication.
    // This runs once when the component mounts.
    useEffect(() => {
        let unsubscribe = () => {}; // Variable to hold the unsubscribe function for auth state observer

        try {
            // Retrieve Firebase configuration and application ID from global variables,
            // which are provided by the Canvas environment.
            const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
            const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};

            // Essential check: If firebaseConfig is empty, log an error as Firebase cannot be initialized.
            if (Object.keys(firebaseConfig).length === 0) {
                console.error("Firebase config is missing or empty. Please ensure it's provided.");
                return;
            }

            // Initialize the Firebase app with the provided configuration.
            const app = initializeApp(firebaseConfig);
            // Get instances of Firestore and Authentication services.
            const firestoreDb = getFirestore(app);
            const firebaseAuth = getAuth(app);

            // Store the initialized Firebase service instances in component state.
            setDb(firestoreDb);
            setAuth(firebaseAuth);

            // Asynchronous function to handle the initial user authentication process.
            const initialAuth = async () => {
                try {
                    // If an initial custom authentication token is provided by the environment, use it to sign in.
                    // Otherwise, sign in the user anonymously.
                    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                        await signInWithCustomToken(firebaseAuth, __initial_auth_token);
                    } else {
                        await signInAnonymously(firebaseAuth);
                    }
                } catch (error) {
                    // Log any errors encountered during Firebase authentication.
                    console.error("Firebase authentication error during sign-in:", error);
                }
            };
            initialAuth(); // Call the initial authentication function immediately.

            // Set up an observer for changes in the user's authentication state.
            // This listener will be called whenever the user signs in or out.
            unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
                if (user) {
                    setUserId(user.uid); // If a user is logged in, set their UID in state.
                    console.log("User authenticated:", user.uid);
                } else {
                    console.log("No user is signed in.");
                    setUserId(null); // If no user, clear the UID.
                }
            });

        } catch (error) {
            console.error("Failed to initialize Firebase:", error);
        }

        // Cleanup function: This function is returned by useEffect and will be called
        // when the component unmounts, ensuring the auth state listener is removed.
        return () => unsubscribe();
    }, []); // Empty dependency array ensures this effect runs only once on mount.

    // Effect hook to scroll the chat messages to the bottom whenever new messages are added.
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); // This effect runs every time the 'messages' state array changes.

    // Helper function to call the Gemini API with a given prompt content.
    async function generateAiResponse(promptContent) {
        // Add a temporary "Loading..." message to the chat to indicate that the AI is processing.
        const loadingMessageId = `loading-${Date.now()}`;
        setMessages(prev => [...prev, { text: "Loading...", sender: "bot", id: loadingMessageId }]);

        try {
            // Construct the payload for the Gemini API request.
            // The prompt content is sent as part of the 'contents' array.
            const chatHistory = [{ role: "user", parts: [{ text: promptContent }] }];
            
            // Define generation configuration, including maxOutputTokens for response length control.
            // Adjust maxOutputTokens to control the length of the AI's response.
            // For example, 50 tokens for very short answers, 200 for moderately sized.
            const generationConfig = {
                maxOutputTokens: 150, // Set your desired token limit here
            };

            const payload = { 
                contents: chatHistory,
                generationConfig: generationConfig // Include the generation configuration
            };
            
            // The apiKey is intentionally left empty. The Canvas environment will
            // automatically provide your Gemini API key securely during runtime.
            const apiKey = ""; 
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCgagcHqqAhnl0pwsfV6PE_jVzrpUMf5qQ`;

            // Make the API call using the native `fetch` API.
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            // After receiving a response, remove the "Loading..." message from the chat.
            setMessages(prev => prev.filter(msg => msg.id !== loadingMessageId));

            // Check if the AI response structure is valid and extract the generated text.
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                return result.candidates[0].content.parts[0].text;
            } else {
                // Log an error if the AI response structure is unexpected and return a generic error message.
                console.error("Gemini API response structure unexpected:", result);
                return "Sorry, I couldn't get a response from the AI.";
            }
        } catch (error) {
            // Catch and log any errors that occur during the API call (e.g., network issues).
            console.error("Error calling Gemini API:", error);
            // Remove loading indicator and return an error message to the user.
            setMessages(prev => prev.filter(msg => msg.id !== loadingMessageId));
            return "An error occurred while connecting to the AI. Please try again.";
        }
    }

    // Function to handle sending messages from the main input field.
    const handleSendMessage = async () => {
        // Prevent sending empty questions or questions with only whitespace.
        if (questionInput.trim() === '') return;

        // Add the user's question to the chat messages state immediately.
        setMessages((prevMessages) => [...prevMessages, { text: questionInput, sender: 'user' }]);
        setQuestionInput(''); // Clear the input field.

        // Call the Gemini API with the user's question and add the AI's answer to the chat.
        const aiAnswer = await generateAiResponse(questionInput);
        setMessages((prevMessages) => [...prevMessages, { text: aiAnswer, sender: 'bot' }]);
    };

    // LLM Feature: Summarize Chat
    // This function summarizes the entire conversation history.
    const handleSummarizeChat = async () => {
        if (messages.length === 0) {
            setMessages(prev => [...prev, { text: "No conversation to summarize yet!", sender: "bot" }]);
            return;
        }

        // Concatenate all messages into a single string for the prompt.
        const fullConversation = messages.map(msg => `${msg.sender}: ${msg.text}`).join('\n');
        const prompt = `Please summarize the following conversation:\n\n${fullConversation}`;
        
        // Call the AI to get the summary and add it to the chat.
        const summary = await generateAiResponse(prompt);
        setMessages(prev => [...prev, { text: `✨ Chat Summary: ${summary}`, sender: "bot" }]);
    };

    // LLM Feature: Suggest Next Question
    // This function suggests a relevant follow-up question based on recent chat history.
    // const handleSuggestNextQuestion = async () => {
    //     if (messages.length === 0) {
    //         setMessages(prev => [...prev, { text: "No conversation history to suggest questions from!", sender: "bot" }]);
    //         return;
    //     }

    //     // Take the last 5 messages for context to generate a suggestion.
    //     const recentConversation = messages.slice(-5).map(msg => `${msg.sender}: ${msg.text}`).join('\n');
    //     const prompt = `Based on the following recent conversation, suggest a single, relevant follow-up question a user might ask:\n\n${recentConversation}\n\nSuggested question:`;

    //     // Call the AI to get the suggestion and add it to the chat.
    //     const suggestion = await generateAiResponse(prompt);
    //     setMessages(prev => [...prev, { text: `✨ Next Question Idea: ${suggestion}`, sender: "bot" }]);
    // };

    // LLM Feature: Paraphrase Selected Message
    // This function rephrases a given message text.
    // const handleParaphraseMessage = async (messageText) => {
    //     if (!messageText.trim()) {
    //         setMessages(prev => [...prev, { text: "No text provided to paraphrase!", sender: "bot" }]);
    //         return;
    //     }
    //     const prompt = `Paraphrase the following text in a clear and concise way, offering an alternative phrasing: "${messageText}"`;
    //     const paraphrased = await generateAiResponse(prompt);
    //     setMessages(prev => [...prev, { text: `✨ Paraphrased: ${paraphrased}`, sender: "bot" }]);
    // };

    // LLM Feature: Generate Creative Story Idea
    // This function asks the AI to generate a short story idea.
    // const handleGenerateStoryIdea = async () => {
    //     const prompt = "Generate a short, creative, and unique story idea. Include genre, main character, and a brief plot hook.";
    //     const storyIdea = await generateAiResponse(prompt);
    //     setMessages(prev => [...prev, { text: `✨ Story Idea: ${storyIdea}`, sender: "bot" }]);
    // };

    // NEW LLM Feature: Explain Concept
    // This function asks the AI to explain a concept.
    // const handleExplainConcept = async () => {
    //     const concept = prompt("Please enter the concept you want to explain:");
    //     if (!concept || concept.trim() === "") {
    //         setMessages(prev => [...prev, { text: "No concept provided for explanation.", sender: "bot" }]);
    //         return;
    //     }
    //     const promptText = `Explain the concept of "${concept}" briefly and clearly.`;
    //     const explanation = await generateAiResponse(promptText);
    //     setMessages(prev => [...prev, { text: `✨ Concept: ${concept}\nExplanation: ${explanation}`, sender: "bot" }]);
    // };

    // NEW LLM Feature: Generate Poem
    // This function asks the AI to generate a short poem.
    // const handleGeneratePoem = async () => {
    //     const theme = prompt("Enter a theme for the poem (e.g., 'nature', 'love', 'future'):");
    //     let promptText = "Write a short, creative poem.";
    //     if (theme && theme.trim() !== "") {
    //         promptText = `Write a short, creative poem about "${theme}".`;
    //     } else {
    //         setMessages(prev => [...prev, { text: "No theme provided. Generating a general poem.", sender: "bot" }]);
    //     }
    //     const poem = await generateAiResponse(promptText);
    //     setMessages(prev => [...prev, { text: `✨ Poem:\n${poem}`, sender: "bot" }]);
    // };

    return (
        <div className="font-sans antialiased">
            {/* Floating Chatbot Icon */}
            {/* This div acts as the toggle button for the chatbot window. */}
            <div
                className="fixed bottom-8 right-8 z-[100] p-3 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsChatbotOpen(!isChatbotOpen)}
                aria-label="Toggle Chatbot"
                role="button"
                tabIndex="0"
            >
                {/* Dynamically changes icon based on chatbot window state */}
                {isChatbotOpen ? <X size={24} /> : <MountainSnow size={24} />}
            </div>

            {/* Chatbot Window */}
            {/* This div contains the main chatbot interface, visible only when isChatbotOpen is true. */}
            {isChatbotOpen && (
                <div className="fixed bottom-20 right-4 z-[100] w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden max-w-full sm:w-96 sm:h-[400px]">
                    {/* Chatbot Header */}
                    <div className="bg-blue-700 text-white p-3 font-bold flex justify-between items-center rounded-t-lg">
                        <span>AI Question Bot</span>
                        {/* Close button for the chatbot window */}
                        <button
                            className="p-1 rounded-full hover:bg-blue-600 transition-colors"
                            onClick={() => setIsChatbotOpen(false)}
                            aria-label="Close Chatbot"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* LLM Powered Features Buttons Section */}
                    {/* These buttons trigger the various Gemini API functions */}
                    {/* <div className="grid grid-cols-2 gap-2 p-2 bg-gray-100 border-b border-gray-200">
                        <button
                            className="flex items-center justify-center px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={handleSummarizeChat}
                            aria-label="Summarize Chat"
                        >
                            <Brain size={14} className="mr-1" />
                            Summarize Chat ✨
                        </button>
                        <button
                            className="flex items-center justify-center px-3 py-1 bg-gradient-to-r from-green-500 to-teal-600 text-white text-xs rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            // onClick={handleSuggestNextQuestion}
                            aria-label="Suggest Next Question"
                        >
                            <Lightbulb size={14} className="mr-1" />
                            Suggest Next Question ✨
                        </button>
                        <button
                            className="flex items-center justify-center px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-xs rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            // onClick={handleGenerateStoryIdea}
                            aria-label="Generate Story Idea"
                        >
                            <Book size={14} className="mr-1" />
                            Generate Story Idea ✨
                        </button>
                         <button
                            className="flex items-center justify-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            // onClick={handleExplainConcept}
                            aria-label="Explain Concept"
                        >
                            <BookOpen size={14} className="mr-1" />
                            Explain Concept ✨
                        </button>
                         <button
                            className="flex items-center justify-center px-3 py-1 bg-gradient-to-r from-fuchsia-500 to-rose-600 text-white text-xs rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 col-span-2"
                            // onClick={handleGeneratePoem}
                            aria-label="Generate Poem"
                        >
                            <Feather size={14} className="mr-1" />
                            Generate Poem ✨
                        </button>
                    </div> */}

                    {/* Chat Messages Display Area */}
                    {/* This is where all the questions and answers are rendered. */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {/* Message shown when there are no messages yet */}
                        {messages.length === 0 && (
                            <div className="text-center text-gray-500 py-4">
                                Ask me anything!
                            </div>
                        )}
                        {/* Iterate over the messages array and render each message */}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                // Align messages to the right for user, left for bot
                                className={`relative flex mb-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                // Event handlers for showing/hiding the paraphrase button on hover
                                onMouseEnter={() => setHoveredMessageIndex(index)}
                                onMouseLeave={() => setHoveredMessageIndex(null)}
                            >
                                <div
                                    className={`p-2 rounded-lg max-w-[75%] ${
                                        msg.sender === 'user'
                                            ? 'bg-blue-500 text-white rounded-br-none' // Style for user questions
                                            : 'bg-gray-200 text-gray-800 rounded-bl-none' // Style for AI answers
                                    }`}
                                >
                                    {msg.text}
                                </div>
                                {/* Paraphrase button that appears on message hover */}
                                {hoveredMessageIndex === index && (
                                    <button
                                        // Position the button based on the sender (left for user, right for bot)
                                        className={`absolute ${msg.sender === 'user' ? '-left-10' : '-right-10'} top-1/2 -translate-y-1/2 p-1 bg-gray-700 text-white rounded-full text-xs opacity-80 hover:opacity-100 transition-opacity`}
                                        onClick={() => handleParaphraseMessage(msg.text)}
                                        aria-label="Paraphrase message"
                                        title="Paraphrase Message" // Tooltip for accessibility
                                    >
                                        <PenTool size={16} /> {/* Paraphrase icon */}
                                    </button>
                                )}
                            </div>
                        ))}
                        {/* This div ensures the chat scrolls to the newest message automatically */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input Area */}
                    {/* Contains the text input field and the send button */}
                    <div className="p-3 border-t border-gray-200 flex items-center bg-white rounded-b-lg">
                        <input
                            type="text"
                            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                            placeholder="Ask about anything..."
                            value={questionInput}
                            onChange={(e) => setQuestionInput(e.target.value)}
                            // Call handleSendMessage when the Enter key is pressed
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') handleSendMessage();
                            }}
                            aria-label="Question input"
                        />
                        {/* Button to send the typed question to the AI */}
                        <button
                            className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={handleSendMessage}
                            aria-label="Ask with AI"
                        >
                            <Send size={20} /> {/* Send icon */}
                        </button>
                    </div>
                </div>
            )}
            {/* Display the User ID for multi-user context (required by Canvas environment) */}
            {userId && (
                <div className="fixed bottom-4 left-4 z-[100] text-xs text-gray-600 bg-white p-2 rounded-md shadow-sm">
                    User ID: {userId}
                </div>
            )}
        </div>
    );
};

export default Chatai;

