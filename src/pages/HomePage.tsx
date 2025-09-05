import React from 'react';
import PostCard from '../components/PostCard';

const HomePage: React.FC = () => {
  const posts = [
    {
      id: 1,
      userName: 'John Doe',
      userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      timestamp: '2 hours ago',
      content: 'Enjoying a beautiful sunset today! 🌅 #sunset #nature',
      imageUrl: 'https://picsum.photos/id/1015/600/400',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      timestamp: '5 hours ago',
      content: 'Just finished a great book! Highly recommend "The Alchemist".',
    },
    {
      id: 3,
      userName: 'Alice Johnson',
      userAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      timestamp: '1 day ago',
      content: 'Cooking up some delicious pasta tonight! 🍝 What are you having?',
      imageUrl: 'https://picsum.photos/id/1080/600/400',
    },
  ];

  return (
    <div className="max-w-xl mx-auto py-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex items-center mb-3">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg" // Placeholder for current user
            alt="User"
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <input
            type="text"
            placeholder="What's on your mind, User?"
            className="flex-1 bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-facebookBlue"
          />
        </div>
        <div className="flex justify-around border-t border-gray-200 pt-3 text-gray-600 text-sm font-semibold">
          <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
            <span>Live Video</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span>Photo/Video</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Feeling/Activity</span>
          </button>
        </div>
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default HomePage;
