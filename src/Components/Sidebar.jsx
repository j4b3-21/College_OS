
import React, { useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth.jsx";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
    const sidebarRef = useRef();
    const user = useAuth(); // This should return user from Firebase auth
    const navItems = [
        { label: "Alumni", icon: "🏠", path: "/alumni" },
        { label: "Events", icon: "📊", path: "/events" }
    ];
    useEffect(() => {
        if (isOpen) {
            sidebarRef.current.style.transform = "translateX(0)";
        } else {
            sidebarRef.current.style.transform = "translateX(-100%)";
        }
    }, [isOpen]);

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Conditionally render the backdrop */}
            {isOpen && (
                <div
                    className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
                    onClick={onClose}
                    style={{ zIndex: 40 }} // Backdrop is only visible when the sidebar is open
                />
            )}

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className="relative z-50 w-[80vw] max-w-xs bg-white h-full shadow-xl p-6 text-gray-800 space-y-6 transform transition-transform duration-300"
            >
                {/* User Profile */}
                <div className="flex items-center space-x-4">
                    <img
                        src={user?.photoURL || "https://i.pravatar.cc/40"}
                        alt="profile"
                        className="w-10 h-10 rounded-xl"
                    />
                    <div>
                        <h2 className="font-semibold">{user?.displayName || "Guest User"}</h2>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                </div>

                {/* Navigation */}
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                to={item.path}
                                className="flex items-center gap-3 text-md p-2 rounded-md hover:bg-gray-100"
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
