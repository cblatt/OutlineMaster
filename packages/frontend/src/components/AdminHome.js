import React from "react";
import AdminTable from "./AdminTable";
import AdminNav from "./AdminNav";

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 flex flex-col justify-center">
      <AdminNav />
      <div className="min-h-screen flex flex-col pt-20 ">
        <h2 className="text-5xl text-center text-white font-semibold uppercase tracking-[5px]">
          Admin Portal
        </h2>
        <AdminTable />
      </div>
    </div>
  );
}
