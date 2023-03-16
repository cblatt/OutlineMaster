import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import AdminNav from "./AdminNav";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const DepartmentCard = ({ department, openEditModal }) => {
  const navigate = useNavigate();
  return (
    <Card size={"lg"}>
      <CardHeader>
        <Heading size="md">{department.departmentName}</Heading>
        <Heading size="xs" textTransform="uppercase">
          {department.departmentCode}
        </Heading>
      </CardHeader>
      <CardFooter>
        <HStack spacing="10px">
          <Button
            colorScheme="purple"
            onClick={() => navigate(`${department.departmentUuid}/courses`)}
          >
            View Courses
          </Button>
          <Button
            colorScheme="purple"
            variant="outline"
            onClick={() => openEditModal(department)}
          >
            Edit Department
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

const Departments = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

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

  const onSubmit = async (data) => {
    fetch(process.env.REACT_APP_API_URI + "/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (response.status === 201) {
        fetchDepartments();
        closeModal();
      } else {
        const data = await response.json();
        setError("submissionError", {
          type: data.statusCode,
          message: data.message,
        });
      }
    });
  };

  const openEditModal = (department) => {
    setSelectedDepartment(department);
    onEditOpen();
  };

  const closeModal = () => {
    onClose();
    reset();
  };

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
            Departments
          </Heading>
          <Stack spacing="24px" direction="row-reverse">
            <Button colorScheme="blackAlpha" variant="solid" onClick={onOpen}>
              Add Department
            </Button>
          </Stack>
        </div>

        <Wrap spacing="30px">
          {departments.length === 0 ? (
            <Text fontSize="2xl">No Departments</Text>
          ) : (
            departments.map((department) => {
              return (
                <WrapItem key={department.departmentUuid}>
                  <DepartmentCard
                    department={department}
                    openEditModal={openEditModal}
                  />
                </WrapItem>
              );
            })
          )}
          {}
        </Wrap>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Department</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="24px">
              <FormControl isRequired isInvalid={errors.departmentName}>
                <FormLabel>Department Name</FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  type="text"
                  placeholder="Name"
                  {...register("departmentName", { required: true })}
                />
                <FormErrorMessage>Field is required.</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.departmentCode}>
                <FormLabel>Department Code</FormLabel>
                <Input
                  focusBorderColor="purple.400"
                  type="text"
                  placeholder="Code"
                  {...register("departmentCode", { required: true })}
                />
                <FormErrorMessage>Field is required.</FormErrorMessage>
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
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              colorScheme="purple"
              variant="solid"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isEditOpen && (
        <EditModal
          onClose={onEditClose}
          isOpen={isEditOpen}
          selectedDepartment={selectedDepartment}
          fetchDepartments={fetchDepartments}
        />
      )}
    </div>
  );
};

const EditModal = ({
  onClose,
  isOpen,
  selectedDepartment,
  fetchDepartments,
}) => {
  const defaultValues = {
    departmentCode: selectedDepartment.departmentCode,
    departmentName: selectedDepartment.departmentName,
  };
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });

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

    fetch(
      `${process.env.REACT_APP_API_URI}/departments/${selectedDepartment.departmentUuid}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
        body: JSON.stringify(filteredData),
      }
    ).then((response) => {
      if (response.status === 200) {
        fetchDepartments();
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
        <ModalHeader>Edit Department</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="24px">
            <FormControl isInvalid={errors.departmentName}>
              <FormLabel>Department Name</FormLabel>
              <Input
                focusBorderColor="purple.400"
                type="text"
                placeholder="Name"
                {...register("departmentName")}
              />
              <FormErrorMessage>{errors.departmentName?.type}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.departmentCode}>
              <FormLabel>Department Code</FormLabel>
              <Input
                focusBorderColor="purple.400"
                type="text"
                placeholder="Code"
                {...register("departmentCode")}
              />
              <FormErrorMessage>{errors.departmentCode?.type}</FormErrorMessage>
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
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={handleSubmit(editCourse)}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Departments;
