import React from "react";

const Controls = ({
  onModelUpload,
  onBgChange,
  onWireframeToggle,
  modelUploaded,
  backgroundColor,
  wireframe,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
      
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
        Viewer Controls
      </h2>

      {/* Upload Model */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Upload 3D Model (.glb/.gltf)
        </label>

        <input
          type="file"
          accept=".glb,.gltf"
          onChange={onModelUpload}
          className="w-full text-sm border border-gray-300 rounded-lg p-2 cursor-pointer hover:border-indigo-500 transition-all duration-200"
        />

        {modelUploaded && (
          <p className="text-sm text-green-600 font-medium animate-pulse">
            ✓ Model uploaded successfully
          </p>
        )}
      </div>

      {/* Background Color */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Background Color
        </label>

        <div className="flex items-center gap-3">
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => onBgChange(e.target.value)}
            className="w-14 h-10 rounded-lg border border-gray-300 cursor-pointer transition hover:scale-105"
          />
          <span className="text-sm text-gray-600 font-medium">
            {backgroundColor}
          </span>
        </div>
      </div>

      {/* Wireframe Toggle Switch */}
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 transition-all duration-200 hover:bg-gray-100">
        <label className="text-sm font-medium text-gray-700">
          Wireframe Mode
        </label>

        <button
          onClick={() => onWireframeToggle(!wireframe)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
            wireframe ? "bg-indigo-600" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
              wireframe ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>

    </div>
  );
};

export default Controls;