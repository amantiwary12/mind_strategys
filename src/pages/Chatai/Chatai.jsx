import axios from 'axios'
import React, { useState } from 'react'

const Chatai = () => {
    const [ question, setQuestion ] = useState( " " )
    const [ answer, setAnswer ] = useState( " " )

    async function generateai() {
        setAnswer( "loading..." );
        const responce = await axios( {
            url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCgagcHqqAhnl0pwsfV6PE_jVzrpUMf5qQ',
            method: "post",
            data: {
                "contents": [
                    {
                        "parts": [
                            {
                                "text":  question 
                            }
                        ]
                    }
                ]
            }
        } )
        setAnswer( responce[ 'data' ][ 'candidates' ][ 0 ][ 'content' ][ 'parts' ][ 0 ][ 'text' ] )

    }


    return (
        <div>
            {/* <h1>chat ai</h1> */}
<div className='flex flex-col justify-center '>
    
            <div className='flex justify-center'>
                <div className='borderd p-5 gap-7 flex'>
                    <input type="text" value={question} onChange={( e ) => setQuestion( e.target.value )} placeholder='Ask about any trip' className=' bg-slate-200  w-[60vw] h-12  p-3 ' />
                    <div>
                        <button onClick={generateai} className='bg-black text-white text-2xl p-3 rounded-2xl'>Ask with ai</button>
                    </div>
                </div>
            </div>
            <div className='h-12 flex justify-center m-4'>
                <p className='w-[60vw] overflow-hidden overflow-y-scroll h-12 flex justify-center p-3'>{answer}</p>

            </div>
            
</div>

        </div>
    )
}

export default Chatai