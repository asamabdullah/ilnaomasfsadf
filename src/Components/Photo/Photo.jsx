import React from 'react';

const Photo = () => {
    return (
<div>
  <section id="gallery" className="p-6 text-center bg-romantic-gradient shadow-lg rounded-lg mt-4">
    <h2 className="text-4xl font-extrabold text-white">Photo Gallery 📸</h2>
    <p className="mt-4 text-lg text-pink-200">Here are some of my fav pics💕.</p>

    {/* Grid Layout for 10 images in columns */}
    <div className="grid mt-20 grid-cols-1 md:grid-cols-1 max-w-screen-sm mx-auto gap-24">
      {/* Image 1 */}
      <div className="relative grid grid-cols-2 gap-12 group">
        <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320652880306507858/image.png?ex=676a6157&is=67690fd7&hm=b23487afebdb41c61ab74bc50b189870b6efcfaa2e3ff4176553316e70893af9&" // Replace with your actual image path
          alt="Photo 1"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
                <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462645541_897739772534668_9129811641067195398_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RpVzAdXApMYQ7kNvgFbHU1B&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEA6YhSMQHcV_EBo65PJrUrGRYyA3JbQxTVVPzapWfy-w&oe=678CED69" // Replace with your actual image path
          alt="Photo 8"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        {/*  */}
      </div>










      {/* Image 2 */}
      <div className="relative group">
        <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467144170_1100857481739220_8913078084738739248_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BvyqEr8VKRgQ7kNvgHZfGs8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHMiKSLBcOqQcJ1UVk0dpuaQ7MqUOFFr51GM_czcjSFYQ&oe=679094F3" // Replace with your actual image path
          alt="Photo 2"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>



      




      {/* Image 3 */}
      <div className="relative group">
        <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320690811909832726/image.png?ex=676a84aa&is=6769332a&hm=eed00b14f0fad9e813f9ce600a158f799d030d405829b40de799e2944f6bcb79&" // Replace with your actual image path
          alt="Photo 3"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>








      <div className="relative grid grid-cols-2 gap-12 group">
        <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320653847735304252/image.png?ex=676a623d&is=676910bd&hm=46db9ec61f880c9d38d40a0cd6b9060e412c15df0465b4da078dd8cb4a28a410&" // Replace with your actual image path
          alt="Photo 1"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
                <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320641379902427197/image.png?ex=676a56a1&is=67690521&hm=a81e6842fc99e60e40f74b87fe837fcc0c6bfc0ff0048dcf62447c4d27335870&" // Replace with your actual image path
          alt="Photo 8"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        {/*  */}
      </div>








      {/* Image 4 */}
      <div className="relative group">
        <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462572451_1121761909461056_3029106335598123443_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=5oNGSNG_z1wQ7kNvgFA8__V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gF4O65qwjqSXd8999swcrNwa6NddMSTkylhdalguaV7Tw&oe=678D1705" // Replace with your actual image path
          alt="Photo 4"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>

      {/* Image 5 */}
      <div className="relative group">
        <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467459778_556829577145204_4876700011408635353_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JiEMunQtOOgQ7kNvgFqBfvJ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEYnvgUrpqyLSrnI-OO8tEN-mtoL8oKpcfDWx3zpLLhAQ&oe=678CF8B7" // Replace with your actual image path
          alt="Photo 5"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>

      {/* Image 6 */}
      <div className="relative group">
        <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/465889618_555162624093154_3259065993748568170_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=P869eFenK-EQ7kNvgEFSzWZ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHTKYewGpE42SM0WCEM9oP11MrV3nreiBntHZJVtSCL5g&oe=678CF48C" // Replace with your actual image path
          alt="Photo 6"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>



      





      <div className="relative grid grid-cols-2 gap-12 group">
        <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320659333557518408/image.png?ex=676a6759&is=676915d9&hm=c81999ac7a0399df670c18496e9f8ae9941dc2602e49624610dce0ea00b22294&" // Replace with your actual image path
          alt="Photo 1"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
                <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320651859374903387/image.png?ex=676a6063&is=67690ee3&hm=9ebb8edcfccc2fe9ceb3e4fc5a8e593423284238c825fc2dd54ff3bedd362c0d&" // Replace with your actual image path
          alt="Photo 8"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        {/*  */}
      </div>


      









      {/* Image 7 */}
      <div className="relative group">
        <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/467353365_567016409447600_8904240276891944677_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=uMjxvsDS_ysQ7kNvgGc9ixu&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEqmbiy9V_x2hAUNBfGJjE5mx0FOdZFFanie95YQd4HNg&oe=678D0CCA" // Replace with your actual image path
          alt="Photo 7"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>

      {/* Image 8 */}
      <div className="relative group">
        <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462645541_897739772534668_9129811641067195398_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RpVzAdXApMYQ7kNvgFbHU1B&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEA6YhSMQHcV_EBo65PJrUrGRYyA3JbQxTVVPzapWfy-w&oe=678CED69" // Replace with your actual image path
          alt="Photo 8"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>





      <div className="relative grid grid-cols-2 gap-12 group">
        <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320660128231329864/image.png?ex=676a6817&is=67691697&hm=1766c7796da5f0fe0f7ae4f31e90c258ae5a38a2c354655b5f3ddd88b0cf92ba&" // Replace with your actual image path
          alt="Photo 1"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
                <img 
          src="https://cdn.discordapp.com/attachments/1241733421815037962/1320641887333253200/image.png?ex=676a571a&is=6769059a&hm=78c81c2f074738a12ced09dc65c14d017d9d64707e71c42535516674e27b354a&" // Replace with your actual image path
          alt="Photo 8"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        {/*  */}
      </div>







      {/* Image 9 */}
      <div className="relative group">
        <img 
          src="https://instagram.fdac24-3.fna.fbcdn.net/v/t1.15752-9/467483666_942671390625745_9059129438121413927_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=WLZKdGGMJE8Q7kNvgHhFHxB&_nc_zt=23&_nc_ht=instagram.fdac24-3.fna&oh=03_Q7cD1gE2KkIC4gw_YZtyh_GIt-EMu5vuGYynLE5V6kyEVZED9w&oe=679076C3" // Replace with your actual image path
          alt="Photo 9"
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-100 group-hover:shadow-none animate-zoom"
        />
        
      </div>

      














    </div>
  </section>
</div>

    );
};

export default Photo;