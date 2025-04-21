// src/pages/Clubs.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import HeaderControls from "../Components/HeaderControls.jsx";

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "clubs"));
                const clubList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setClubs(clubList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching clubs:", error);
                setLoading(false);
            }
        };

        fetchClubs();
    }, []);

    return (
        <div className="min-h-screen p-6">
            <HeaderControls />
            <div className="py-10 px-130">
                <img src="https://iiitt.ac.in/images/logo-iiit-new.png" alt="IIIT Logo" />
            </div>
            <h1 className="text-3xl font-bold mb-6">Clubs</h1>

            {loading ? (
                <p>Loading clubs...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {clubs.map((club) => (
                        <Link
                            to={`/clubs/${club.id}`}
                            key={club.id}
                            className="bg-white rounded-xl shadow hover:shadow-md transition p-5 hover:border-blue-400"
                        >
                            <div className="text-4xl mb-3">
                                {club.icon || "🎯"}
                            </div>
                            <h2 className="text-xl font-semibold">
                                {club.name}
                            </h2>
                            <p>
                                <strong>Coordinator:</strong> {club.coordinatorId}
                            </p>
                            <p>
                                <strong>Faculty:</strong> {club.facultyName}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Clubs;
