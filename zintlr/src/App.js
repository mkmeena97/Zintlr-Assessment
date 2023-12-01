import {Routes, Route} from "react-router-dom";
import './App.css';
import Sections from "./Components/Saction";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
   <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar></Navbar>
      <Sidebar ></Sidebar>
      <Sections ></Sections>
   </div>
  );
}

export default App;
