import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  

const Header = () => {
    return (

      <div className="font-sans bg-gradient-to-r from-pink-100 via-red-100 to-pink-300 sticky top-0 z-50">

      {/* Navbar */}
        <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-4 flex justify-around">
          <Link to="/" className="hover:underline text-xl">Home 🏠</Link>
          <Link to="/photo" className="hover:underline text-xl">Photo 📸</Link>
          <Link to="/chat" className="hover:underline text-xl">Chats 💬</Link>
          <Link to="/poem" className="hover:underline text-xl">Poems 💌</Link>
          <Link to="/note" className="hover:underline text-xl">Special Note 🌟</Link>
        </nav>
      </div>


    );
};

export default Header;