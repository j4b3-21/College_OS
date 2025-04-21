import React, { useState, useEffect } from "react";
import OngoingEventCard from "../Components/ongoingEventcard.jsx";
import HeaderControls from "../Components/HeaderControls.jsx";


const dummyEvents = [
    {
        id: "event1",
        title: "Hackathon 2025",
        date: "April 25, 2025",
        description: "A 24-hour coding sprint for solving real-world problems.",
        image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
    },
    {
        id: "event2",
        title: "Tech Talk: AI & Future",
        date: "May 10, 2025",
        description: "An inspiring session on AI trends by industry leaders.",
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    },
    {
        id: "event3",
        title: "Robotics Expo",
        date: "May 18, 2025",
        description: "Exhibition of student-built robots and automation projects.",
        image: "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg"
    }
];

const EventsPage = () => {

    const [expandedId, setExpandedId] = useState(null);
    const [registeredEvents, setRegisteredEvents] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        roll: "",
        email: ""
    });

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("registeredEvents")) || {};
        setRegisteredEvents(stored);
    }, []);


    const handleRegister = (id) => {
        const updated = { ...registeredEvents, [id]: true };
        setRegisteredEvents(updated);
        localStorage.setItem("registeredEvents", JSON.stringify(updated));
        setExpandedId(null); // collapse after register
    };

    return (
        <div className="p-6 bg-gradient-to-br from-purple-100 to-blue-100 min-h-screen">
            <HeaderControls/>
            <div className="py-10 px-130">
                <img src="https://iiitt.ac.in/images/logo-iiit-new.png" alt="IIIT Logo" className="" />
            </div>
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Ongoing College Events</h1>

            <div className="space-y-4">
                {dummyEvents.map((event) => (
                    <OngoingEventCard
                        key={event.id}
                        event={event}
                        expandedId={expandedId}
                        setExpandedId={setExpandedId}
                        formData={formData}
                        setFormData={setFormData}
                        registeredEvents={registeredEvents}
                        handleRegister={handleRegister}
                    />
                ))}
                {dummyEvents.map((event) => (
                    <OngoingEventCard
                        key={event.id}
                        event={event}
                        expandedId={expandedId}
                        setExpandedId={setExpandedId}
                        formData={formData}
                        setFormData={setFormData}
                        registeredEvents={registeredEvents}
                        handleRegister={handleRegister}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
