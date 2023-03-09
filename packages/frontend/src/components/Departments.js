import React, { useEffect, useState } from "react";
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

const DepartmentCard = ({ name, code }) => {
  return (
    <Card size={"lg"}>
      <CardHeader>
        <Heading size="md">{name}</Heading>
        <Heading size="xs" textTransform="uppercase">
          {code}
        </Heading>
      </CardHeader>
      <CardFooter>
        <HStack spacing="10px">
          <Button colorScheme="purple">View Courses</Button>
          <Button colorScheme="purple" variant="outline">
            Edit Department
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

const Departments = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [departments, setDepartments] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/departments", { method: "GET" });
      const data = await res.json();
      setDepartments(data);
    }
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    fetch("/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (response.status === 201) {
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
                <WrapItem>
                  <DepartmentCard
                    name={department.departmentName}
                    code={department.departmentCode}
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
    </div>
  );
};

export default Departments;
