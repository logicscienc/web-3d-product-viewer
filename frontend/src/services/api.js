import axios from "axios";

const API_BASE_URL = "https://web-3d-product-viewer.onrender.com/api/v1";


const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const uploadModelApi = (formData) => {
  return api.post("/models/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const saveViewerSettingsApi = (data) => {
  return api.post("/settings", data);
};

export const getViewerSettingsApi = () => {
  return api.get("/settings");
};

export default api;