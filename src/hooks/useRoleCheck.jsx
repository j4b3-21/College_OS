import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase.js"; // adjust path if needed

const useRoleCheck = (requiredRole) => {
    const [hasAccess, setHasAccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);
                const role = userSnap.data()?.role;

                setHasAccess(role === requiredRole);
            }
            setLoading(false);
        };

        fetchRole();
    }, [requiredRole]);

    return { hasAccess, loading };
};

export default useRoleCheck;
