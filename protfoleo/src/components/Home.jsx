
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import Counter from './Counter.jsx';
import { useEffect } from 'react';
import ContactForm from './ContactForm.jsx';
import Users from './Users.jsx';
function Home(){
  const navigate = useNavigate();

  useEffect(()=>{
       console.log("home componenet mounted or reloaded");
  },[])

  const skill=[
    {title:"Javascript" },
    {title:"MongoDB"},
    {title:"HTML"},
    {title:"Nodejs"},
    {title:"Express"},
    {title:"React"}

]
  function handleclick(e){
    navigate('/projects');
  }
    return (
      <>
        <Header />
        <div id="home" className="bg-indigo-200 p-6 h-full font-serif">
          <Counter />

          <div className="flex justify-around items-center p-5 bg-indigo-100  rounded-3xl shadow-lg">
            <div className=" w-1/2 overflow-hidden rounded-4xl">
              <img
                src="/Murlidhar_carpenter.jpeg"
                alt="img not found"
                className="object-contain object-center rounded-full shadow-xl w-1/2  "
              />
            </div>
            <h1 className="text-3xl font-semibold  text-center mt-10">
              Welcome to My Portfolio
              <p className="text-center mt-4 text-xl font-semibold">
                Explore my projects and skills Lorem ipsum dolor sit amet
                consectetur adipisicing elit. <br></br>Quos ratione veniam amet
                eum in, numquam modi officiis nam rerum, voluptate quas aperiam
                quisquam mollitia accusantium deleniti soluta? Aspernatur,quod
                excepturi.
              </p>
              <div className="mt-8">
                <button
                  onClick={handleclick}
                  className="bg-red-100 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  View Projects
                </button>
              </div>
            </h1>
          </div>
          <div className="bg-indigo-100 p-8 mt-10 rounded-lg shadow-xl flex flex-col items-center font-serif">
            <h1 className="text-2xl  font-bold mb-4">Skills</h1>
            <p className="text-gray-900">
              I am a passionate developer with experience in building web
              applications.I love to create intuitive and dynamic user
              experiences.
            </p>
            <p className="text-gray-900 mt-2">
              Feel free to explore my work and get in touch!
            </p>
            <div className="mt-10 flex flex-col-2 px-40 items-center bg-blue-100">
              <h2 className="text-2xl font-semibold mb-4"></h2>
              <ul className="list-disc pl-5 text-gray-700 flex gap-10 px-10 p-6 items-center">
                {skill.map((s, index) => {
                  return <Skills key={index} skill={s.title} />;
                })}
              </ul>
            </div>
          </div>
          <ContactForm />
        
          <Footer />
        </div>
      </>
    );
}
export default Home;