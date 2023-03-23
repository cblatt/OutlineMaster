import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorHome from "./InstructorHome";
import Login from "./Login";
import AdminHome from "./AdminHome";
import OutlineComments from "./OutlineComments";
import {
  AdminGuard,
  InstructorGuard,
  UserGuard,
  DptChairGuard,
} from "../guards/Guard";
import CreateOutline from "./CreateOutline";
import UnAuth from "./UnAuth";
import AssignInstructor from "./AssignInstructor";
import AddInstructor from "./AddInstructor";
import Departments from "./Departments";
import DepartmentCourses from "./DepartmentCourses";
import ReviewCourses from "./ReviewCourses";
import Courses from "./CoursesPage";
import CourseInfo from "./CourseInfoPage";
import ReviewCourseOutline from "./ReviewCourseOutline";
import DptChairHome from "./DptChairHome";

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

              <Route element={<DptChairGuard />}>
                <Route
                  exact
                  path="/dptChair-home"
                  element={<DptChairHome></DptChairHome>}
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
                  <Route path=":id" element={<CourseInfo />}></Route>
                </Route>
                <Route path="/departments">
                  <Route path="" element={<Departments />}></Route>
                  <Route path=":id/courses" element={<DepartmentCourses />} />
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
              path="/reviewcourse"
              element={<ReviewCourses></ReviewCourses>}
            />
            <Route
              path="/edit-course-outline/:courseUuid/:versionNum"
              element={<ReviewCourseOutline></ReviewCourseOutline>}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
