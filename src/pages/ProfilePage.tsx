import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 bg-gray-300">
        <img
          src="https://picsum.photos/id/1041/800/200"
          alt="Cover Photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>
      <div className="p-8 pt-20"> {/* pt-20 to account for avatar overlap */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h1>
        <p className="text-gray-600 mb-4">Software Engineer at ExampleCorp | Passionate about coding and nature photography.</p>

        <div className="flex space-x-4 mb-6">
          <button className="bg-facebookBlue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            <span>Add to Story</span>
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Works at <span className="font-semibold ml-1">ExampleCorp</span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              Lives in <span className="font-semibold ml-1">New York, NY</span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Joined Facebook on <span className="font-semibold ml-1">January 1, 2010</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
