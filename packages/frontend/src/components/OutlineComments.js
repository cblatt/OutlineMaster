import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BrowserRouter, Route, useParams } from "react-router-dom";

export default function OutlineComments() {
  const params = useParams();
  var id = params.courseUuid;
  var version = params.versionNum;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Gets all the comments to display live
  const [cmnts, setcmnts] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  //Gets comments from database
  const getComments = async () => {
    let result = await fetch(
      process.env.REACT_APP_API_URI + `/comments/${id}/${version}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
      }
    );
    result = await result.json();
    setcmnts(result);
  };

  //Posting comments to database
  async function onSubmit(data) {
    fetch(process.env.REACT_APP_API_URI + "/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
      body: JSON.stringify({ ...data, outlineId: id, versionId: version }),
    });
    getComments();
  }

  return (
    <div>
      <center>
        <div className="w-1/4 h-screen left-0 top-0 ">
          <h2 className="font-bold text-lg">Comments:</h2>
          <div className="bg-purple-400  left-0 top-0 rounded-lg ">
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
      </center>
    </div>
  );
}
