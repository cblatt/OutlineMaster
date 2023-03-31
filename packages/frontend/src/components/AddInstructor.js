import {
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  Select,
  FormErrorMessage
} from "@chakra-ui/react";
import AdminNav from "./AdminNav";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

export default function AddInstructor() {
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

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const role = watch("role");

  async function onSubmit(data) {
    try {
      const res = await fetch(process.env.REACT_APP_API_URI + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
        body: JSON.stringify({ ...data }),
      });
      if (res.status === 201) {
        const user = await res.json();
        if (user) {
          navigate("/courses", { replace: true });
        }
      } else {
        setIsError(true);
        throw new Error("Failed to add user");
      }
    } catch (err) {
      setIsError(true);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <AdminNav />
      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className="bg-white py-5 rounded-2xl w-1/3 px-5">
          <h4 className="text-4xl text-gray-700 font-semibold text-center py-5">
            Add a User
          </h4>
          <FormControl isInvalid={isError}>
            <Stack spacing={5}>
              <Input
                type="text"
                size="lg"
                variant="outline"
                placeholder="UWO ID"
                {...register("uwoId", { required: true })}
              />

              <Input
                type="email"
                size="lg"
                variant="outline"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <InputGroup>
                <Input
                  pr="4.5rem"
                  size="lg"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password", { required: true })}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    marginTop={2}
                    h="2rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Input
                type="text"
                size="lg"
                variant="outline"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              <Input
                type="text"
                size="lg"
                variant="outline"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />

              <Select
                focusBorderColor="purple.400"
                size="lg"
                variant="outline"
                name="course"
                placeholder="Role"
                {...register("role", { required: true })}
              >
                <option value="INSTRUCTOR">Instructor</option>
                <option value="INSTRUCTOR">Instructor</option>
                <option value="ADMINISTRATOR">Administrator</option>
                <option value="DEPARTMENT_CHAIR">Department Chair</option>
                <option value="ASSOCIATE_CHAIR">Associate Chair</option>
                <option value="PROGRAM_DIRECTOR">Program Director</option>
              </Select>

              {(role === "DEPARTMENT_CHAIR" ||
                role === "ASSOCIATE_CHAIR" ||
                role === "PROGRAM_DIRECTOR") && (
                <Select
                  focusBorderColor="purple.400"
                  placeholder="Department"
                  {...register("departmentUuid", { required: true })}
                >
                  {departments.map((department) => {
                    return (
                      <option
                        value={department.departmentUuid}
                        key={department.departmentUuid}
                      >
                        {department.departmentCode} -{" "}
                        {department.departmentName}
                      </option>
                    );
                  })}
                </Select>
              )}

              <Button
                className="text-gray-700 rounded-md hover:opacity-100"
                onClick={handleSubmit(onSubmit)}
              >
                Add User
              </Button>
            </Stack>
            <FormErrorMessage>Invalid Credentials</FormErrorMessage>
          </FormControl>

        </div>

      </div>
    </div>
  );
}
