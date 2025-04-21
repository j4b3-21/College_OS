// src/pages/Clubs.jsx
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import HeaderControls from "../Components/HeaderControls.jsx";
import {fetchClubs} from "../redux/clubSlice.jsx";
import {useDispatch, useSelector} from "react-redux";

const dummyClubData = {
    coding: {
        id: "coding",
        icon: "💻",
        name: "Coding Club",
        coordinator: "John Doe",
        faculty: "Prof. Smith",
    },
    robotics: {
        id: "robotics",
        icon: "🤖",
        name: "Robotics Club",
        coordinator: "Jane Roe",
        faculty: "Prof. Johnson",
    },
};

const Clubs = () => {
    // const dispatch = useDispatch();
    // const { items: clubs, status } = useSelector((state) => state.clubs);
    //
    // useEffect(() => {
    //     dispatch(fetchClubs());
    // }, [dispatch]);
    return (
        <div className="min-h-screen  p-6">
            <HeaderControls />
            <div className="py-10 px-130">
                <img src="https://iiitt.ac.in/images/logo-iiit-new.png" alt="IIIT Logo" />
            </div>
            <h1 className="text-3xl font-bold mb-6">Clubs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(dummyClubData).map(([id, club]) => (
                    <Link
                        to={`/clubs/${id}`}
                        key={id}
                        className="bg-white rounded-xl shadow hover:shadow-md transition p-5  hover:border-blue-400"
                    >
                        <div className="text-4xl mb-3">{club.icon}</div>
                        <h2 className="text-xl font-semibold">{club.name}</h2>
                        <p><strong>Coordinator:</strong> {club.coordinator}</p>
                        <p><strong>Faculty:</strong> {club.faculty}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Clubs;
