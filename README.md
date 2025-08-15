# LingoLink

A **real-time language exchange platform** with messaging, video calls, and global theme customization — built to connect people across the world seamlessly.  

---

## Highlights

- **Real-time Messaging** – Includes typing indicators & emoji reactions.  
- **1-on-1 & Group Video Calls** – Screen sharing & recording capabilities.  
- **Secure Authentication** – JWT-based authentication with protected routes.  
- **Language Exchange Platform** – Choose from **32 unique UI themes**.  
- **Modern Tech Stack** – React + Express + MongoDB + TailwindCSS + TanStack Query.  
- **State Management** – Handled with **Zustand** for simplicity & performance.  
- **Robust Error Handling** – Implemented on both frontend & backend.  
- **Deployment Ready** – Free & scalable hosting.  
- **Powered by Stream** – Ensuring high scalability for chat & calls.  
- **And much more!**  

---

## Tech Stack

- **Frontend:** React, TailwindCSS, TanStack Query, Zustand  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Real-time Communication:** Stream API, WebRTC  
- **Authentication:** JWT (JSON Web Tokens)  
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)
- 
---

## Getting Started

### 1️. Clone the repository
```bash
git clone https://github.com/vaishk984/lingolink.git
cd lingolink
```

### 2. Install dependencies
Frontend
```bash
cd client
npm install
```

Backend
```bash
cd server
npm install
```

### 3. Set environment variables
```bash
# Backend
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Frontend
VITE_STREAM_API_KEY=your_stream_api_key
```

### 4. Run the development server

Backend
```bash
cd backend
npm run dev
```

Frontend
```bash
cd frontend
npm install
npm run dev
```

## Live Demo
🔗 **[Visit LingoLink](https://lingolink-xk85.onrender.com)**


## Features

- Private & group chats with instant updates

- 32+ customizable themes for a personalized experience

- Secure video calls with recording and screen share

- Optimized API calls with caching & state management

- Error boundaries for smoother user experience

- Fully responsive UI for all devices
