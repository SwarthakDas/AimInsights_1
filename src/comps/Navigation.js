import React from "react";
import "../index.css";

export default function Navigation() {
    return (
        <nav className="flex bg-gradient-to-r from-[#1B263B] to-blue-900 p-6 shadow-md">
            <div className="font-bold text-3xl text-[#F0F4F8] hover:cursor-pointer">AimInsights</div>
            <div className="flex ml-auto text-lg space-x-6">
                <p className="px-4 py-2 font-medium text-[#F0F4F8] rounded-lg hover:bg-[#576F89] cursor-pointer transition ease-in-out duration-300">Career Paths</p>
                <p className="px-4 py-2 font-medium text-[#F0F4F8] rounded-lg hover:bg-[#576F89] cursor-pointer transition ease-in-out duration-300">Roadmaps</p>
                <p className="px-4 py-2 font-medium text-[#F0F4F8] rounded-lg hover:bg-[#576F89] cursor-pointer transition ease-in-out duration-300">Community Insights</p>
                <input type="search" className="placeholder:text-[#A9A9A9] rounded-xl px-4 py-2 hover:cursor-pointer bg-blue-950 text-[#F0F4F8] placeholder-[#A9A9A9] ml-4 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-[#576F89]" placeholder="Search" />
            </div>
        </nav>
    );
}
