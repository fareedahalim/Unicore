import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import { Figma, Database, FileText } from "lucide-react";

const ProjectFlowLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            All-in-One Project Planning Solution
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Transform your project workflow with our comprehensive suite of tools for
            design, documentation, presentation.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Design Card */}
          <div className="bg-blue-800/30 p-6 rounded-2xl backdrop-blur-sm hover:bg-blue-800/40 transition duration-300">
            <div className="h-48 mb-4 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Figma className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Design & Prototyping</h3>
            </div>
            <p className="text-blue-200">
              Everything you need to design and test your product with seamless collaboration.
            </p>
          </div>

          {/* Development Card */}
          <div className="bg-blue-800/30 p-6 rounded-2xl backdrop-blur-sm hover:bg-blue-800/40 transition duration-300">
            <div className="h-48 mb-4 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Data-Driven Development</h3>
            </div>
            <p className="text-blue-200">
              Streamline your development process with powerful data management tools.
            </p>
          </div>

          {/* Documentation Card */}
          <div className="bg-blue-800/30 p-6 rounded-2xl backdrop-blur-sm hover:bg-blue-800/40 transition duration-300">
            <div className="h-48 mb-4 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Documentation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Smart API Documentation</h3>
            </div>
            <p className="text-blue-200">
              Comprehensive documentation tools for better team understanding.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-blue-200 max-w-3xl mx-auto">
            We're committed to streamlining the project development process by providing a
            complete set of tools that work seamlessly together. Our platform helps teams
            collaborate effectively while maintaining the highest standards of quality in
            their work.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProjectFlowLanding;
