import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OutlineComments from "./OutlineComments";

import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
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
              colorScheme="purple"
              onClick={handleApprove}
            >
              Approve
            </Button>
          </HStack>
          <OutlineComments />
        </VStack>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "24px",
        }}
      >
        {courseOutline && (
          <Box
            style={{
              background: "white",
              width: "50%",
              padding: 24,
              borderRadius: "8px",
              margin: "0 24px",
            }}
          >
            <h2 className="font-bold text-lg mb-3">Edit Log:</h2>
            <VStack spacing={6}>
              <VStack maxHeight="400px" overflow="auto" spacing="12px">
                {courseOutline.editLogs.map((log) => {
                  return (
                    <VStack
                      width="100%"
                      backgroundColor="#f5f5f5"
                      border="1px solid #dcdcdc"
                      borderRadius="8px"
                      padding="12px"
                    >
                      <Text color="black" fontSize="xl">
                        User: {log.editor}
                      </Text>
                      <Text color="black" fontSize="lg">
                        Time: {log.timeLastEdited}
                      </Text>
                      {Object.keys(log.changes).map((key) => {
                        const oldValue = log.changes[key].old;
                        const newValue = log.changes[key].new;
                        const result = key.replace(/([A-Z])/g, " $1");
                        const changeTitle =
                          result.charAt(0).toUpperCase() + result.slice(1);
                        return (
                          <VStack
                            width="100%"
                            alignItems="flex-start"
                            spacing={1}
                          >
                            <Text color="black" fontSize="lg">
                              {changeTitle}
                            </Text>
                            <Text fontSize="sm">
                              Old value: {oldValue ? oldValue.toString() : ""}
                            </Text>
                            <Text fontSize="sm">
                              New Value:{" "}
                              {newValue ? JSON.stringify(newValue) : ""}
                            </Text>
                          </VStack>
                        );
                      })}
                    </VStack>
                  );
                })}
              </VStack>
            </VStack>
          </Box>
        )}
      </div>
    </div>
  );
}
