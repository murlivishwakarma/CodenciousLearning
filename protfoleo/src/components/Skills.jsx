import React from 'react';

function Skills({skill}){

    return (
      <>
        <div className="bg-red-100 p-6 rounded-xl shadow-2xl mb-6 hover:bg-yellow-600 transition duration-300">
          <h3 className="text-2xl font-semibold-serif mb-2 ">{skill}</h3>
        </div>
      </>
    );
}
export default Skills;