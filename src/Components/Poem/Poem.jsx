import React from 'react';

const Poem = () => {
    return (
        <section id="poems" className="p-6 text-center bg-gradient-to-r from-pink-50 via-pink-200 to-red-200 shadow-md mt-4 rounded-lg">
        <h2 className="text-3xl font-bold text-red-600">Poems 💌 (Not good at all)</h2>
        <p className="mt-4 text-lg text-pink-600">These are the poems I wrote just for you 💕:</p>

        <div className="mt-4 text-center font-semibold text-5xl space-y-4 py-24 ">
          <p className="p-10 bg-pink-200 rounded-lg shadow-md font-serif text-lg text-pink-800 leading-relaxed italic">"Billions of girl in this world,<br />But all are invisible except one!<br />Whose beauty catches my eyes<br />Whose voice flow in my ears . <br /> That one girl is my love, she's dream girl 💖"</p>
          <br />
          <p className="p-10 bg-pink-200 rounded-lg shadow-md font-serif text-lg text-pink-800 leading-relaxed italic">"In this world full of fake love, <br />
             I found the true love, <br />
The queen on whom I can rely on. <br />
Her smile heals my every pain, <br />
Her voice is music to my ears, <br />
In her arms, I find my peace, <br />
A love so pure, it will never cease.🌹."</p>
        </div>
      </section>       
    );
};

export default Poem;