import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const HeaderControls = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out");
                navigate("/login"); // or wherever you want to redirect
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <>
            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="h-[3vw] w-[3vw] absolute top-4 right-4 px-4 py-2 rounded transition z-60"
            >
                <img src="/src/assets/logout.png" alt="Logout" />
            </button>

            {/* Menu Button */}
            {!sidebarOpen && (
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="absolute top-4 left-4 z-60 p-2"
                    aria-label="Open menu"
                >
                    <svg
                        className="w-8 h-8 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            )}

            {/* Sidebar */}
            {sidebarOpen && (
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            )}
        </>
    );
};

export default HeaderControls;
