import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import AdminNav from "./AdminNav";

export default function CreateCourse() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/departments");
      const data = await response.json();
      setDepartments(data);
      console.log(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Convert FormData to object
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Convert year to integer
    data.year = parseInt(data.year);

    await fetch("/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... ">
      <AdminNav />

      <div className="min-h-screen flex flex-col justify-center items-center  ">
        <div className="bg-white py-5 rounded-2xl w-1/3 px-5">
          <h2 className="text-4xl text-gray-700 font-semibold text-center py-5">
            Create Course
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <h2 className="font-bold text-lg">Course Code:</h2>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  name="courseCode"
                  placeholder="Course Code"
                  required
                />
              </div>
              <h2 className="font-bold text-lg">Semester:</h2>
              <div style={{ display: "flex" }}>
                <select name="semester" required>
                  <option value="">Select a semester</option>
                  <option value="FALL">Fall</option>
                  <option value="WINTER">Winter</option>
                  <option value="SUMMER">Summer</option>
                </select>
              </div>

              <h2 className="font-bold text-lg">Year:</h2>
              <div style={{ display: "flex" }}>
                <input type="text" name="year" placeholder="Year" required />
              </div>

              <h2 className="font-bold text-lg">Course Name:</h2>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  name="courseName"
                  placeholder="Course"
                  required
                />
              </div>

              <h2 className="font-bold text-lg">Department:</h2>
              <div style={{ display: "flex" }}>
                <select name="departmentUuid" required>
                  <option value="">Select a department</option>
                  {departments.map((department) => (
                    <option
                      key={department.departmentUuid}
                      value={department.departmentUuid}
                    >
                      {department.departmentName}
                    </option>
                  ))}
                </select>
              </div>

              <br />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
