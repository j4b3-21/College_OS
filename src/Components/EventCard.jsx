import React from "react";

const EventCard = ({ title, date, description, image }) => {
    return (
        <div className="bg-white text-black w-[45vw] h-[35vh] rounded-xl shadow-md overflow-hidden flex flex-col m-3">
            {/* Top: Title + Date & Image */}
            <div className="flex w-full p-4 justify-between h-1/2">
                <div className="flex flex-col justify-center pr-4 w-2/3">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>

                <div className="w-1/3 flex items-center justify-end">
                    <img
                        src={image}
                        alt={title}
                        className="w-28 h-20 object-cover rounded-md shadow"
                    />
                </div>
            </div>

            {/* Bottom: Description */}
            <div className="h-1/2 p-4 overflow-hidden text-sm">
                {description}
            </div>
        </div>
    );
};

export default EventCard;
