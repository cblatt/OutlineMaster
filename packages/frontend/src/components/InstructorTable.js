import DataTable from "react-data-table-component";
import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useHistory, useNavigate } from "react-router-dom";

const ExpandedComponent = ({ selectedCourse, courseOutlinesByCourse }) => {
  const navigate = useNavigate();
  return (
    <div>
      {Object.entries(courseOutlinesByCourse).map(
        ([courseCode, courseOutlines]) => {
          if (courseCode !== selectedCourse.course.courseCode) {
            return null;
          }

          return (
            <div key={courseCode}>
              <div className="m-8">
                <Button
                  colorScheme="purple"
                  size="sm"
                  onClick={() => {
                    navigate("/create-outline/" + selectedCourse.courseUuid);
                  }}
                >
                  Create Outline
                </Button>
              </div>
              <table>
                <thead>
                  <tr className="my-8">
                    <th className="px-8">Version</th>
                    <th>Year</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {courseOutlines.map((outline) => (
                    <tr key={outline.version}>
                      <td className="px-8 pb-8">{outline.version}</td>
                      <td className="pr-8 pb-8">{outline.year}</td>
                      <td className="pr-8 pb-8">{outline.status}</td>
                      <td className="px-8 pb-8">
                        <Button
                          colorScheme="purple"
                          size="sm"
                          onClick={() => {
                            navigate(
                              `/prev-course-outline/${outline.courseUuid}/${outline.version}`
                            );
                          }}
                        >
                          View Outline
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      )}
    </div>
  );
};

const columns = [
  {
    name: "Course Code",
    selector: (row) => row.id,
  },
  {
    name: "Course Name",
    selector: (row) => row.title,
  },
  {
    name: "Department",
    selector: (row) => row.year,
  },
];

export default function InstructorTable() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const user = useAuth();

  const fetchInstructorCourses = useCallback(async () => {
    const res = await fetch(
      process.env.REACT_APP_API_URI + `/instructor-courses/${user.user.uwoId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
      }
    );
    const data = await res.json();
    console.log("data", data);
    setCourses(data);
  }, [user.user.uwoId]);

  useEffect(() => {
    fetchInstructorCourses();
  }, [fetchInstructorCourses]);

  const rowTitles = courses.map((course) => {
    return {
      id: course.course.courseCode,
      title: course.course.courseName,
      year: course.course.department.departmentCode,
    };
  });

  const courseOutlinesByCourse = {};
  courses.forEach((item) => {
    const courseCode = item.course.courseCode;

    // If the course code doesn't exist in the `courseOutlinesByCourse` object, initialize it with an empty array
    if (!courseOutlinesByCourse[courseCode]) {
      courseOutlinesByCourse[courseCode] = [];
    }

    const courseOutlines = item.course.courseOutlines;

    console.log("outlines array", courseOutlines);

    courseOutlines.map((outline) => {
      courseOutlinesByCourse[courseCode].push({
        courseUuid: outline.courseUuid,
        version: outline.versionNum,
        year: outline.yearLbl,
        status: outline.isApproved,
      });
    });
  });

  console.log("COURSEOUTLINESBYCOURSE", courseOutlinesByCourse);

  const oneExpandedRow = Object.entries(courseOutlinesByCourse)[0];
  console.log("EXPAND", oneExpandedRow);

  return (
    <div className="mx-20">
      <DataTable
        columns={columns}
        data={rowTitles}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        expandableRowsComponentProps={{
          selectedCourse,
          courseOutlinesByCourse,
        }}
        onRowExpandToggled={(_, row) => {
          setSelectedCourse(
            courses.find((course) => course.course.courseCode === row.id)
          );
        }}
      />
    </div>
  );
}
