import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "../index.css";

// Import your background image
import backgroundImage from "../images/Firefly educational website 64485.jpg";

Modal.setAppElement('#root');

export default function LoginLanding() {
  const navigate = useNavigate();
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  

  const openLoginModal = () => setLoginModalIsOpen(true);
  const closeLoginModal = () => setLoginModalIsOpen(false);

  const openSignupModal = (type) => {
    setSignupModalIsOpen(true);
  };
  const closeSignupModal = () => setSignupModalIsOpen(false);

  const handleLogin = () => {
    closeLoginModal();
    navigate("/home");
  };

  const handleSignup = () => {
    closeSignupModal();
    navigate("/home");
  };

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav className="w-full flex justify-between p-4 bg-gradient-to-r from-[#1B263B] to-blue-900 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="font-bold text-3xl text-[#F0F4F8] p-2">AimInsights</div>
        <button onClick={openLoginModal} className="px-8 py-2 bg-blue-950 text-[#F0F4F8] rounded-lg">Login</button>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen bg-white">
        {/* Content Wrapper */}
        <div className="relative z-20 text-center">
          <h1 className="text-4xl font-bold text-[#1B263B] mb-4 ">Empower Your Career Journey</h1>
        <img src={backgroundImage} alt="404" className="mx-auto w-72 h-72 my-6"
        ></img>
          <p className="text-lg text-[#576F89] mb-8">Explore personalized roadmaps and expert insights.</p>
          <button onClick={() => openSignupModal('School Student')} className="px-8 py-4 bg-[#B0C4DE] rounded-lg text-lg font-semibold">Get Started</button>
        </div>
      </div>
      
      {/* Login Modal */}
      <Modal
        isOpen={loginModalIsOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="text" placeholder="Username" className="mb-4 p-2 border rounded w-full" />
        <input type="password" placeholder="Password" className="mb-4 p-2 border rounded w-full" />
        <button onClick={handleLogin} className="px-4 py-2 bg-[#1B263B] text-[#F0F4F8] rounded-lg">Login</button>
      </Modal>
      
      {/* Signup Modal */}
      <Modal
        isOpen={signupModalIsOpen}
        onRequestClose={closeSignupModal}
        contentLabel="Signup Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input type="text" placeholder="Full Name" className="mb-4 p-2 border rounded w-full" />
        <input type="email" placeholder="Email" className="mb-4 p-2 border rounded w-full" />
        <input type="password" placeholder="Password" className="mb-4 p-2 border rounded w-full" />
        <button onClick={handleSignup} className="px-4 py-2 bg-[#1B263B] text-[#F0F4F8] rounded-lg">Signup</button>
      </Modal>
    </div>
  );
}
