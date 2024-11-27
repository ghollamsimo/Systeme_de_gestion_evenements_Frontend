import React from "react";
import { Navbar } from "../components/Navbar.tsx";
import { Event } from "../components/EventComponent.tsx";
import { Hero } from "../components/Hero.tsx";
import Img from '../assets/poster.jpg'
export const HomePage: React.FC = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
                <Hero />
            <div className="m-8 -mt-44">
                <Event
                />
            </div>
        </div>
    );
};
