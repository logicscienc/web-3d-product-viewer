import { useState, useEffect } from "react";
import Controls from "./Controls";
import ModelCanvas from "./ModelCanvas";
import {toast} from "react-toastify";
import {
  uploadModelApi,
  saveViewerSettingsApi,
  getViewerSettingsApi,
} from "../services/api";

const Viewer = () => {
  const [modelUrl, setModelUrl] = useState(null);
  const [modelId, setModelId] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [wireframe, setWireframe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Upload Model to Backend
  const handleModelUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await uploadModelApi(formData);

      
      const { id, fileUrl } = res.data.data;

      setModelId(id);
      setModelUrl(fileUrl);

    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Model upload failed.");
    } finally {
      setLoading(false);
    }
  };

  // Save Viewer Settings
  const handleSaveSettings = async () => {
    try {
      if (!modelId) {
        toast.error("Please upload a model first.");
        return;
      }

      setSaving(true);

      await saveViewerSettingsApi({
        modelId,
        backgroundColor,
        wireframe,
      });

      toast.success("Settings saved successfully ");

    } catch (error) {
      toast.error("Failed to save settings.");
    } finally{
      setSaving(false);
    }
  };

  // Fetch Saved Settings on First Load
 useEffect(() => {
  const fetchSettings = async () => {
    try {
      const res = await getViewerSettingsApi();

      const settings = res.data.data;

      if (settings) {
        setBackgroundColor(settings.backgroundColor || "#ffffff");
        setWireframe(settings.wireframe || false);

        // Set modelId and modelUrl so viewer restores the last model
        setModelId(settings.modelId || null);
        setModelUrl(settings.modelUrl || null); // make sure backend sends modelUrl
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
    }
  };

  fetchSettings();
}, []);

 return (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full p-6">
    
    {/* Left Panel - Controls */}
    <div className="md:col-span-1 
  bg-gray-900/70 
  backdrop-blur-xl 
  rounded-2xl 
  shadow-[0_0_40px_rgba(0,0,0,0.6)] 
  border border-gray-700/50 
  p-6 
  flex flex-col justify-between
  transition-all duration-300
">
      
      <div>
        <Controls
          onModelUpload={handleModelUpload}
          onBgChange={setBackgroundColor}
          onWireframeToggle={setWireframe}
          modelUploaded={!!modelId}
          backgroundColor={backgroundColor}
          wireframe={wireframe}
        />
      </div>

      {/* Save Button */}
      <button
  onClick={handleSaveSettings}
  disabled={!modelId || saving}
  className={`mt-6 w-full py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2
  ${
    modelId
      ? "bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 text-white"
      : "bg-gray-700 text-gray-500 cursor-not-allowed"
  }`}
>
  {saving ? (
    <>
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      Saving...
    </>
  ) : (
    "Save Viewer Settings"
  )}
</button>
    </div>

    {/* Right Panel - 3D Viewer */}
    <div className="md:col-span-3 h-[600px] rounded-2xl border border-gray-800 overflow-hidden relative bg-gray-900 shadow-2xl">

  {/* Radial Glow Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]"></div>
  </div>
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-lg font-medium text-gray-300">
              Uploading Model...
            </p>
          </div>
        </div>
      )}

      <ModelCanvas
        modelUrl={modelUrl}
        backgroundColor={backgroundColor}
        wireframe={wireframe}
      />
    </div>
  </div>
);
};

export default Viewer;