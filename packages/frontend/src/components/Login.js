import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const [isError, setIsError] = useState(false);

  async function onSubmit(data) {
    try {
      const res = await fetch(process.env.REACT_APP_API_URI + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
        body: JSON.stringify(data),
      });
  
      if (res.status === 201) {
        const user = await res.json();
        if (user) {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          if (user.role === "ADMINISTRATOR") {
            navigate("/courses", { replace: true });
          } else if (user.role === "DEPARTMENT_CHAIR") {
            navigate("/dptChair-home", { replace: true });
          } else if (user.role === "ASSOCIATE_CHAIR") {
            navigate("/dptChair-home", { replace: true });
          } else if (user.role === "PROGRAM_DIRECTOR") {
            navigate("/dptChair-home", { replace: true });
          } else {
            navigate("/home", { replace: true });
          }
        }
      } else {
        setIsError(true);
        throw new Error("Login failed");
      }
    } catch (err) {
      setIsError(true);
    }
  }
  
  

  // if (user) {
  //   if (user.role === "ADMINISTRATOR")
  //     return <Navigate to="/admin-home" replace />;
  //   else if (
  //     user.role === "DEPARTMENT_CHAIR" ||
  //     "ASSOCIATE_CHAIR" ||
  //     "PROGRAM_DIRECTOR"
  //   ) {
  //     return <Navigate to="/dptChair-home" replace />;
  //   } else if (user.role === "INSTRUCTOR") {
  //     return <Navigate to="/home" replace />;
  //   } else {
  //   }
  // }

  

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-700 py-6 flex flex-col justify-center sm:py-12">
      <h4 className="text-5xl text-center pb-24 text-white font-semibold uppercase tracking-[5px]">
        {" "}
        WESTERN UNIVERSITY ECE COURSE OUTLINE MANAGER
      </h4>
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-3xl font-semibold text-white">Login</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="px-8 py-6">
            <label className="block font-semibold">UWO ID</label>
            <FormControl isInvalid={isError}>
            <Input
              type="text"
              placeholder="UWO ID"
              {...register("uwoId", { required: true })}
            ></Input>
            {errors.uwoId && <span>This field is required</span>}
            <label className="block font-semibold mt-10">Password</label>
            <Input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            ></Input>
            <FormErrorMessage>Invalid Credentials</FormErrorMessage>
            </FormControl>
            {errors.password && <span>This field is required</span>}
            <div className="flex justify-center items-baseline">
              <button
                type="submit"
                className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:opacity-50 hover:purple-600"
                onClick={handleSubmit(onSubmit)}
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
