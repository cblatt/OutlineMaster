import React from "react";
import ChairNav from "./ChairNav";
import InstructorNav from "./InstructorNav";
export default function DptChairHome() {
  return (
    <div>
      <ChairNav></ChairNav>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 flex flex-col justify-center">
        {" "}
        <div className="min-h-screen flex flex-col pt-20 ">
          <h2 className="text-5xl text-center pb-24 text-white font-semibold uppercase tracking-[5px]">
            {" "}
            Chair & Director Portal
          </h2>
        </div>
      </div>
    </div>
  );
}
