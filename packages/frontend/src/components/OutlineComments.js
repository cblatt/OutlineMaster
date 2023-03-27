import { Box, Button, FormControl, Textarea, VStack } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function OutlineComments() {
  const params = useParams();
  var id = params.courseUuid;
  var version = params.versionNum;
  const [comments, setComments] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const getComments = useCallback(async () => {
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
    setComments(result);
  }, [id, version]);

  //Gets all the comments to display live

  useEffect(() => {
    getComments();
  }, [getComments]);

  //Posting comments to database
  function onSubmit(data) {
    fetch(process.env.REACT_APP_API_URI + "/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
        Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
      },
      body: JSON.stringify({ ...data, outlineId: id, versionId: version }),
    }).then(() => {
      getComments();
      reset();
    });
  }

  return (
    <div style={{ width: "inherit" }}>
      <center>
        <Box
          style={{
            background: "white",
            width: "80%",
            padding: 24,
            borderRadius: "8px",
          }}
        >
          <h2 className="font-bold text-lg mb-3">Comments:</h2>
          <VStack spacing={6}>
            <VStack
              width="100%"
              maxHeight="400px"
              overflow="auto"
              spacing="12px"
              backgroundColor="#f5f5f5"
              border="1px solid #dcdcdc"
              borderRadius="8px"
              padding="12px"
            >
              {comments.map((comment) => (
                <Box
                  key={comment.commentId}
                  style={{
                    backgroundColor: "#d8b4fe",
                    width: "80%",
                    padding: 24,
                    borderRadius: "8px",
                    textAlign: "left",
                  }}
                >
                  {comment.commentTxt}
                </Box>
              ))}
            </VStack>
            <FormControl>
              <Textarea
                placeholder="Comments..."
                focusBorderColor="purple.500"
                {...register("commentTxt", { required: true })}
              />
            </FormControl>
            <Button onClick={handleSubmit(onSubmit)} colorScheme="gray">
              Submit
            </Button>
          </VStack>
        </Box>
      </center>
    </div>
  );
}
