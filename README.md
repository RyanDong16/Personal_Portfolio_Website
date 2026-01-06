# 🌐 Ryan Dong's Personal Portfolio Website

A modern, responsive personal portfolio website built to showcase my projects, skills, certifications, and experience.  
Designed with performance, accessibility, and clean UI/UX in mind.

🔗 **Live Site:** https://yourwebsite.com  
📄 **Resume:** https://yourwebsite.com/resume.pdf  

---

## ✨ Features

- ⚛️ **React** frontend with reusable components  
- 🎨 **Tailwind CSS** with custom theme & dark mode  
- 🌙 Persistent **Light / Dark mode toggle**  
- 📱 Fully **responsive design**  
- 🧠 **AI-powered chatbot** (Gemini API + FastAPI backend)  
- 📧 **Working contact form with Gmail API** (secure server-side email sending)  
- 🧾 Projects, skills, and certifications showcase  
- 🚀 Smooth animations and transitions  
- 🔍 SEO-friendly and fast load times  
- ❌ Custom **404 Not Found** page  

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Lucide Icons
- React Router

### Backend – Contact Form (Email)
- Node.js
- Express
- Gmail API (OAuth 2.0)
- googleapis
- dotenv

### Backend – AI Features
- FastAPI
- LangChain / LangGraph
- Google Gemini API

---

## 🤖 AI Chatbot

This portfolio includes an AI-powered chatbot built with FastAPI, LangChain, and the Google Gemini API.

The chatbot runs as a **separate backend service** and is documented independently.

📂 See: `/chatbot/README.md`

---

## 📧 Contact Form (Gmail API)

The **Contact section** sends emails directly to my Gmail inbox using the **Gmail API**.

### Why a backend is required
- Gmail API requires **OAuth credentials and refresh tokens**
- Secrets **cannot be exposed in the browser**
- Emails are securely sent from an Express server

### Flow
- React Contact Form
- ↓ POST /send-email
- Express Server (OAuth)
- ↓ Gmail API
- My Gmail Inbox

---

## 📁 Project Structure

```bash
Portfolio_Website/
├── public/
│
├── src/
│   ├── components/       # Reusable UI components (ContactSection, Chatbot, etc.)
│   ├── pages/            # Route-level pages (Home, NotFound)
│   ├── api/              # Frontend API helpers
│   ├── hooks/            # Custom hooks (use-toast)
│   ├── library/          # Utilities (cn, helpers)
│   ├── assets/
│   └── App.jsx
│
├── server/               # Express backend (Gmail API)
│   ├── server.js
│   └── .env
│
└── chatbot/
│   ├── README.md           # FULL chatbot docs
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── vite.config.js
├── index.html
├── package.json
├── .gitignore
├── .env
└── README.md

---

## How to Run Locally

1️⃣ Frontend
npm install
npm run dev

Runs on:
http://localhost:5173

2️⃣ Backend (Email Server)
cd server
npm install
node server.js

Runs on:
http://localhost:5000

---

## 📬 Contact

- Feel free to reach out through the website contact form or connect with me on LinkedIn.

🔗 LinkedIn: https://www.linkedin.com/in/ryan-dong-3a4bb3262/