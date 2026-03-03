# 3D Product Viewer Web Application

**Full Stack Developer Test Assignment**  
Built with **MERN + Three.js**  

---

## Overview

This project is a functional **3D Product Viewer** web application that allows users to:  
- Upload GLB/GLTF 3D models  
- Interact with models (rotate, zoom, pan)  
- Change **background color** and toggle **wireframe mode**  
- Save viewer settings to restore the state on reload  

The app demonstrates full-stack skills including React frontend, Three.js 3D rendering, Node.js/Express backend, MongoDB persistence, and deployment on separate platforms.

---

## Demo

- **Live Frontend:** [https://web-3d-product-viewer.vercel.app](https://web-3d-product-viewer.vercel.app)  
- **Video Demo:** [Loom Recording](https://www.loom.com/share/95de8c3b374140279a6bfcf5af4a7939)

---

## Tech Stack

**Frontend:** React, Three.js, Tailwind CSS, React Toastify  
**Backend:** Node.js, Express, MongoDB, Mongoose, Multer  
**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (cloud DB)

---

## Features

- Upload and render 3D models (GLB/GLTF)  
- Orbit controls: rotate, zoom, pan  
- Background color picker  
- Wireframe toggle  
- Save and restore viewer settings (model, color, wireframe)  
- Toast notifications and loading overlay for better UX  

**Optional / Future Enhancements:** HDRI environment, material/texture editor, multiple presets, cloud storage (AWS S3), model compression (Draco).

---

## Folder Structure
root/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── sections/
│ │ └── App.jsx
│ └── package.json
├── server/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── server.js
├── .gitignore
└── README.md


---

## Deployment / Running Locally

**Frontend (React + Three.js)**

```bash
cd frontend
npm install
npm start   # runs at http://localhost:3000
```
Backend(Nodejs + Express + MongoDB)
```bash
cd server
npm install
npm start   # runs at http://localhost:4000
```
Environment Variables
```bash
MONGODB_URI=<Your MongoDB Atlas connection string>
PORT=4000
```
Notes on Hosting / Limitations

Since the frontend and backend are hosted on separate free-tier platforms, there may be a slight delay in API response. For example, after saving settings, the model and viewer configuration may briefly disappear on reload but reappear once the backend responds. This is expected behavior due to free hosting latency and does not affect functionality.

License

This project is for educational purposes as part of a Full Stack Developer Test Assignment.


---

If you want, I can also **make a slightly shorter “submission-ready” version of the README** that’s perfect for recruiters — concise but professional.  

Do you want me to do that?
