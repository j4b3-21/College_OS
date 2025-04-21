import React, { useState} from "react";
import HeaderControls from "../Components/HeaderControls.jsx";


const data =[
    {
        rollNumber: "211101",
        title: "Abineth Anantharam",
        date: "Batch of 2021/2025",
        description: "CSE student placed at Planful with 8 LPA. Internship stipend: ₹25,000/month.",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
        rollNumber: "211101",
        title: "Virendra Panchal",
        date: "Batch of 2021/2025",
        description: "CSE student placed at CGI with 7.84 LPA.",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
        rollNumber: "211101",
        title: "Katepalli Sri Sai Snigdha",
        date: "Batch of 2021/2025",
        description: "CSE student. No placement or internship info available.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
        rollNumber: "211101",
        title: "Kavuluru Lakshmi Srinidhi",
        date: "Batch of 2021/2025",
        description: "CSE student. Interned at Amazon with ₹1.1L/month stipend.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
        rollNumber: "211112",
        title: "Harsha Vardhan Reddy Manam",
        date: "Batch of 2021/2025",
        description: "CSE student. Internship listed but company not mentioned.",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    },
    {
        rollNumber: "211113",
        title: "Kancharla N V L Durga Mahitha",
        date: "Batch of 2021/2025",
        description: "CSE student placed at Xebo.ai with 7 LPA. Internship stipend: ₹20,000/month.",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    },
    {
        rollNumber: "211117",
        title: "Kavuluru Lakshmi Srinidhi",
        date: "Batch of 2021/2025",
        description: "CSE student (duplicate?) who interned at Amazon with ₹1.1L/month stipend.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
        rollNumber: "211118",
        title: "Kshitij Verma",
        date: "Batch of 2021/2025",
        description: "CSE student. Internship listed but company not mentioned.",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
        rollNumber: "211120",
        title: "Mohammed Abdul Akram",
        date: "Batch of 2021/2025",
        description: "CSE student. No placement or internship details mentioned.",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
        rollNumber: "211123",
        title: "Neel Amit Shah",
        date: "Batch of 2021/2025",
        description: "CSE student. Internship listed but company not mentioned.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
        rollNumber: "211126",
        title: "Pranshu Goyal",
        date: "Batch of 2021/2025",
        description: "CSE student. Placement and internship details not mentioned.",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    },
    {
        rollNumber: "211128",
        title: "Ravish Kumar",
        date: "Batch of 2021/2025",
        description: "CSE student. Internship listed but company not mentioned.",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    },
    {
        rollNumber: "211138",
        title: "Yash Khaitan",
        date: "Batch of 2021/2025",
        description: "CSE student interned at Hevo with ₹45,000/month stipend.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
        rollNumber: "211201",
        title: "A. Ayyan Guru Eswar",
        date: "Batch of 2021/2025",
        description: "ECE student. Internship listed but no company mentioned.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
        rollNumber: "211206",
        title: "Aluri Sanjana Rao",
        date: "Batch of 2021/2025",
        description: "ECE student. Internship listed, company not mentioned.",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
        rollNumber: "211211",
        title: "Harshit Kumar Gupta",
        date: "Batch of 2021/2025",
        description: "ECE student. No placement or internship info available.",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
        rollNumber: "211217",
        title: "Krishna Swaroop Rai",
        date: "Batch of 2021/2025",
        description: "ECE student. Internship listed but company not mentioned.",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    },
    {
        rollNumber: "211218",
        title: "Mahto Nishant Raj",
        date: "Batch of 2021/2025",
        description: "ECE student. No placement or internship info available.",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    },
    {
        rollNumber: "211227",
        title: "Raj Singh Bhadoriya",
        date: "Batch of 2021/2025",
        description: "ECE student. Internship listed but no company mentioned.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    }];

const AlumniCard = ({ title, date, description, image, rollNumber, isExpanded, onClick }) => {

    return (
        <div
            onClick={onClick}
            className=" cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-white text-black shadow-lg rounded-xl p-4 flex flex-col gap-4"
        >
            <div className="flex items-center gap-4">
                <img src={image} alt={title} className="w-24 h-24 rounded-full object-cover" />
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600">{date}</p>
                    <p className="mt-1 text-sm text-gray-800">{description}</p>
                </div>
            </div>

            {isExpanded && (
                <div className="mt-3 text-sm text-gray-700 px-1">
                    <p><strong>Roll Number:</strong> {rollNumber}</p>
                    <p className="mt-1"><strong>More Details:</strong> This section can later include LinkedIn/GitHub links, testimonials, etc.</p>
                </div>
            )}
        </div>
    );
};

const Alumni = () => {

    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    const handleCardClick = (index) => {
        console.log("Card clicked:", index);
        setExpandedCardIndex(prevIndex => (prevIndex === index ? null : index));
    };



    return (
        <div className="min-h-screen w-full overflow-y-auto px-8 py-8 text-white bg-gradient-to-r from-[#E5EDF5] to-[#ECE0F3]">
            <HeaderControls/>

            <div className="py-10 px-130">
                <img src="https://iiitt.ac.in/images/logo-iiit-new.png" alt="IIIT Logo" className="" />
            </div>

            <div className="px-10 mt-4">
                <h1 className="text-3xl font-bold text-center text-black mb-10">Alumni Highlights</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.map((alumni, index) => (
                        <AlumniCard
                            key={index}
                            title={alumni.title}
                            date={alumni.date}
                            description={alumni.description}
                            image={alumni.image}
                            rollNumber={alumni.rollNumber}
                            isExpanded={expandedCardIndex === index}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alumni;
