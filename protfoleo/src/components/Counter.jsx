import React from 'react';
import { useState } from 'react';
function Counter(){

     const [count,setCount] = useState(0);

    return(
        <>
          <div id="counter" className="bg-indigo-100 p-6 rounded-xl shadow-2xl mb-6 w-100">
            <h3 className="text-2xl font-semibold-serif mb-2">Counter</h3>
            <p className="text-gray-900">Current Count: {count}</p> 

              {count%2==0 ?<p className="text-gray-900"> even</p> : <p className="text=gray-900">odd</p>}  

            <button
              onClick={() => setCount(count + 1)}   
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-2"  
            >
              Increment     
            </button>
            <button
              onClick={() => count>0 ? setCount(count-1):setCount(0)}   
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 mt-2 ml-2"   
            >
              Decrement 
            </button>
          </div>
        </>
    )
}
export default Counter;