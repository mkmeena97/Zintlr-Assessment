import {Routes, Route} from "react-router-dom";
import './App.css';
import Sections from "./Components/Saction";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
  //  <div style={{ display: 'flex', flexDirection: 'column' }}>
  //     <Navbar style={{paddingLeft:'20%'}}></Navbar>
  //     <Sidebar ></Sidebar>
  //     <Sections ></Sections>
  //     <h1 style={{paddingLeft:'20%'}}>Consumers Overviews</h1>
  //     <Home></Home>
  //  </div>
  <div>
    <div class="flex">
        <aside class="w-1/5 bg-silver-200 p-4">
            <Sidebar></Sidebar>
        </aside>
        <section class="w-4/5">
        <nav class="bg-blue-100 text-white p-4 ">
            <Navbar></Navbar>
        </nav>
        <section>
            <Sections></Sections>
        </section>
        <h1>Consumers Overviews</h1>
        <section>
            <Home></Home>
        </section>
        </section>
    </div>
  </div>
  );
}

export default App;
