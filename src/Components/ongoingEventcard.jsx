import React from "react";

const ongoingEventcard = ({
                       event,
                       expandedId,
                       setExpandedId,
                       formData,
                       setFormData,
                       registeredEvents,
                       handleRegister
                   }) => {
    const handleExpand = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div
            onClick={() => handleExpand(event.id)}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition-all duration-300"
        >
            {/* One-line summary */}
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-purple-800">{event.title}</h2>
                <span className="text-sm text-gray-600">{event.date}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{event.description}</p>

            {/* Expandable registration area */}
            {expandedId === event.id && (
                <div className="mt-4 border-t pt-4 transition-all duration-300">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />

                    {registeredEvents[event.id] ? (
                        <p className="text-green-600 font-semibold">
                            ✅ You have registered for this event.
                        </p>
                    ) : (
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="px-3 py-2 border rounded w-full md:w-1/3"
                            />
                            <input
                                type="text"
                                name="roll"
                                placeholder="Roll Number"
                                value={formData.roll}
                                onChange={handleChange}
                                className="px-3 py-2 border rounded w-full md:w-1/4"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-3 py-2 border rounded w-full md:w-1/4"
                            />
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRegister(event.id);
                                }}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full md:w-auto"
                            >
                                Register
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ongoingEventcard;
