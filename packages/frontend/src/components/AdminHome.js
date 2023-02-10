import React, { useEffect } from "react";
import AdminTable from "./AdminTable";
import AdminNav from "./AdminNav";

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 py-6 flex flex-col justify-center sm:py-12">
      <AdminNav />
      <h2 className="text-5xl text-center pb-24 text-white font-semibold uppercase tracking-[5px]">
        {" "}
        Admin Portal
      </h2>

      <AdminTable />
    </div>
  );
}
