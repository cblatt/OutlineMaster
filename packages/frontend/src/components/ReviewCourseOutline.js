import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, useParams } from "react-router-dom";
import OutlineComments from "./OutlineComments";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Button,
  SimpleGrid,
  Checkbox,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import AdminNav from "./AdminNav";
import ChairNav from "./ChairNav";
import { PreviewOutline } from "./PreviewOutline";

export default function ReviewCourseOutline() {
  const params = useParams();
  const navigate = useNavigate();
  var id = params.courseUuid;
  var version = params.versionNum;

  const [courseOutline, setCourseOutline] = useState();

  const fetchData = useCallback(
    async function fetchData() {
      const res = await fetch(
        `${process.env.REACT_APP_API_URI}/course-outline/findOne/${id}/${version}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Content-length": 7,
            Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setCourseOutline(data);
    },
    [id, version]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // logic for approving goes here
  const handleApprove = async () => {
    await fetch(
      process.env.REACT_APP_API_URI + `/course-outline/${id}/${version}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isApproved: "APPROVED",
        }),
      }
    );
    navigate(`/review`);
  };

  const handleDeny = async () => {
    await fetch(
      process.env.REACT_APP_API_URI + `/course-outline/${id}/${version}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isApproved: "REJECTED",
        }),
      }
    );

    navigate(`/review`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500">
      <ChairNav />
      <Button
        style={{ margin: "12px" }}
        onClick={() => {
          navigate("/review");
        }}
      >
        Go back
      </Button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "24px",
          alignItems: "center",
        }}
      >
        {courseOutline && (
          <PreviewOutline
            courseOutline={courseOutline}
            department={courseOutline.department}
            course={courseOutline.course}
            showToolbar={courseOutline.isApproved === "APPROVED"}
          />
        )}
        <VStack width="600px">
          <HStack>
            <Button
              style={{ margin: "12px" }}
              colorScheme="red"
              onClick={handleDeny}
            >
              Deny
            </Button>
            <Button
              style={{ margin: "12px" }}
              colorScheme="purple"
              onClick={handleApprove}
            >
              Approve
            </Button>
          </HStack>
          <OutlineComments />
        </VStack>
      </div>
    </div>
  );
}
