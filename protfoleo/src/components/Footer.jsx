import React from 'react';

function Footer(){
           
    return(
        <>
            <footer className="bg-indigo-100 text-black p-4 mt-100 p-8 mb-0">
                <div className="container mx-auto text-center">
                    <p className="text-xl"> 
                        © {new Date().getFullYear()} Murlidhar. All rights reserved.
                    </p>
                    <p className="text-sm"> 
                        Made with ❤️ using React
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer