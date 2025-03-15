import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-6 border-b-2 border-blue-500">
      <h1 className="text-2xl font-bold">UniCore</h1>
      <div className="space-x-4">
        <button onClick={() => navigate("/login")} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Login</button>
        <button onClick={() => navigate("/signup")} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
