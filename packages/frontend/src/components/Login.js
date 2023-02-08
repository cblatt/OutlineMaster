import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  async function onSubmit(data) {
    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
      })
      .then((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          console.log(user);
        }
      });
  }

  const logOut = () => {
    setUser({});
    localStorage.clear();
  };

  if (user) {
    return (
      <div>
        <div>{user.uwoId} is logged in</div>
        <Button onClick={logOut}>Log Out</Button>
      </div>
    );
  }

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
            <Input
              type="text"
              placeholder="Email"
              {...register("uwoId", { required: true })}
            ></Input>
            {errors.uwoId && <span>This field is required</span>}
            <label className="block font-semibold mt-10">Password</label>
            <Input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            ></Input>
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
