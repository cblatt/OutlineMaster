import React, { useState } from "react";
import {
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import AdminNav from "./AdminNav";

export default function AddInstructor() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <AdminNav />
      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className="bg-white py-5 rounded-2xl w-1/3 px-5">
          <h4 className="text-4xl text-gray-700 font-semibold text-center py-5">
            Add an Instructor
          </h4>
          <FormControl isRequired>
            <Stack spacing={5}>
              <Input
                type="text"
                size="lg"
                variant="outline"
                placeholder="UWO ID"
              />

              <Input
                type="email"
                size="lg"
                variant="outline"
                placeholder="Email"
              />
              <InputGroup>
                <Input
                  pr="4.5rem"
                  size="lg"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
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
              />
              <Input
                type="text"
                size="lg"
                variant="outline"
                placeholder="Last Name"
              />
              <Button className="text-gray-700 rounded-md hover:opacity-100">
                Add Instructor
              </Button>
            </Stack>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
