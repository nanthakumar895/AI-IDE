import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  views: string;
  channelName: string;
  channelAvatar: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  thumbnail,
  views,
  channelName,
  channelAvatar,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-base mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{views}</p>
        <div className="flex items-center">
          <img
            src={channelAvatar}
            alt={channelName}
            className="w-7 h-7 rounded-full mr-2 object-cover"
          />
          <p className="text-sm text-gray-700 font-medium">{channelName}</p>
        </div>
      </div>
    </div>
  );
};

const VideosPage: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: 'Amazing Nature Scenery Relaxation',
      thumbnail: 'https://picsum.photos/id/1040/300/200',
      views: '1.2M views',
      channelName: 'Nature Lover',
      channelAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      title: 'Top 10 Productivity Hacks for Developers',
      thumbnail: 'https://picsum.photos/id/1043/300/200',
      views: '500K views',
      channelName: 'Coding Guru',
      channelAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      title: 'Delicious Italian Pasta Recipe',
      thumbnail: 'https://picsum.photos/id/1047/300/200',
      views: '800K views',
      channelName: 'Foodie Adventures',
      channelAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      title: 'Travel Vlog: Exploring the Swiss Alps',
      thumbnail: 'https://picsum.photos/id/1050/300/200',
      views: '2.1M views',
      channelName: 'Wanderlust Diaries',
      channelAvatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 5,
      title: 'Beginner\'s Guide to React Hooks',
      thumbnail: 'https://picsum.photos/id/1053/300/200',
      views: '350K views',
      channelName: 'Frontend Master',
      channelAvatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 6,
      title: 'Workout Motivation: Full Body Routine',
      thumbnail: 'https://picsum.photos/id/1056/300/200',
      views: '950K views',
      channelName: 'Fitness Freak',
      channelAvatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Watch Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
