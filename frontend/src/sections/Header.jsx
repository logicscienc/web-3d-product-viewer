import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Left: Title */}
        <h1 className="text-2xl font-semibold tracking-wide text-gray-100">
          3D Product Viewer
        </h1>

        {/* Right: Subtitle */}
        <p className="text-sm text-gray-400 text-right">
          Upload, customize and interact with GLB / GLTF models
        </p>

      </div>
    </header>
  );
};

export default Header;
