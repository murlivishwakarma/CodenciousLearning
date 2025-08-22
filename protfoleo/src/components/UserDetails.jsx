import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';  
function UserDetails(){
      const {id} = useParams();
      
      const user = [
       {
         id: 1,
         name: "Narendra Modi",
         age: 56,
         address: "Me Toh Ghumta rahta Hu",
       },
       {
         id: 2,
         name: "Donald Truck",
         age: 70,
         address: "USA New York",
       },

       {
         id: 3,
         name: "Elon Musk",
         age: 70,
         address: "Mars pr jana he ",
       },

     ];
     const userDetails=user.find((user)=> user.id === parseInt(id));
    return (
      <>
        <Header />
          <div className="bg-indigo-200 p-6 font-serif w-1/3 h-full 
                         mx-auto mt-10 flex flex-col items-center
                        rounded-xl shadow-lg "
                        >
          <h1 className="text-2xl font-bold mb-4">
            <strong>User Details</strong>
          </h1>

          {userDetails && (
            <>
              <h1>Name:  {userDetails.name}</h1>
              <h1>Age:   {userDetails.age}</h1>
              <h1>Address: {userDetails.address}</h1>
            </>
          )}
        </div>
        <Footer />
      </>
    );
}
export default UserDetails;