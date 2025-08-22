import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Users from './Users.jsx';

function ContactForm(){
     const [name,setName] = useState(""); 
     const [password,setPassword] = useState("");
     const [usermsg,setusermsg] = useState("");
     const userref = useRef(null);
  
        const handleSubmit = (e) => {
        e.preventDefault();
        setusermsg(`Thank you for contacting me, ${userref.current.value}`);
    
        };

    return (
      <>
        <div className="bg-indigo-100 p-6  h-screen font-serif flex flex-col items-center">
          <div className="bg-indigo-100  h-full w-150 rounded-xl flex flex-col justify-center items-center">
            <h1 className="text-blue-900 text-5xl px-20 mb-10 item-center">
              Contact Me
            </h1>
            <div className="bg-red-100 p-10 h-100 w-100 border-2 rounded-xl flex flex-col  items-center">
              <form>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="border-2 ml-7 bg-white rounded-xl p-2"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  ref={userref}
                />
                <br></br>
                <label className="ml-0 mt-5">Password:</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="border-2 mt-5 ml-1 bg-white bg-white rounded-xl p-2"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <br></br>
                <br></br>
                <button
                  className="ml-20 rounded-xl border-2 p-3"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <h1 className="mt-2">
                  Thank you for Contact
                  <strong className="text-blue-500"> {name}</strong>
                </h1>
                <h1 className="">{usermsg}</h1>
              </form>
            </div>
          </div>
        </div>
        <Users />
      </>
    );
}

export default ContactForm;