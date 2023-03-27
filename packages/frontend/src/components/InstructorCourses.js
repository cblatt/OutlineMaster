import React, { useCallback, useEffect, useState } from "react";
import InstructorNav from "./InstructorNav";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function InstructorCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
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
  }, [setCourses, user.user.uwoId]);

  useEffect(() => {
    fetchInstructorCourses();
  }, [fetchInstructorCourses]);

  async function createOutline(Uuid) {
    navigate(Uuid);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <InstructorNav />
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
        </div>
        <TableContainer background="whitesmoke" borderRadius="8px">
          <Table variant="simple" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>Course Code</Th>
                <Th>Course Name</Th>
                <Td>View Outline</Td>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((instructorCourse) => {
                return (
                  <Tr
                    key={instructorCourse.course.courseUuid}
                    style={{ cursor: "pointer" }}
                  >
                    <Td>{instructorCourse.course.courseCode}</Td>
                    <Td>{instructorCourse.course.courseName}</Td>
                    <Button
                      className="mt-2 mb-2"
                      colorScheme="blackAlpha"
                      variant="solid"
                      onClick={() => createOutline(instructorCourse.courseUuid)}
                    >
                      Create New Outline
                    </Button>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
