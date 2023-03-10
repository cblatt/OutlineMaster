import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorHome from "./InstructorHome";
import Login from "./Login";
import AdminHome from "./AdminHome";
import OutlineComments from "./OutlineComments";
import { AdminGuard, InstructorGuard, UserGuard } from "../guards/Guard";
import CreateOutline from "./CreateOutline";
import UnAuth from "./UnAuth";
import AssignInstructor from "./AssignInstructor";
import AddInstructor from "./AddInstructor";
import CreateCourse from "./CreateCourse";
import Departments from "./Departments";
import DepartmentCourses from "./DepartmentCourses";
import ReviewCourses from "./ReviewCourses";
import Courses from "./CoursesPage";
import EditCourseOutline from "./EditCourseOutline";

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
                <Route
                  exact
                  path="/create-outline"
                  element={<CreateOutline></CreateOutline>}
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
                <Route path="/courses">
                  <Route path="" element={<Courses />}></Route>
                  {/* <Route path=":id" element={<AdminHome />}></Route> */}
                </Route>
                <Route path="/departments">
                  <Route path="" element={<Departments />}></Route>
                  <Route path="courses" element={<DepartmentCourses />} />
                </Route>
              </Route>
              <Route exact path="/unauth" element={<UnAuth></UnAuth>} />
            </Route>
            <Route
              exact
              path="/comments"
              element={<OutlineComments></OutlineComments>}
            />
            <Route
              exact
              path="/createCourse"
              element={<CreateCourse></CreateCourse>}
            />
            <Route
              exact
              path="/reviewcourse"
              element={<ReviewCourses></ReviewCourses>}
            />
            <Route
              exact
              path="/edit-courseoutline"
              element={<EditCourseOutline></EditCourseOutline>}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
