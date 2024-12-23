import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
<div>
  {/* Hero Section */}
  <section className="relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-32 px-6 text-center">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10">
      <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">Welcome to Our Love Story 💖</h1>
      <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">A journey of friendship, love, and unforgettable moments.</p>
      <div className="flex justify-center gap-8">
        <Link to="photo"
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
        >
          Photo Gallery 📸
        </Link>
        <Link to="/chat"
          className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
        >
          Our Chats 💬
        </Link>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="p-8 bg-white text-center">
    <h2 className="text-3xl font-semibold text-pink-600 mb-6">Our Journey</h2>
    <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
      From the first conversation to the many memories. We have spent a long time together!
    </p>
    <div className="flex justify-center">
      <img
        src="https://cdn.discordapp.com/attachments/1241733421815037962/1320412799645782107/image.png?ex=676981bf&is=6768303f&hm=f0445389fcffc0877fa5835a2ae075048dbe21c258fdf69ae5118b8d11b607e1&"
        alt="Our journey"
        className="w-64 h-64 object-cover rounded-full shadow-lg -rotate-90"
      />
    </div>
  </section>
</div>
    );
};

export default Home;