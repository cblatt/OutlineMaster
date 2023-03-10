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

export default function ReviewCourses() {
  const [show, setShow] = useState(false);

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/courses", { method: "GET" });
      const data = await res.json();
      setInstructors(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <AdminNav />
      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className="bg-white py-5 rounded-2xl w-1/3 px-5">
          <h4 className="text-4xl text-gray-700 font-semibold text-center py-5">
            Review Course Outline
          </h4>
          <FormControl isRequired>
            <Stack spacing={5}>
              <select size="lg" variant="outline">
                <option value="">-- Select UWO Course --</option>
                {instructors &&
                  instructors.map((instructor) => (
                    <option value={instructor.courseCode}>
                      {`${instructor.courseName} ${instructor.courseCode}`}
                    </option>
                  ))}
              </select>
              <span>
                <Button className="text-gray-700 rounded-md hover:opacity-100 ml-10 mr-10">
                  Review
                </Button>
                <Button className="text-gray-700 rounded-md hover:opacity-100 mr-10">
                  Approve
                </Button>
                <Button className="text-gray-700 rounded-md hover:opacity-100">
                  Deny
                </Button>
              </span>
            </Stack>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
