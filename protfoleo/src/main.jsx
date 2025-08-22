import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Project from './components/Project.jsx';
 import ContactForm from './components/ContactForm.jsx';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Users from './components/Users.jsx';
 import UsersDetails from './components/UserDetails.jsx';
// const router = createBrowserRouter(
//   [
//      { 
//       path:"/",
//       element: <App />
//     },
//     {
//       path:"/projects",
//       element: <Project />
//     },

//     {
//       path:"/contact",
//       element:<ContactForm />        

//     }
//   ]
// )
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

