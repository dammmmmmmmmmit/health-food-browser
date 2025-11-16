 🌙 Neon Health & Food Browser  
A fun, vibrant, neon-styled web application that displays healthy food items using a custom REST API and a React + Vite frontend.  
Dark Mode (Pastel Neon Style) is the **default theme**.

---

## 🚀 Project Overview  
This project consists of **two parts**:

### 1️⃣ Backend (health-food-api/)  
- Built using **Node.js + Express.js**  
- Provides REST API endpoints for browsing healthy food items  
- Supports:
  - Search (`?item=`)  
  - Category filter (`?category=`)  
  - Diet type filter (`?diet=`)  
  - Calorie range filter  
  - Sorting (calories & protein)  
  - Path params: `/api/items/:id`  
- CORS enabled for frontend access  

### 2️⃣ Frontend (health-food-client/)  
- Built using **React + Vite**
- Styled with **Tailwind CSS**
- UI is full **Dark Neon Pastel Mode**
- Features:
  - Neon gradient header  
  - Neon glowing buttons  
  - Filters & sorting  
  - Responsive card layout  
  - Hover animations  
  - Smooth and aesthetic design  



## 🛠️ How to Run the Project

### ▶ Run Backend (API)
```bash
cd health-food-api
npm install
npm run dev

API runs at:

http://localhost:4000

▶ Run Frontend (Client)

Open a new terminal:

cd health-food-client
npm install
npm run dev

Frontend runs at:

http://localhost:5173

🔗 Example API Endpoints

    GET /api

    GET /api?item=salad

    GET /api?category=meal

    GET /api?diet=vegan

    GET /api?minCalories=200&maxCalories=400

    GET /api/items/1

🎨 UI Theme

The entire UI uses a Neon Gradient:

Orange → Yellow → Green → Red

with:

    Dark background

    Neon glow effects

    Gradient buttons

    Animated hover states

    Rounded cards

✨ Features Summary

    Custom REST API with filtering

    React + Vite frontend

    Tailwind CSS styling

    Vibrant Neon UI

    Fully responsive

    Smooth UX animations

🧑‍💻 Author

Created by Aditya Sharma
For academic & learning purposes.
