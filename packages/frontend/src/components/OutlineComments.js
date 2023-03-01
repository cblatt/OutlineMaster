import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function OutlineComments() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Comment works
  const [cmnts, setcmnts] = useState([]);
  //Shows current comments

  useEffect(() => {
    getComments();
  }, []);

  //shows coments on playlist
  const getComments = async () => {
    let result = await fetch(`/comments`);
    result = await result.json();
    setcmnts(result);
  };

  //Submiting comments
  async function onSubmit(data) {
    console.log(data);

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
      },
      body: JSON.stringify(data),
    });

    getComments();
  }

  return (
    <div>
      <h2 className="text-5xl text-center pb-24 text-blue font-semibold uppercase tracking-[5px]">
        Course Outline
      </h2>

      <div className="w-1/5 h-screen left-0 top-0">
        <h2 className="font-bold text-lg">Comments:</h2>
        <div className="bg-red-400 h-screen left-0 top-0 rounded-lg ">
          <div style={{ display: "flex" }}>
            <Input
              placeholder="Comments..."
              {...register("commentTxt", { required: true })}
            />
            <Button onClick={handleSubmit(onSubmit)} colorScheme="gray">
              Sumbit
            </Button>
          </div>
          <table id="t2" className="indent-5">
            <tbody>
              {cmnts.map((item) => (
                <tr>
                  <td>{item.commentTxt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
