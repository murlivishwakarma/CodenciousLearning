import './App.css'
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/Project.jsx';
import ContactForm from './components/ContactForm.jsx';
import Users from './components/Users.jsx';
import UsersDetails from './components/UserDetails.jsx';
function App() {
 
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetails />} />
      </Routes>
    </>
  );
}

export default App
