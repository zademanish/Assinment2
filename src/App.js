import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList";
import AddUser from "./Pages/AddUser";
import UserDetail from "./Pages/UserDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
const App = () => {
  return (
    <Router>
      <div className="">
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="/user/:id" element={<UserDetail/>} />
      </Routes>
      <ToastContainer autoClose={2000}/>
      </div>
    </Router>
  );
};

export default App;
