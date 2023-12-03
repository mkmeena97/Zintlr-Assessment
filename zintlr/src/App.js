
import './App.css';
import Sections from "./Components/Saction";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import TableComponent from "./Components/TableComponent";
import React, { useState } from 'react';


function App() {
  const [showTable, setShowTable] = useState(false);

  const handleManageConsumerClick = () => {
    setShowTable(true);
  };

  return (
    <div>
      <div className="flex">
        <aside className="w-1/6 bg-silver-200 p-4">
          <Sidebar onManageConsumerClick={handleManageConsumerClick}></Sidebar>
        </aside>
        <section className="w-5/6">
          <nav className="bg-blue-100 text-white p-4">
            <Navbar></Navbar>
          </nav>
          <section>
            <Sections onManageConsumerClick={handleManageConsumerClick}></Sections>
          </section>
          <h1>Consumers Overviews</h1>
          <section>
            {showTable ? <TableComponent></TableComponent> : <Home></Home>}
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;

