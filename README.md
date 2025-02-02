# 🧠 Quiz App

A dynamic and interactive quiz application built using **React.js** for the frontend and **Node.js + Express** for serving quiz data.

---

## 🚀 Features
- Fetches quiz questions from an API
- Timer for each question
- Score calculation at the end
- User-friendly interface
- Mobile responsive design

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database (Optional):** MongoDB (if storing quiz data)

---

## 📦 Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/quiz-app.git
cd quiz-app
```

### **2️⃣ Install Dependencies**
#### **Frontend (React.js)**
```sh
cd client  # Navigate to React app folder
yarn install  # or npm install
```

#### **Backend (Node.js + Express)**
```sh
cd server  # Navigate to backend folder
yarn install  # or npm install
```

---

## ▶️ Running the App

### **Start Backend**
```sh
cd server
node server.js
```
Backend will run on: `http://localhost:5000`

### **Start Frontend**
```sh
cd client
yarn dev  # or npm start
```
Frontend will run on: `http://localhost:5173`

---

## 🔗 API Endpoints
### **Get Quiz Questions**
```http
GET /quiz
```
Response Example:
```json
[
  {
    "description": "What is the capital of France?",
    "options": ["Paris", "Berlin", "London", "Madrid"],
    "correct_answer": "Paris"
  }
]
```


---
## ScreenShot
/
---

## 🤝 Contributing
Feel free to fork this repo and make a pull request with improvements! 🎉

---


