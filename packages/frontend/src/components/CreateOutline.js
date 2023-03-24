import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Select as MultiSelect } from "chakra-react-select";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

export default function CreateOutline() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructors",
  });
  const {
    fields: topicsFields,
    append: topicsAppend,
    remove: topicsRemove,
  } = useFieldArray({
    control,
    name: "topics",
  });
  const {
    fields: evaluationFields,
    append: evaluationAppend,
    remove: evaluationRemove,
  } = useFieldArray({
    control,
    name: "evaluation",
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_API_URI + "/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
      });
      const data = await response.json();
      setCourses(data);

      console.log(data);
    }

    fetchData();
  }, []);

  function submitChanges(data) {
    console.log(data);
    fetch(
      `${process.env.REACT_APP_API_URI}/course-outline/versionMax/${data.courseUuid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-length": 7,
          Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((currentVersionNum) => {
        console.log("VERSION", currentVersionNum);
        fetch(process.env.REACT_APP_API_URI + "/course-outline", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
          },
          body: JSON.stringify({
            courseUuid: data.courseUuid,
            versionNum: currentVersionNum + 1,
            yearLbl: "2019",
            ...data,
          }),
        })
          .then((res) => {
            if (res.status === 201) {
              return res.json();
            }
          })
          .then((res) => {
            fetch(process.env.REACT_APP_API_URI + "editor-log", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Content-length": 5,
                Origin: "https://frontend-wlc5epzecq-uc.a.run.app",
              },
              body: JSON.stringify({
                courseUuid: res.courseUuid,
                versionNum: res.versionNum,
                editNum: 1,
                timeLastEdited: moment().format("MMMM Do YYYY, h:mm:ss a"),
                editor: user.uwoId,
              }),
            });
          });
      });
  }

  return (
    <div class="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 py-6 flex flex-col justify-center sm:py-12">
      <center>
        <span class="text-6xl text-black font-serif font-bold">
          Create & Edit Course Outline
        </span>
        <br />
        <br />
      </center>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            background: "white",
            width: "80%",
            padding: 24,
            borderRadius: "8px",
          }}
        >
          <VStack spacing="24px">
            <Text fontSize="2xl" color="black">
              Course Outline
            </Text>
            <FormControl>
              <FormLabel>Course Description</FormLabel>
              <Textarea
                type="text"
                placeholder="Description"
                {...register("description")}
              />
            </FormControl>
            <FormControl isRequired isInvalid={errors.courseCode}>
              <FormLabel>Instructor(s)</FormLabel>
              {fields.map((field, index) => (
                <VStack spacing="24px" key={field.id}>
                  <HStack spacing="24px" width="100%">
                    <div style={{ width: "20%" }}>
                      <Select
                        placeholder="Select Prefix"
                        {...register(`instructors.${index}.prefix`)}
                      >
                        <option value="Dr">Dr.</option>
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                      </Select>
                    </div>
                    <div style={{ width: "80%" }}>
                      <Input
                        focusBorderColor="purple.400"
                        type="text"
                        placeholder="Name"
                        {...register(`instructors.${index}.name`)}
                      />
                    </div>
                  </HStack>
                  <HStack spacing="24px" width="100%">
                    <div style={{ width: "50%" }}>
                      <Input
                        placeholder="Office"
                        {...register(`instructors.${index}.office`)}
                      />
                    </div>
                    <div style={{ width: "50%" }}>
                      <Input
                        placeholder="Phone"
                        {...register(`instructors.${index}.phone`)}
                      />
                    </div>
                  </HStack>

                  <Input
                    placeholder="Email"
                    {...register(`instructors.${index}.email`)}
                  />
                  <Input
                    placeholder="Consultation Hours"
                    {...register(`instructors.${index}.hours`)}
                  />
                  <Button onClick={() => remove(index)} colorScheme="red">
                    Delete
                  </Button>
                  <Divider marginBottom="24px !important" />
                </VStack>
              ))}
            </FormControl>
            <Button
              colorScheme="purple"
              onClick={() =>
                append({
                  prefix: "Dr",
                  name: "Joe Smith",
                  office: "TEB 251",
                  phone: "519-661-2111 ext. XXXXX",
                  email: "uwoId@uwo.ca",
                  hours: "TBA",
                })
              }
            >
              Add Instructor
            </Button>
            <FormControl>
              <FormLabel>Academic Calendar Copy</FormLabel>
              <Textarea
                type="text"
                placeholder="Academic Calendar Copy"
                {...register("calendarCopy")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contact Hours</FormLabel>
              <HStack spacing="24px" width="100%">
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text width="50%">Lecture Hours</Text>
                  <NumberInput width="50%">
                    <NumberInputField
                      placeholder="Hours"
                      {...register("lectureHours")}
                    />
                  </NumberInput>
                </div>
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text width="50%">Lab Hours</Text>
                  <NumberInput width="50%">
                    <NumberInputField
                      placeholder="Hours"
                      {...register("labHours")}
                    />
                  </NumberInput>
                </div>
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text width="50%">Tutorial Hours</Text>
                  <NumberInput width="50%">
                    <NumberInputField
                      placeholder="Hours"
                      {...register("tutorialHours")}
                    />
                  </NumberInput>
                </div>
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text width="50%">Course Credits</Text>
                  <Select
                    width="50%"
                    placeholder="Course credits"
                    {...register("courseCredits")}
                  >
                    <option value="0.5">0.5</option>
                    <option value="1">1</option>
                  </Select>
                </div>
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Prerequisites</FormLabel>
              <Textarea
                type="text"
                placeholder="Prerequisites"
                {...register("prerequisites")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Antirequisites</FormLabel>
              <Textarea
                type="text"
                placeholder="Antirequisites"
                {...register("antirequisites")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Co-Requisites</FormLabel>
              <Textarea
                type="text"
                placeholder="Co-Requisites"
                {...register("corequisites")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>CEAB Academic Units</FormLabel>
              <HStack spacing="24px" width="100%">
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text width="50%">Engineering Science</Text>
                  <InputGroup width="50%">
                    <Input
                      type="number"
                      placeholder="Engineering Science"
                      {...register("engineeringScience")}
                    />
                    <InputRightAddon children="%" />
                  </InputGroup>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text width="50%">Engineering Design</Text>
                  <InputGroup width="50%">
                    <Input
                      type="number"
                      placeholder="Engineering Design"
                      {...register("engineeringDesign")}
                    />
                    <InputRightAddon children="%" />
                  </InputGroup>
                </div>
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Required Textbook</FormLabel>
              <Textarea
                type="text"
                placeholder="Required Textbook"
                {...register("requiredTextbook")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Other Required References</FormLabel>
              <Textarea
                type="text"
                placeholder="Other Required References"
                {...register("requiredReferences")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Recommended References</FormLabel>
              <Textarea
                type="text"
                placeholder="Recommended References"
                {...register("recommendedReferences")}
              />
            </FormControl>
            <Text fontSize="2xl" color="black">
              General Learning Objectives (CEAB Graduate Attributes)
            </Text>
            <SimpleGrid columns={4} spacing={10} alignItems="end">
              <FormControl>
                <FormLabel>Knowledge Base</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("knowledgeBase")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Problem Analysis</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("problemAnalysis")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Investigation</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("investigation")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Design</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("design")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Use of Engineering</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("useOfEngineering")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Individual and Team Work</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("individualAndTeamWork")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Communication Skills</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("communicationSkills")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Professionalism</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("professionalism")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Impact on Society and the Environment</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("impactOnSocietyAndEnvironment")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Ethics and Equity</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("ethicsAndEquity")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Economics and Project Management</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("economicAndProjectManagement")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Life-Long Learning</FormLabel>
                <Select
                  placeholder="Select Multiple Co-Requisites"
                  {...register("lifeLongLearning")}
                >
                  <option value="">N/A</option>
                  <option value="I">I</option>
                  <option value="I">D</option>
                  <option value="I">A</option>
                </Select>
              </FormControl>
            </SimpleGrid>
            <Text fontSize="2xl" color="black">
              Course Topics and Specific Learning Outcomes
            </Text>
            <SimpleGrid width="100%" columns={2} spacing={10} alignItems="end">
              {topicsFields.map((field, index) => (
                <VStack spacing="24px" key={field.id}>
                  <FormControl>
                    <FormLabel>Topic {index + 1}</FormLabel>
                    <Input
                      focusBorderColor="purple.400"
                      type="text"
                      placeholder="Topic"
                      {...register(`topics.${index}.topic`)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      At the end of this section, students will be able to:
                    </FormLabel>
                    <Textarea
                      focusBorderColor="purple.400"
                      placeholder="a."
                      {...register(`topics.${index}.topicDetails`)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>CEAB Graduate Attributes Indicators</FormLabel>
                    <Controller
                      control={control}
                      name={`topics.${index}.gaIndicators`}
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                      }) => (
                        <MultiSelect
                          isMulti
                          name={name}
                          ref={ref}
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                          focusBorderColor="purple.400"
                          selectedOptionColorScheme="purple"
                          colorScheme="purple"
                          options={[
                            { label: "KB 1", value: "KB1" },
                            { label: "KB 2", value: "KB2" },
                            { label: "KB 3", value: "KB3" },
                            { label: "KB 4", value: "KB4" },
                            { label: "PA 1", value: "PA1" },
                            { label: "PA 2", value: "PA2" },
                            { label: "PA 3", value: "PA3" },
                            { label: "I 1", value: "I1" },
                            { label: "I 2", value: "I2" },
                            { label: "I 3", value: "I3" },
                            { label: "D 1", value: "D1" },
                            { label: "D 2", value: "D2" },
                            { label: "D 3", value: "D3" },
                            { label: "D 4", value: "D4" },
                            { label: "ET 1", value: "ET1" },
                            { label: "ET 2", value: "ET2" },
                            { label: "ET 3", value: "ET3" },
                            { label: "ITW 1", value: "ITW1" },
                            { label: "ITW 2", value: "ITW2" },
                            { label: "ITW 3", value: "ITW3" },
                            { label: "CS 1", value: "CS1" },
                            { label: "CS 2", value: "CS2" },
                            { label: "CS 3", value: "CS3" },
                            { label: "PR 1", value: "PR1" },
                            { label: "PR 2", value: "PR2" },
                            { label: "PR 3", value: "PR3" },
                            { label: "IESE 1", value: "IESE1" },
                            { label: "IESE 2", value: "IESE2" },
                            { label: "IESE 3", value: "IESE3" },
                            { label: "EE 1", value: "EE1" },
                            { label: "EE 2", value: "EE2" },
                            { label: "EE 3", value: "EE3" },
                            { label: "EE 4", value: "EE4" },
                            { label: "EPM 1", value: "EPM1" },
                            { label: "EPM 2", value: "EPM2" },
                            { label: "EPM 3", value: "EPM3" },
                            { label: "EPM 4", value: "EPM4" },
                            { label: "LL 1", value: "LL1" },
                            { label: "LL 2", value: "LL2" },
                          ]}
                        />
                      )}
                    />
                  </FormControl>
                  <Button onClick={() => topicsRemove(index)} colorScheme="red">
                    Delete
                  </Button>
                  <Divider marginBottom="24px !important" />
                </VStack>
              ))}
            </SimpleGrid>
            <Button
              colorScheme="purple"
              onClick={() =>
                topicsAppend({
                  topic: "",
                  topicDetails: "",
                  gaIndicators: "",
                })
              }
            >
              Add Course Topic
            </Button>
            <Text fontSize="2xl" color="black">
              Course Evaluation
            </Text>
            <VStack width="100%" columns={2} spacing={10} alignItems="end">
              {evaluationFields.map((field, index) => (
                <HStack
                  spacing="24px"
                  width="100%"
                  alignItems="end"
                  key={field.id}
                >
                  <FormControl width="45%">
                    <FormLabel>Course Component</FormLabel>
                    <Input
                      focusBorderColor="purple.400"
                      type="text"
                      placeholder="Course Component"
                      {...register(`evaluation.${index}.courseComponent`)}
                    />
                  </FormControl>
                  <FormControl width="45%">
                    <FormLabel>Weight</FormLabel>
                    <InputGroup>
                      <Input
                        type="number"
                        focusBorderColor="purple.400"
                        placeholder="Weight"
                        {...register(`evaluation.${index}.weight`)}
                      />
                      <InputRightAddon children="%" />
                    </InputGroup>
                  </FormControl>
                  <Button
                    width="10%"
                    onClick={() => evaluationRemove(index)}
                    colorScheme="red"
                  >
                    Delete
                  </Button>
                </HStack>
              ))}
            </VStack>
            <Button
              colorScheme="purple"
              onClick={() =>
                evaluationAppend({
                  courseComponent: "",
                  weight: "",
                })
              }
            >
              Add Course Component
            </Button>
            <FormControl>
              <FormLabel>Homework Assignments</FormLabel>
              <Textarea
                type="text"
                placeholder="Homework Assignments"
                {...register("homeWorkAssignments")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quizzes</FormLabel>
              <Textarea
                type="text"
                placeholder="Quizzes"
                {...register("quizzes")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Laboratory</FormLabel>
              <Textarea
                type="text"
                placeholder="Laboratory"
                {...register("laboratory")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Midterm Test</FormLabel>
              <Textarea
                type="text"
                placeholder="Midterm Test"
                {...register("midtermTest")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Final Examination</FormLabel>
              <Textarea
                type="text"
                placeholder="Final Examination"
                {...register("finalExamination")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Late Submission Policy</FormLabel>
              <Textarea
                type="text"
                placeholder="Late Submission Policy"
                {...register("lateSubmissionPolicy")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Assignment Submission Locker</FormLabel>
              <Textarea
                type="text"
                placeholder="Assignment Submission Locker"
                {...register("submissionLocker")}
              />
            </FormControl>
            <Button
              colorScheme="green"
              size="lg"
              width="80"
              onClick={handleSubmit(submitChanges)}
            >
              Save
            </Button>
          </VStack>
        </Box>
      </div>
    </div>
  );
}
