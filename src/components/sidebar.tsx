import React from "react";
import { FaUserCircle, FaUsers, FaCog } from "react-icons/fa";

import { SignOutButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <aside className="w-16 bg-[#F3A997] flex flex-col items-center py-8 space-y-10 fixed right-0 top-0 h-screen">
      <button className="text-white hover:text-pink-200 transition text-2xl">
        <FaUserCircle />
      </button>
      <button className="text-white hover:text-pink-200 transition text-2xl">
        <FaUsers />
      </button>
      <button className="text-white hover:text-pink-200 transition text-2xl">
        <FaCog />
      </button>
      <div>
        <SignOutButton>
          <button className="bg-[#F3A997] text-white px-4 py-2 rounded-md hover:text-pink-200  transition">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </aside>
  );
};

export default Sidebar;
