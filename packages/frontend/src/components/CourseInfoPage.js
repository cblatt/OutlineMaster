import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  useDisclosure,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import { Select } from "chakra-react-select";
import { DeleteIcon } from "@chakra-ui/icons";

const CourseInfo = () => {
  const location = useLocation();
  const [course, setCourse] = useState();

  const {
    isOpen: assignIsOpen,
    onOpen: assignOnOpen,
    onClose: assignOnClose,
  } = useDisclosure();

  const {
    isOpen: courseIsOpen,
    onOpen: courseOnOpen,
    onClose: courseOnClose,
  } = useDisclosure();

  const courseUrl = location.pathname;

  const fetchCourseData = useCallback(async () => {
    const res = await fetch(courseUrl, { method: "GET" });
    const data = await res.json();
    setCourse(data);
  }, [courseUrl]);

  useEffect(() => {
    fetchCourseData();
  }, [fetchCourseData, courseUrl]);

  if (!course) {
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
          <Heading size="lg" colorScheme="purple">
            {course.courseCode} {course.courseName}
          </Heading>

          <Stack spacing="24px" direction="row-reverse">
            <Button
              colorScheme="blackAlpha"
              variant="solid"
              onClick={courseOnOpen}
            >
              Edit Course Info
            </Button>
            <Button colorScheme="purple" variant="solid" onClick={assignOnOpen}>
              Manage Instructors
            </Button>
          </Stack>
        </div>
        <div>{course.courseName}</div>
        <div>{course.courseCode}</div>
        <div>
          Instructors:
          <div>
            {course.InstructorCourse &&
              course.InstructorCourse.map((courseInstructor) => {
                return (
                  <div key={courseInstructor.user?.uwoId}>
                    {courseInstructor.user?.firstName}{" "}
                    {courseInstructor.user?.lastName}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <AssignInstructorModal
        course={course}
        fetchCourseData={fetchCourseData}
        assignOnClose={assignOnClose}
        assignIsOpen={assignIsOpen}
      />
      <CourseEditModal
        course={course}
        courseIsOpen={courseIsOpen}
        courseOnClose={courseOnClose}
        fetchCourseData={fetchCourseData}
      />
    </div>
  );
};

const CourseEditModal = ({
  course,
  fetchCourseData,
  courseOnClose,
  courseIsOpen,
}) => {
  const courseDefaultValues = {
    courseName: course.courseName,
    courseCode: course.courseCode,
  };

  const {
    register: courseRegister,
    handleSubmit: courseHandleSubmit,
    reset: courseReset,
    setError: courseSetError,
    formState: { errors: courseErrors },
  } = useForm({ defaultValues: courseDefaultValues });

  const editCourse = (formData) => {
    //Filter data to remove empty strings before submitting
    const filteredData = Object.keys(formData)
      .filter((key) => {
        if (formData[key] === "") {
          return false;
        }
        return true;
      })
      .reduce((obj, key) => {
        obj[key] = formData[key];
        return obj;
      }, {});

    fetch(`/courses/${course.courseUuid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
      body: JSON.stringify(filteredData),
    }).then((response) => {
      if (response.status === 200) {
        fetchCourseData();
        closeCourseModal();
      } else {
        courseSetError("submissionError", {
          type: 500,
          message: "Could not submit",
        });
      }
    });
  };

  const closeCourseModal = () => {
    courseOnClose();
    courseReset();
  };

  return (
    <Modal isOpen={courseIsOpen} onClose={closeCourseModal} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Course</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="24px">
            <FormControl isInvalid={courseErrors.courseName}>
              <FormLabel>Course Name</FormLabel>
              <Input
                focusBorderColor="purple.400"
                type="text"
                placeholder="Name"
                {...courseRegister("courseName")}
              />
              <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={courseErrors.courseCode}>
              <FormLabel>Course Code</FormLabel>
              <Input
                focusBorderColor="purple.400"
                type="text"
                placeholder="Code"
                {...courseRegister("courseCode")}
              />
              <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>
          </VStack>
          <FormControl isInvalid={courseErrors.submissionError}>
            <FormErrorMessage>
              {courseErrors.submissionError?.message}
            </FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="purple"
            variant="outline"
            mr={3}
            onClick={closeCourseModal}
          >
            Close
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={courseHandleSubmit(editCourse)}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const AssignInstructorModal = ({
  course,
  fetchCourseData,
  assignOnClose,
  assignIsOpen,
}) => {
  const assignDefaultValues = { uwoId: [] };
  const courseInstructors = course.InstructorCourse;
  const [instructors, setInstructors] = useState([]);
  const {
    handleSubmit: assignHandleSubmit,
    reset: assignReset,
    setError: assignSetError,
    control: assignControl,
    formState: { errors: assignErrors },
  } = useForm({ assignDefaultValues });

  const closeAssignModal = () => {
    assignOnClose();
    assignReset();
  };

  const fetchInstructors = useCallback(async () => {
    fetch("/users/instructors", { method: "GET" })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (courseInstructors) {
          setInstructors(
            data.filter(
              (user) =>
                !courseInstructors
                  .map((courseInstructor) => courseInstructor.user.uwoId)
                  .includes(user.uwoId)
            )
          );
        }
      });
  }, [courseInstructors]);

  useEffect(() => {
    fetchInstructors();
  }, [fetchInstructors, courseInstructors]);

  const addInstructor = (formData) => {
    if (formData.uwoId.length === 0) {
      return;
    }

    fetch(`${process.env.REACT_APP_API_URI}/instructor-courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
      body: JSON.stringify({
        uwoId: formData.uwoId.value,
        courseUuid: course.courseUuid,
      }),
    }).then((response) => {
      if (response.status === 201) {
        fetchCourseData();
        assignReset(assignDefaultValues);
      } else {
        assignSetError("submissionError", {
          type: 500,
          message: "Could not submit",
        });
      }
    });
  };

  const removeCourseInstructor = (uwoId) => {
    fetch(`/instructor-courses/${uwoId}/${course.courseUuid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
    }).then((response) => {
      if (response.status === 200) {
        fetchCourseData();
      }
    });
  };

  return (
    <Modal isOpen={assignIsOpen} onClose={closeAssignModal} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Manage Instructors</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase" paddingBottom="8px">
                Current Instructors
              </Heading>
              <List spacing={3}>
                {courseInstructors &&
                  courseInstructors.map((instructor) => {
                    return (
                      <ListItem key={instructor.user.uwoId}>
                        <HStack spacing="24px">
                          <div>
                            {instructor.user?.firstName}{" "}
                            {instructor.user?.lastName}
                          </div>
                          <Icon
                            style={{ cursor: "pointer" }}
                            as={DeleteIcon}
                            onClick={() =>
                              removeCourseInstructor(instructor.uwoId)
                            }
                          />
                        </HStack>
                      </ListItem>
                    );
                  })}
              </List>
            </Box>
            <Controller
              control={assignControl}
              name="uwoId"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <Select
                  name={name}
                  ref={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  focusBorderColor="purple.400"
                  selectedOptionColorScheme="purple"
                  colorScheme="purple"
                  options={instructors.map((instructor) => {
                    return {
                      label: `${instructor.firstName} ${instructor.lastName} - ${instructor.uwoId}`,
                      value: instructor.uwoId,
                    };
                  })}
                />
              )}
            />
          </Stack>

          <FormControl isInvalid={assignErrors.submissionError}>
            <FormErrorMessage>
              {assignErrors.submissionError?.message}
            </FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="purple"
            variant="outline"
            mr={3}
            onClick={closeAssignModal}
          >
            Close
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={assignHandleSubmit(addInstructor)}
          >
            Add Instructor
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseInfo;
