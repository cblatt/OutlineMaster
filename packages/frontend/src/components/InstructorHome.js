import React from "react";
import CourseTable from "./InstructorTable";
import InstructorNav from "./InstructorNav";
export default function InstructorHome() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 flex flex-col justify-center">
      {" "}
      <InstructorNav />
      <div className="min-h-screen flex flex-col pt-20 ">
        <h2 className="text-5xl text-center pb-24 text-white font-semibold uppercase tracking-[5px]">
          {" "}
          Instructor Portal
        </h2>
        <CourseTable />
      </div>
    </div>
  );
}
