import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import MyMap from "./MyMap";
import First from './pages/First';
import Exprience from './pages/Exprience';
import Video from './pages/Video';
import Ourpage from './pages/Ourpage';
import Bgimage from './pages/Bgimage';
import Footer from './pages/Footer';
import Aboute from './pages/Aboute/Aboute';
import Tips from './pages/Tips/Tips';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Guid from './pages/Guide/Guid';

// Combine full homepage layout into one component
const HomePage = () => (
  <>
    <First />
    <Exprience />
    <Video />
    <Ourpage />
    <Bgimage />
    <Footer />

  </>
);

const router = createBrowserRouter( [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/tips",
    element: <Tips />
  },
  {
    path: "/aboute",
    element: <Aboute />
  },
  {
    path: "/Gallery",
    element: <Gallery />


  },
  {
    path: "/aboute",
    element: <Aboute />
  },
  {
    path: "/guid",
    element: <Guid />
  },
  {
    path: "/contact",
    element: <Contact />
  }

] );

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;