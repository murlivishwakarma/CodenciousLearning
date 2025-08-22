import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
      <>
        <nav className="sticky top-0 ">
          <ul className="flex justify-around flex space-x-280 bg-red-100 p-4 text-black ">
            <p className="">My Portfolio</p>
            <ul className="flex space-x-5">
              <li className="hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/">About</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </ul>
        </nav>
      </>
    );
}

export default Header;