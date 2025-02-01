# 🚀 Learning React with Vite  

A beginner-friendly guide to setting up and learning React using **Vite**, a fast and lightweight build tool.  

## 📌 Prerequisites  

Before getting started, make sure you have:  
- Basic knowledge of **HTML, CSS, and JavaScript**  
- **Node.js** and **npm** installed on your system ([Download Node.js](https://nodejs.org/))  

## 🚀 Getting Started  

### 1️⃣ Create a React App with Vite  
Run the following command in your terminal:  

```sh
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```
### 2️⃣ Project Structure
```sh
my-app/
│── public/           # Static assets (index.html, images, etc.)
│── src/              # React components, styles, and logic
│   ├── App.jsx       # Main component
│   ├── main.jsx      # Entry point
│   ├── components/   # Reusable components
│── package.json      # Manages dependencies and scripts
│── vite.config.js    # Vite configuration
│── README.md         # Project documentation
```
### 🛠 Core Concepts
Concept	Description
Components	Reusable UI blocks (function MyComponent() { return <h1>Hello</h1>; })
Props	Passing data between components (<Button color="blue" />)
State	Managing dynamic data (useState hook)
Hooks	Built-in React functions like useEffect, useContext
Events	Handling user interactions (onClick, onChange)
### ⚡ Why Vite?
✅ Fast Development – Instant hot module replacement (HMR)
✅ Optimized Build – Smaller and faster production bundling
✅ Simple Configuration – Less complexity than Webpack

### 📖 Learn More
React Official Docs
Vite Documentation
React Hooks
Happy coding! 🎉🚀