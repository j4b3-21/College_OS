import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Marquee from "react-fast-marquee";
import EventCard from "../Components/EventCard.jsx";
import HeaderControls from "../Components/HeaderControls.jsx";
import { auth } from "../firebase";

const events = [
    {
        title: "Student Council Election Results Announced",
        date: "2025-04-19",
        description: "The results of the Student Council Elections are out! Congratulations to all the newly elected representatives.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFm_FZoNRlnWFXRKrl_s83-YTTFtNQcIsH61Tn6959Y02Rc8lAEpDv1tgj&s=10"
    },
    {
        title: "Prothymos Schedule is Announced",
        date: "2025-04-19",
        description: "The schedule for IIIT Trichy's annual sports fest, Prothymos, is officially out! Get ready to compete and cheer.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfjGDARjTplcG972pv3eLb2DFB4vHWk4FhQE-NeYe7E1Q7wIFY-SiU0Ad&s=10"
    },
    {
        title: "Mess Menu Feedback Forum",
        date: "2025-04-19",
        description: "Interactive session between students and the mess committee to discuss and improve the food quality and variety.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKD9f2F2NojHYwdkTnIClklTONwR7hfD0DbyAe2GzUZDD_2Swt6MjzKM&s=10"
    },
    {
        title: "Seminar on Quant Finance",
        date: "2025-04-19",
        description: "Join us for an insightful session on Quantitative Finance at Sudha Murthy Hall at 5:00 PM. Refreshments will also be provided.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4He3c5wsyAqo2ZU8fn43FnCdc0H549Ame5NejbsrdB_J4z8oU89AJDRf&s=10"
    }
];

const quickLinks = [
    "🗓️ Upcoming Tech Fest - May 12",
    "📢 Club Registrations Open",
    "📝 Hackathon Team Submissions",
    "🥗 Mess Feedback Form",
    "🎯 Seminar: AI in Finance",
    "📬 Hostel Room Allotment Notice"
];

const MainPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/login");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [navigate]);

    if (loading) return <div className="text-center mt-10 text-black">Loading...</div>;

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-[#E5EDF5] to-[#ECE0F3] text-black">
            <HeaderControls />

            <div className="py-10 px-130">
                <img src="https://iiitt.ac.in/images/logo-iiit-new.png" alt="IIIT Logo" className="" />
            </div>

            <div className="px-6 lg:px-20">
                <div className="mb-12">
                    <Marquee speed={100} pauseOnHover gradient={false}>
                        {events.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                image={event.image}
                            />
                        ))}
                    </Marquee>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Quick Links</h2>
                    <ul className="space-y-3 text-gray-800">
                        {quickLinks.map((link, index) => (
                            <li key={index} className="hover:underline cursor-pointer">{link}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
