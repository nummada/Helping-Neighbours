import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import Router from "./utils/Routing";
import "./styling/stiles.tailwind.css";


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Router />
    </div>
  );
}


export default App;