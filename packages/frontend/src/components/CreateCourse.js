import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function CreateCourse() {
  const {
    register,
    formState: { errors },
  } = useForm();

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
    <div>
      <h2 className="text-5xl text-center pb-24 text-blue font-semibold uppercase tracking-[5px]">
        Create Course
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="w-1/5 h-screen left-0 top-0 pl-5">
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
            <input
              type="text"
              name="semester"
              placeholder="Semester"
              required
            />
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
                <option key={department.id} value={department.id}>
                  {department.departmentUuid}
                </option>
              ))}
            </select>
          </div>

          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
