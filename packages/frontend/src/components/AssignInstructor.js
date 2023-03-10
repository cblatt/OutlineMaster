import React, { useState, useEffect } from "react";
import {
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import AdminNav from "./AdminNav";

export default function AssignInstructor() {
  const [show, setShow] = useState(false);

  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        process.env.REACT_APP_API_URI + "/users/instructors",
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
      setInstructors(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.REACT_APP_API_URI + "/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
      });
      const data = await res.json();
      console.log(data);
      setCourses(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <AdminNav />
      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className="bg-white py-5 rounded-2xl w-1/3 px-5">
          <h4 className="text-4xl text-gray-700 font-semibold text-center py-5">
            Assign an Instructor To A Course
          </h4>
          <FormControl isRequired>
            <Stack spacing={5}>
              <select size="lg" variant="outline">
                <option value="">-- Select UWO ID --</option>
                {instructors &&
                  instructors.map((instructor) => (
                    <option value={instructor.uwo_id}>
                      {instructor.uwoId}
                    </option>
                  ))}
              </select>
              <select size="lg" variant="outline">
                <option value="">-- Select a Course Code --</option>
                {courses &&
                  courses.map((course) => (
                    <option value={course.courseCode}>
                      {course.courseCode}
                    </option>
                  ))}
              </select>

              <Button className="text-gray-700 rounded-md hover:opacity-100">
                Assign
              </Button>
            </Stack>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
