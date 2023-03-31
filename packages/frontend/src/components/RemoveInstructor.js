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
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

const RemoveInstructor = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  function deleteUser(user) {
    fetch(`${process.env.REACT_APP_API_URI}/users/${user}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
    }).then((response) => {
      if (response.status === 200) {
        fetchCourses();
      }
    });
  }

  const fetchCourses = useCallback(async () => {
    const res = await fetch(process.env.REACT_APP_API_URI + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
    });
    const data = await res.json();
    setCourses(data);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

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
            Users
          </Heading>
        </div>
        <TableContainer background="whitesmoke" borderRadius="8px">
          <Table variant="simple" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>UWO ID</Th>
                <Th>Email</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Role</Th>
                <Th>Department</Th>
                <Th>Remove User</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((course) => {
                return (
                  <Tr key={course.uwoId}>
                    <Td>{course.uwoId}</Td>
                    <Td>{course.email}</Td>
                    <Td>{course.firstName}</Td>
                    <Td>{course.lastName}</Td>
                    <Td>{course.role.replace("_", " ")}</Td>
                    <Td>{course.department?.departmentName}</Td>
                    <Td>
                      <Button onClick={() => deleteUser(course.uwoId)}>
                        Remove User
                      </Button>
                    </Td>
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

export default RemoveInstructor;
