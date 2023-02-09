import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorHome from "./InstructorHome";
import Login from "./Login";
import AdminHome from "./AdminHome";
import { AdminGuard } from "../guards/AdminGuard";

function App() {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vh" }}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login></Login>} />
            <Route
              exact
              path="/home"
              element={<InstructorHome></InstructorHome>}
            />
            <Route element={<AdminGuard />}>
              <Route
                exact
                path="/admin-home"
                element={<AdminHome></AdminHome>}
              />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
