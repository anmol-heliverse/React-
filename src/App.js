import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components
import Home from "./components/Home";
import ViewUser from "./components/ViewUsers";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/view-users" element={<ViewUser />}></Route>
        <Route path="/add-users" element={<AddUser />}></Route>
        <Route path="/update-users/:id" element={<UpdateUser />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
