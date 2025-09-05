import React from 'react';

interface PostProps {
  userName: string;
  userAvatar: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
}

const PostCard: React.FC<PostProps> = ({
  userName,
  userAvatar,
  timestamp,
  content,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 p-4">
      <div className="flex items-center mb-3">
        <img
          src={userAvatar}
          alt={userName}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{userName}</p>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{content}</p>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Post content"
          className="w-full rounded-lg mb-3 object-cover max-h-96"
        />
      )}
      <div className="flex justify-around border-t border-gray-200 pt-3 text-gray-600">
        <button className="flex items-center space-x-1 hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H3v-7a2 2 0 012-2h10zM2 10h2V6a2 2 0 012-2h7a2 2 0 012 2v4M7 10h10a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2z"
            ></path>
          </svg>
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
            ></path>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
