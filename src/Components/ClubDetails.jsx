import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderControls from "./HeaderControls.jsx";
import Marquee from "react-fast-marquee";

const dummyClubData = {
    coding: {
        icon: "💻",
        name: "Coding Club",
        coordinator: "John Doe",
        faculty: "Prof. Smith",
        members: ["Alice", "Bob", "Charlie", "David"],
        studentLink: "https://example.com/student/coding",
        coordinatorLink: "https://example.com/coordinator/coding",
        achievements: [
            { title: "Hackathon Winner", description: "Won Smart India Hackathon 2024" },
            { title: "Top Project", description: "Featured on GitHub Trending" },
        ],
    },
    robotics: {
        icon: "🤖",
        name: "Robotics Club",
        coordinator: "Jane Roe",
        faculty: "Prof. Johnson",
        members: ["Eva", "Max", "Leo"],
        studentLink: "https://example.com/student/robotics",
        coordinatorLink: "https://example.com/coordinator/robotics",
        achievements: [
            { title: "TechFest Finalist", description: "Finalist at IIT Bombay TechFest 2024" },
            { title: "Innovation Award", description: "Awarded best innovation at RoboCon" },
        ],
    },
};

const ClubDetail = () => {
    const { clubId } = useParams();
    const club = dummyClubData[clubId];

    const [openDropdown, setOpenDropdown] = useState(null);
    const studentRef = useRef(null);
    const coordinatorRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                studentRef.current &&
                !studentRef.current.contains(e.target) &&
                coordinatorRef.current &&
                !coordinatorRef.current.contains(e.target)
            ) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!club) {
        return <div className="p-10 text-center text-xl">Club not found.</div>;
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-[#E5EDF5] to-[#ECE0F3] text-black p-10">
            <HeaderControls />
            <div className="py-10 px-130">
                <img src="https://iiitt.ac.in/images/logo-iiit-new.png" alt="IIIT Logo" />
            </div>

            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
                {/* Left Side */}
                <div className="space-y-6 ">
                    <div className="text-6xl">{club.icon}</div>
                    <h2 className="text-2xl font-bold">{club.name}</h2>
                    <p><strong>Coordinator:</strong> {club.coordinator}</p>
                    <p><strong>Faculty:</strong> {club.faculty}</p>
                    <div>
                        <p className="font-semibold">Current Members:</p>
                        <ul className="list-disc list-inside ml-2">
                            {club.members.map((member, idx) => (
                                <li key={idx}>{member}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-4 pl-10 border-l">
                    <h3 className="text-xl font-semibold">Useful Links</h3>

                    {/* Students Dropdown */}
                    <div className="relative" ref={studentRef}>
                        <button
                            onClick={() =>
                                setOpenDropdown(openDropdown === "student" ? null : "student")
                            }
                            className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            For Students
                        </button>
                        {openDropdown === "student" && (
                            <div className="absolute mt-2 bg-white border rounded shadow-lg z-10 w-full">
                                <a href={`${club.studentLink}/resources`} className="block px-4 py-2 text-sm hover:bg-gray-100">Resources</a>
                                <a href={`${club.studentLink}/events`} className="block px-4 py-2 text-sm hover:bg-gray-100">Upcoming Events</a>
                                <a href={`${club.studentLink}/faq`} className="block px-4 py-2 text-sm hover:bg-gray-100">FAQ</a>
                            </div>
                        )}
                    </div>

                    {/* Coordinator Dropdown */}
                    <div className="relative" ref={coordinatorRef}>
                        <button
                            onClick={() =>
                                setOpenDropdown(openDropdown === "coordinator" ? null : "coordinator")
                            }
                            className="w-full px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
                        >
                            For Coordinator
                        </button>
                        {openDropdown === "coordinator" && (
                            <div className="absolute mt-2 bg-white border rounded shadow-lg z-10 w-full">
                                <a href={`${club.coordinatorLink}/dashboard`} className="block px-4 py-2 text-sm hover:bg-gray-100">Dashboard</a>
                                <a href={`${club.coordinatorLink}/manage-events`} className="block px-4 py-2 text-sm hover:bg-gray-100">Manage Events</a>
                                <a href={`${club.coordinatorLink}/reports`} className="block px-4 py-2 text-sm hover:bg-gray-100">Reports</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Marquee Achievements */}
            {club.achievements && club.achievements.length > 0 && (
                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-4">Club Achievements</h3>
                    <Marquee speed={60} pauseOnHover='true' autoFill gradient={false}>
                        {club.achievements.map((ach, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-md mx-4 px-6 py-4 w-64 h-32 flex flex-col justify-between "
                            >
                                <h4 className="font-bold text-lg truncate">{ach.title}</h4>
                                <p className="text-sm text-gray-600 overflow-hidden text-ellipsis line-clamp-3">
                                    {ach.description}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            )}
        </div>
    );
};

export default ClubDetail;
