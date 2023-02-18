import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorHome from "./InstructorHome";
import Login from "./Login";
import AdminHome from "./AdminHome";
import { AdminGuard, InstructorGuard, UserGuard } from "../guards/Guard";
import UnAuth from "./UnAuth";
import AssignInstructor from "./AssignInstructor";
import AddInstructor from "./AddInstructor";
import Logout from "./Logout";

function App() {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vh" }}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login></Login>} />
            <Route element={<UserGuard />}>
              <Route element={<InstructorGuard />}>
                <Route
                  exact
                  path="/home"
                  element={<InstructorHome></InstructorHome>}
                />
              </Route>

              <Route element={<AdminGuard />}>
                <Route
                  exact
                  path="/admin-home"
                  element={<AdminHome></AdminHome>}
                />
                <Route
                  exact
                  path="/admin-add"
                  element={<AddInstructor></AddInstructor>}
                />
                <Route
                  exact
                  path="/assign"
                  element={<AssignInstructor></AssignInstructor>}
                />
              </Route>
              <Route exact path="/unauth" element={<UnAuth></UnAuth>} />
              <Route exact path="/logout" element={<Logout></Logout>}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
