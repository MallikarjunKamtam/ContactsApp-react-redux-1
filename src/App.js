import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Addcontact from "./components/Addcontact";
import Editcontact from "./components/Editcontact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/add" element={<Addcontact />}></Route>
        <Route exact path="/edit/:id" element={<Editcontact />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=DZ7AZuii9ZU&ab_channel=FullyworldWebTutorials

// 53.19
