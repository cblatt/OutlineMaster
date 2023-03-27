import React, { useEffect, useState } from "react";
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

export default function PreviousOutlines() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    const res = await fetch(process.env.REACT_APP_API_URI + "/course-outline", {
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

  useEffect(() => {
    fetchData();
  }, []);

  async function viewOutline(Uuid, vNum) {
    navigate(`../prev-course-outline/${Uuid}/${vNum}`);
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
            Previous Outlines
          </Heading>
        </div>
        <TableContainer background="whitesmoke" borderRadius="8px">
          <Table variant="simple" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>Course</Th>
                <Th>Year</Th>
                <Th>Version Num</Th>
                <Th>Outline Status</Th>
                <Td>View Outline</Td>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((course) => {
                return (
                  <Tr key={course.courseUuid} style={{ cursor: "pointer" }}>
                    <Td>{course.course.courseName}</Td>
                    <Td>{course.year}</Td>
                    <Td>{course.versionNum}</Td>
                    <Td>{course.isApproved}</Td>
                    <Button
                      className="mt-2 mb-2"
                      colorScheme="blackAlpha"
                      variant="solid"
                      onClick={() =>
                        viewOutline(course.courseUuid, course.versionNum)
                      }
                    >
                      View Outline
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
