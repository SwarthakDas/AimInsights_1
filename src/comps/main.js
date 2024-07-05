import React from "react";
import "../index.css";

export default function Main() {
    const contributors = ["Alice", "Bob", "Charlie"];
    const questions = [
        "How do I become a software engineer?",
        "What skills are needed for data science?",
        "How to prepare for a product manager interview?"
    ];

    return (
        <div className="bg-[#F0F4F8] p-8">
            {/* Introduction Section */}
            <section className="mb-12 text-center py-10">
                <h1 className="text-4xl font-bold text-[#1B263B] mb-4">Navigate Your Career Path</h1>
                <p className="text-xl text-[#576F89]">Empower your career journey with expert roadmaps and shared wisdom.</p>
            </section>

            {/* Featured Career Paths */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-[#1B263B] mb-6">Featured Career Paths</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#B0C4DE] p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-[#1B263B] mb-2">Software Engineer</h3>
                        <p className="text-[#576F89]">Discover the roadmap to becoming a successful Software Engineer.</p>
                    </div>
                    <div className="bg-[#B0C4DE] p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-[#1B263B] mb-2">Data Scientist</h3>
                        <p className="text-[#576F89]">Explore the journey to a rewarding career in Data Science.</p>
                    </div>
                    <div className="bg-[#B0C4DE] p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-[#1B263B] mb-2">Product Manager</h3>
                        <p className="text-[#576F89]">Learn the skills and steps to become a Product Manager.</p>
                    </div>
                </div>
            </section>

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl font-bold text-[#1B263B]">Contribute to the Community</h2>
                </div>
            {/* Contribute Section */}
            <section className="mb-12 bg-[#E2E8F0] rounded-lg shadow-md p-8 mx-20">
                <div className="flex justify-between items-center px-28">
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-[#1B263B] mb-4">Recent Contributors</h3>
                        <ul className="list-disc pl-6">
                            {contributors.map((contributor, index) => (
                                <li key={index} className="text-lg text-[#576F89]">{contributor}</li>
                            ))}
                        </ul>
                    </div>
                    <button className="px-6 py-3 bg-[#1B263B] text-[#F0F4F8] rounded-lg hover:bg-[#0F1C2B] transition-all text-xl">Contribute</button>
                </div>
            </section>

            {/* Auto-scrolling Questions Feed */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-[#1B263B] mb-6">User Questions</h2>
                <div className="h-48 overflow-y-auto">
                    <ul className="space-y-4">
                        {questions.map((question, index) => (
                            <li key={index} className="bg-[#B0C4DE] p-4 rounded-lg shadow-md">
                                {question}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="mt-12 text-center">
                <p className="text-[#576F89]">&copy; 2024 AimInsights. All rights reserved.</p>
            </footer>
        </div>
    );
}
