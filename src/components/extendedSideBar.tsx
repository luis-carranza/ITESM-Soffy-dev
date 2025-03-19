"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User, Home, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";

const ExtendedSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const sidebarRef = useRef(null);
  const popupRef = useRef(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`h-screen fixed right-0 top-0 flex flex-col bg-[#E29C8B] text-white transition-all duration-300 p-2 ${
        isExpanded ? "w-64 items-start" : "w-16 items-center"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Menu Button */}
      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-white  hover:text-black w-full"
      >
        <Menu className="w-6 h-6" />
        {isExpanded && <span>Menu</span>}
      </Button>

      <nav className="flex flex-col gap-4 mt-4 w-full">
        <Button
          variant="ghost"
          onClick={() => toggleMenu("home")}
          className="flex items-center gap-2 text-white  hover:text-black w-full"
        >
          <Home className="w-6 h-6" />
          {isExpanded && <span>Home</span>}
        </Button>

        <div className="relative w-full">
          <Button
            variant="ghost"
            onClick={() => toggleMenu("user")}
            className="flex items-center gap-2 text-white  hover:text-black w-full"
          >
            <User className="w-6 h-6" />
            {isExpanded && <span>Usuario</span>}
          </Button>
          {activeMenu === "user" && (
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-0 mt-2 bg-white p-4 rounded-lg shadow-lg w-48 text-black"
            >
              <div className="flex items-center gap-2">
                {false ? (
                  <Image
                    src="https://via.placeholder.com/40"
                    alt="User"
                    width={10}
                    height={10}
                  />
                ) : (
                  <User className="w-10 h-10 text-gray-500" />
                )}
                <p className="font-semibold flex-1 text-right">John Doe</p>
              </div>
              <Button
                variant="ghost"
                className="w-full mt-4 flex items-center gap-2 text-black justify-center"
              >
                View Profile
              </Button>
              <SignOutButton>
                <button className="w-full mt-4 flex items-center gap-2 text-black justify-center hover:placeholder-gray-300 transition">
                  Sign Out
                </button>
              </SignOutButton>
            </motion.div>
          )}
        </div>

        <Button
          variant="ghost"
          onClick={() => toggleMenu("settings")}
          className="flex items-center gap-2 text-white  hover:text-black w-full"
        >
          <Settings className="w-6 h-6" />
          {isExpanded && <span>Configuración</span>}
        </Button>
      </nav>
    </div>
  );
};

export default ExtendedSidebar;
