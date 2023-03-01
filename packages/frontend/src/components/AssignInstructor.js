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

export default function AssignInstructor() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <AdminNav />
      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className="bg-white py-5 rounded-2xl w-1/3 px-5">
          <h4 className="text-4xl text-gray-700 font-semibold text-center py-5">
            Assign an Instructor To A Course
          </h4>
          <FormControl isRequired>
            <Stack spacing={5}>
            <select size="lg" variant="outline">
              <option value="">-- Select UWO ID --</option>
              <option value="hlyytika@uwo.ca">hlyytika@uwo.ca</option>
              <option value="xyz123@uwo.ca">xyz123@uwo.ca</option>
              <option value="abc456@uwo.ca">abc456@uwo.ca</option>
            </select>
            <select size="lg" variant="outline">
              <option value="">-- Select UWO ID --</option>
              <option value="hlyytika@uwo.ca">hlyytika@uwo.ca</option>
              <option value="xyz123@uwo.ca">xyz123@uwo.ca</option>
              <option value="abc456@uwo.ca">abc456@uwo.ca</option>
            </select>

             
             
              <Button className="text-gray-700 rounded-md hover:opacity-100">
                Assign
              </Button>
            </Stack>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
