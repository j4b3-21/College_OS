import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase";

const EquipmentTrackingPage = () => {
    const [equipment, setEquipment] = useState([]);
    const [clubId, setClubId] = useState("");
    const [clubName, setClubName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                console.log("No user logged in");
                setLoading(false);
                return;
            }

            console.log("Logged in as:", user.email);

            // Fetch the coordinator's club
            const clubQuery = query(
                collection(db, "clubs"),
                where("coordinatorId", "==", user.email)
            );

            const clubSnap = await getDocs(clubQuery);

            if (!clubSnap.empty) {
                const clubDoc = clubSnap.docs[0];
                setClubId(clubDoc.id);
                setClubName(clubDoc.data().name);
                console.log("Club found:", clubDoc.data());
            } else {
                console.log("No club found for coordinator:", user.email);
                setClubName("Not assigned");
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchEquipment = async () => {
            if (!clubId) return;

            const equipQuery = query(
                collection(db, "equipments"),
                where("clubId", "==", clubId)
            );

            const equipSnap = await getDocs(equipQuery);
            const equipmentList = equipSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setEquipment(equipmentList);
        };

        fetchEquipment();
    }, [clubId]);

    if (loading) return <div className="p-6">Loading...</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Equipment Tracking</h2>
            <p className="mb-6 text-gray-600">Club: {clubName || "Not assigned"}</p>

            {equipment.length === 0 ? (
                <p>No equipment found for your club.</p>
            ) : (
                <ul className="space-y-4">
                    {equipment.map((item) => (
                        <li key={item.id} className="bg-white p-4 shadow rounded-lg">
                            <div className="font-semibold text-lg">{item.name}</div>
                            <div className="text-sm text-gray-700">Quantity: {item.quantity}</div>
                            <div className="text-sm text-gray-700">Status: {item.status}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EquipmentTrackingPage;
