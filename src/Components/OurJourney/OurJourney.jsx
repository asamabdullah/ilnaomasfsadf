import React from 'react';

const OurJourney = () => {
    return (
    <section id="journey" className="p-6 text-center bg-gradient-to-r from-pink-50 via-pink-200 to-red-200 shadow-lg mt-4 rounded-lg">
        <h2 className="text-3xl font-bold text-red-600">Our Journey 💖</h2>
        <p className="mt-4 text-lg text-pink-600">Here's the timeline of our beautiful journey together 🛤️:</p>
        <ul className="mt-6 space-y-4 text-left">
          <li className="p-4 bg-pink-50 rounded-lg shadow-md">🌟 <strong>First Chat:</strong> The moment we connected online.</li>
          <li className="p-4 bg-pink-50 rounded-lg shadow-md">🤝 <strong>First Meetup:</strong> The day we met in person 💑.</li>
          <li className="p-4 bg-pink-50 rounded-lg shadow-md">💬 <strong>Endless Conversations:</strong> Sharing dreams, hopes, and laughter every day.</li>
        </ul>
    </section>
    );
};

export default OurJourney;