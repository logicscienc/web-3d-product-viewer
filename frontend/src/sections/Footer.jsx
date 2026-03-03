import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} 3D Product Viewer
        </p>

        {/* Right */}
        <p className="text-sm text-gray-500 mt-2 sm:mt-0">
          Built with React & Three.js
        </p>

      </div>
    </footer>
  );
};

export default Footer;