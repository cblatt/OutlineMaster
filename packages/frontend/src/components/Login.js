import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 py-6 flex flex-col justify-center sm:py-12">
      <h4 className="text-5xl text-center pb-24 text-white font-semibold uppercase tracking-[5px]">
        {" "}
        WESTERN UNIVERSITY ECE COURSE OUTLINE MANAGER
      </h4>
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-3xl font-semibold text-white">Login</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="px-8 py-6">
            <label className="block font-semibold">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="border w-full h-8 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-purple-500 rounded-md"
            ></input>
            <label className="block font-semibold mt-10">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full h-8 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-purple-500 rounded-md"
            ></input>
            <div className="flex justify-center items-baseline">
              <button
                type="submit"
                className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:opacity-50 hover:purple-600"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
