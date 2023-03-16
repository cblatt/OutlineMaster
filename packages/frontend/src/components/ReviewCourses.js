import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        process.env.REACT_APP_API_URI + "/course-outline",
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

  const [courseUuid, setCourseUuid] = useState("");
  const [versionNum, setVersionNum] = useState("");

  const handleSelectChange = (e) => {
    const [uuid, num] = e.target.value.split(":");
    setCourseUuid(uuid);
    setVersionNum(num);
  };

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
              <select
                size="lg"
                variant="outline"
                name="course"
                onChange={handleSelectChange}
              >
                <option value="">-- Select UWO Course --</option>
                {instructors &&
                  instructors.map((instructor) => (
                    <option
                      key={`${instructor.courseUuid}:${instructor.versionNum}`}
                      value={`${instructor.courseUuid}:${instructor.versionNum}`}
                    >
                      {`${instructor.titleLbl} ${instructor.codeLbl}, Version #:${instructor.versionNum}`}
                    </option>
                  ))}
              </select>
              <span>
                <Button
                  className="text-gray-700 rounded-md hover:opacity-100 mr-10 ml-10"
                  onClick={() =>
                    navigate(
                      `../edit-course-outline/${courseUuid}/${versionNum}`
                    )
                  }
                >
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
