import {
  Button,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

const Courses = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/courses", { method: "GET" });
      const data = await res.json();
      setCourses(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <AdminNav />
      <div style={{ padding: "24px" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            margin: "10px 0 40px 0",
          }}
        >
          <Heading size="lg" colorScheme="purple">
            Courses
          </Heading>
          <Stack spacing="24px" direction="row-reverse">
            <Button colorScheme="blackAlpha" variant="solid">
              Add Course
            </Button>
          </Stack>
        </div>
        <TableContainer background="whitesmoke" borderRadius="8px">
          <Table variant="simple" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>Department Name</Th>
                <Th>Course Name</Th>
                <Th>Course Code</Th>
                <Th>Semester</Th>
                <Th>Year</Th>
                <Th>Instructors</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((course) => {
                return (
                  <Tr
                    key={course.courseUuid}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(course.courseUuid)}
                  >
                    <Td>{course.department.departmentName}</Td>
                    <Td>{course.courseName}</Td>
                    <Td>
                      {course.department.departmentCode}
                      {course.courseCode}
                    </Td>
                    <Td>{course.semester}</Td>
                    <Td>{course.year}</Td>
                    <Td>John Smith</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Courses;
