import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorHome from "./InstructorHome";
import Login from "./Login";
import AdminHome from "./AdminHome";
import CreateOutline from "./CreateOutline";


function App() {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vh" }}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login></Login>} />
            <Route
              exact
              path="/home"
              element={<InstructorHome></InstructorHome>}
            />
            <Route exact path="/admin-home" element={<AdminHome></AdminHome>} />
            <Route exact path="/create-outline" element={<CreateOutline></CreateOutline>} />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
