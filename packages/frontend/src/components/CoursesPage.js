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

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchCourses = useCallback(async () => {
    const res = await fetch(process.env.REACT_APP_API_URI + "/courses", {
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
            Courses
          </Heading>
          <Stack spacing="24px" direction="row-reverse">
            <Button colorScheme="blackAlpha" variant="solid" onClick={onOpen}>
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
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((course) => {
                console.log(course);
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
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <CourseAddModal
        fetchCourses={fetchCourses}
        onClose={onClose}
        isOpen={isOpen}
      />
    </div>
  );
};

const CourseAddModal = ({ fetchCourses, onClose, isOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = useCallback(async () => {
    const res = await fetch(process.env.REACT_APP_API_URI + "/departments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
    });
    const data = await res.json();
    setDepartments(data);
  }, []);

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  const addCourse = (formData) => {
    fetch(`${process.env.REACT_APP_API_URI}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.status === 201) {
        fetchCourses();
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
            <FormControl isRequired isInvalid={errors.departmentUuid}>
              <FormLabel>Department</FormLabel>
              <Select
                focusBorderColor="purple.400"
                {...register("departmentUuid", { required: true })}
              >
                {departments.map((department) => {
                  return (
                    <option
                      value={department.departmentUuid}
                      key={department.departmentUuid}
                    >
                      {department.departmentCode} - {department.departmentName}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>Error</FormErrorMessage>
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

export default Courses;
