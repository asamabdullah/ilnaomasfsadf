import { Link } from 'react-router-dom'; // Add this if using React Router

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-200 to-red-200 text-center text-gray-800">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-6">It seems like the page you're looking for doesn't exist.</p>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img 
          src="/ed5fb2d4-6442-4508-8078-19f31a770018 (1).webp" // Replace with a nice image or error graphic
          alt="Error Image" 
          className="rounded-2xl w-32 h-32 mb-6 mx-auto" 
        />
        <Link to="/" className="inline-block bg-pink-500 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-pink-600 transition duration-300">
          Go Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
