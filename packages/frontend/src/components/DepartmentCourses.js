import {
  Button,
  Heading,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

const DepartmentCourses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const departmentUuid = location.state?.departmentUuid;

  useEffect(() => {
    if (departmentUuid === undefined) {
      navigate("/departments");
    }
  }, [location, navigate, departmentUuid]);

  const goToCourse = (uuid) => {
    navigate(`/courses/${uuid}`);
  };

  return departmentUuid ? (
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
            {departmentUuid}
          </Heading>
          <Stack spacing="24px" direction="row-reverse">
            <Button colorScheme="blackAlpha" variant="solid">
              Add Course
            </Button>
          </Stack>
        </div>
        <TableContainer background="whitesmoke" borderRadius="8px">
          <Table variant="simple" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>Course Name</Th>
                <Th>Course Code</Th>
                <Th>Semester</Th>
                <Th>Year</Th>
                <Th>Instructors</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr
                style={{ cursor: "pointer" }}
                onClick={() =>
                  goToCourse("f6ee6908-3494-4d43-9c86-3e532aec2596")
                }
              >
                <Td>Software Design</Td>
                <Td>3350</Td>
                <Td>WINTER</Td>
                <Td>2023</Td>
                <Td>John Smith</Td>
              </Tr>
              <Tr style={{ cursor: "pointer" }} onClick={goToCourse}>
                <Td>Software Design</Td>
                <Td>3350</Td>
                <Td>WINTER</Td>
                <Td>2023</Td>
                <Td>John Smith</Td>
              </Tr>
              <Tr style={{ cursor: "pointer" }} onClick={goToCourse}>
                <Td>Software Design</Td>
                <Td>3350</Td>
                <Td>WINTER</Td>
                <Td>2023</Td>
                <Td>John Smith</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr style={{ cursor: "pointer" }} onClick={goToCourse}>
                <Td>Software Design</Td>
                <Td>3350</Td>
                <Td>WINTER</Td>
                <Td>2023</Td>
                <Td>John Smith</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default DepartmentCourses;
