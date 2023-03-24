import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

const DepartmentCourses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const departmentUuid = location.pathname.split("/")[2];
  const [department, setDepartment] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchDepartment = useCallback(async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URI}/departments/${departmentUuid}`,
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
    setDepartment(data);
  }, [departmentUuid]);

  useEffect(() => {
    fetchDepartment();
  }, [fetchDepartment, departmentUuid]);

  const goToCourse = (uuid) => {
    navigate(`/courses/${uuid}`);
  };

  if (!department) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
        <AdminNav />
        <div style={{ padding: "24px" }}>
          <Heading size="lg" colorScheme="purple">
            Loading...
          </Heading>
        </div>
      </div>
    );
  }

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
          <Heading size="lg">
            {department.departmentCode} - {department.departmentName}
          </Heading>

          <Stack spacing="24px" direction="row-reverse">
            <Button colorScheme="blackAlpha" variant="solid" onClick={onOpen}>
              Add Course
            </Button>
          </Stack>
        </div>
        <div style={{ paddingBottom: "24px" }}>
          <Heading size="md">Courses</Heading>
        </div>

        <TableContainer background="whitesmoke" borderRadius="8px">
          <Table variant="simple" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>Course Name</Th>
                <Th>Course Code</Th>
                <Th>Instructors</Th>
              </Tr>
            </Thead>
            <Tbody>
              {department.courses.map((course) => {
                return (
                  <Tr
                    style={{ cursor: "pointer" }}
                    onClick={() => goToCourse(course.courseUuid)}
                    key={course.courseUuid}
                  >
                    <Td>{course.courseName}</Td>
                    <Td>
                      {department.departmentCode}
                      {course.courseCode}
                    </Td>
                    <Td>
                      <UnorderedList>
                        {course.InstructorCourse.map((instructorCourse) => {
                          return (
                            <ListItem
                              key={
                                instructorCourse.uwoId +
                                instructorCourse.courseUuid
                              }
                            >
                              {instructorCourse.user.firstName}{" "}
                              {instructorCourse.user.lastName}
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <CourseAddModal
        department={department}
        fetchDepartment={fetchDepartment}
        onClose={onClose}
        isOpen={isOpen}
      />
    </div>
  );
};

const CourseAddModal = ({ department, fetchDepartment, onClose, isOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const addCourse = (formData) => {
    fetch(`${process.env.REACT_APP_API_URI}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
      body: JSON.stringify({
        departmentUuid: department.departmentUuid,
        ...formData,
      }),
    }).then((response) => {
      if (response.status === 201) {
        fetchDepartment();
        closeModal();
      } else {
        setError("submissionError", {
          type: 500,
          message: "Could not submit",
        });
      }
    });
  };

  const closeModal = () => {
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Course</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="24px">
            <FormControl isRequired isInvalid={errors.courseName}>
              <FormLabel>Course Name</FormLabel>
              <Input
                focusBorderColor="purple.400"
                type="text"
                placeholder="Name"
                {...register("courseName", { required: "Required" })}
              />
              <FormErrorMessage>{errors.courseName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.courseCode}>
              <FormLabel>Course Code</FormLabel>
              <Input
                focusBorderColor="purple.400"
                type="text"
                placeholder="Code"
                {...register("courseCode", { required: "Required" })}
              />
              <FormErrorMessage>{errors.courseCode?.message}</FormErrorMessage>
            </FormControl>
          </VStack>
          <FormControl isInvalid={errors.submissionError}>
            <FormErrorMessage>
              {errors.submissionError?.message}
            </FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="purple"
            variant="outline"
            mr={3}
            onClick={closeModal}
          >
            Close
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleSubmit(addCourse)}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DepartmentCourses;
