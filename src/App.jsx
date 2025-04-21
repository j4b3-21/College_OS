import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Alumni from "./pages/Alumni.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import Clubs from "./pages/Clubs.jsx";
import ClubDetail from "./Components/ClubDetails.jsx";

const App = () => {
    return (
        <div className="h-full w-full bg-gradient-to-r from-[#E5EDF5] to-[#ECE0F3]" >
            <Routes>
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/alumni"} element={<Alumni />} />
                <Route path={"/events"} element={<EventsPage />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/clubs/:clubId" element={<ClubDetail />} />

            </Routes>
        </div>
    );
};

export default App;
