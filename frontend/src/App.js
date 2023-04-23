import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Logout from "./components/logout";
import Addbook from "./components/addbook";
import Editbook from "./components/editbook";
import Signin from "./components/signin";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/addbook" element={<Addbook/>}/>
        <Route path="/editbook" element={<Editbook/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
