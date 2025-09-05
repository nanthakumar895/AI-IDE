import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings & Privacy</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">General Account Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <div>
              <p className="font-medium text-gray-800">Name</p>
              <p className="text-sm text-gray-500">John Doe</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Edit</button>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <div>
              <p className="font-medium text-gray-800">Contact</p>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Edit</button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Password</p>
              <p className="text-sm text-gray-500">***********</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Change</button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Privacy Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <div>
              <p className="font-medium text-gray-800">Who can see your future posts?</p>
              <p className="text-sm text-gray-500">Friends</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Edit</button>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <div>
              <p className="font-medium text-gray-800">Who can send you friend requests?</p>
              <p className="text-sm text-gray-500">Everyone</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Edit</button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Who can look you up using the email address you provided?</p>
              <p className="text-sm text-gray-500">Friends of friends</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Edit</button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <div>
              <p className="font-medium text-gray-800">Comments</p>
              <p className="text-sm text-gray-500">Email, Push</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Edit</button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Friend requests</p>
              <p className="text-sm text-gray-500">Email, Push, SMS</p>
            </div>
            <button className="text-facebookBlue hover:underline text-sm">Edit</button>
          </div>
        </div>
      </div>

      <button className="bg-facebookBlue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Save Changes
      </button>
    </div>
  );
};

export default SettingsPage;
