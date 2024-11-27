import React from "react";
import Img from "../assets/poster.jpg";


export const Event: React.FC = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden  bg-white">
            <img
                className="w-full h-48 object-cover"
                src={Img}
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">Exciting Event</h2>
                <p className="text-gray-700 text-base">Join us for an amazing event filled with fun and excitement!</p>
            </div>
        </div>
    );
};