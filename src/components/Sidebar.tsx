import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  icon: string; // Placeholder for icon, could be a path to SVG or a component
  text: string;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors ${
          isActive ? 'bg-gray-200 font-semibold' : ''
        }`
      }
    >
      <img src={icon} alt={text} className="w-6 h-6 mr-3" />
      <span className="text-gray-800 text-sm">{text}</span>
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-14 left-0 w-64 bg-white h-[calc(100vh-3.5rem)] p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <div className="flex flex-col space-y-2">
        <SidebarItem
          icon="https://scontent.flhr2-2.fna.fbcdn.net/v/t1.30497-1/84628273_1761598380695028_972693363922750464_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yY3Q4_WqE-4Q7kNwgEwA8qL&_nc_ht=scontent.flhr2-2.fna&oh=00_AYC-N0E1Q5q7j_3V_H4j_4g-bN8E_eJ9f-k7J8fB5A&oe=667E3316" // Placeholder for user profile pic
          text="Your Profile"
          to="/profile"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          text="Friends"
          to="/friends"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjF2S_x_nL.png"
          text="Groups"
          to="/groups"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4YtCPZ_uL7T.png"
          text="Marketplace"
          to="/marketplace"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPMNAptC.png"
          text="Watch"
          to="/videos"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/PXrQZ9sFzJ5.png"
          text="Memories"
          to="/memories"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/NlD8K0B0C4b.png"
          text="Saved"
          to="/saved"
        />
        <div className="border-t border-gray-200 my-2 pt-2"></div>
        <h3 className="text-gray-500 text-xs font-semibold uppercase px-2 mb-1">
          Your Shortcuts
        </h3>
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/P5YxY3sS0qL.png"
          text="Gaming Video"
          to="/gaming"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/f0-2_yX9GjA.png"
          text="Events"
          to="/events"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kM2_d4Ww4pB.png"
          text="Pages"
          to="/pages"
        />
        <div className="border-t border-gray-200 my-2 pt-2"></div>
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v2T_Y9N07wF.png"
          text="Settings & Privacy"
          to="/settings"
        />
        <SidebarItem
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPMNAptC.png"
          text="Help & Support"
          to="/help"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
