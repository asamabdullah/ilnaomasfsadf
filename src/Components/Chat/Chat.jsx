import React from 'react';

const Chat = () => {
    return (
        <div className=" font-sans bg-gradient-to-br from-rose-100 via-pink-50 to-red-200 min-h-screen flex flex-col items-center p-6">

        {/* Header */}
        <header className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 px-8 rounded-lg text-center shadow-md mb-10">
          <h1 className="text-4xl font-extrabold">Our Chats 💬</h1>
          <p className="text-lg mt-2">Our first conversations 💖</p>
        </header>
  
        {/* Enhanced Image Layout with Animations */}
        <div className="relative w-full max-w-xl grid grid-cols-1 md:grid-cols-1 gap-14">
          
          {/* Image 1 - Zoom Animation */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg animate-zoom hover:animate-none transition-all duration-300">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/465966768_1519915535265301_8471745766552192537_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CYtBUG5yWpoQ7kNvgEny1lD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFNvGUQlUhcRkHSpiDGBQEGI9uX6Ts0nDnreX6S2M949A&oe=678D1932"
              alt="First Chat Image 1"
              className="w-full h-full  object-cover"
            />
          </div>
  
          {/* Image 2 - Diagonal Slide Animation */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg animate-slide-diagonal hover:animate-none transition-all duration-300">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/464755525_1497509820925307_5771346090402515309_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=J4drCf5f_7sQ7kNvgF1SPPh&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gG5uThpcB0YNYijbtC-YkeF2upMO0eSkQm-eP6ZVRpo1w&oe=678CFADC"
              alt="First Chat Image 2"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Image 3 - Zoom Animation */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg animate-zoom hover:animate-none transition-all duration-300">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/466082179_1295313111659891_3636165593842042461_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=K71FB4n57acQ7kNvgGxT8SM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFrrLgjN1ycenolf7SLOBhAZwWzV1N4YgBTSWd7AuuQlQ&oe=678CEDF2"
              alt="First Chat Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default Chat;