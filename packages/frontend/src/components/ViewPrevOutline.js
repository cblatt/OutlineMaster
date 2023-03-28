import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@chakra-ui/react";
import InstructorNav from "./InstructorNav";
import { PreviewOutline } from "./PreviewOutline";
import ViewComments from "./ViewComments";

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500">
      <InstructorNav />
      <Button
        style={{ margin: "12px" }}
        onClick={() => {
          navigate("/prev-outlines");
        }}
      >
        Go back
      </Button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {courseOutline && (
          <PreviewOutline
            courseOutline={courseOutline}
            department={courseOutline.department}
            course={courseOutline.course}
            showToolbar={courseOutline.isApproved === "APPROVED"}
          />
        )}
        <Button
          style={{ margin: "12px" }}
          colorScheme="purple"
          onClick={() => {
            navigate(`/edit-outline/${id}/${version}`);
          }}
        >
          Edit Outline
        </Button>

        <ViewComments></ViewComments>
      </div>
    </div>
  );
}
