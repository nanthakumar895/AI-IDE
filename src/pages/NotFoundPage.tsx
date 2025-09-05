import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-gray-700">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <p className="text-3xl font-semibold mb-4">Page Not Found</p>
      <p className="text-lg text-center mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="bg-facebookBlue text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-md">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
