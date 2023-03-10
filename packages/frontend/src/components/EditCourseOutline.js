import React, { useEffect, useState } from "react";

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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function EditCourseOutline() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/courses");
      const data = await response.json();
      setCourses(data);
      console.log(data);
    }
    fetchData();
  }, []);

  function submitChanges(data) {
    const elements = document.querySelectorAll('[id$="Txt"], [id$="drop"]');

    for (let i = 0; i < elements.length; i++) {
      const value = elements[i].value.trim();
      const label = document.getElementById(
        elements[i].id.replace("Txt", "Lbl").replace("drop", "Lbl")
      );

      if (value !== data.length) {
        label.innerHTML = value;
        if (label.innerHTML == "empty") {
          label.innerHTML = "";
        }
      }
    }

    console.log(data.codeLbl);
    console.log(data.courseUuid);

    fetch("/course-outline", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
      },
      body: JSON.stringify({
        courseUuid: data.courseUuid,
        versionNum: 9,
        titleLbl: data.titleLbl,
        codeLbl: data.codeLbl,
        yearLbl: "2019",
        desLbl: data.desLbl,
        insLbl: data.insLbl,
        acaLbl: data.acaLbl,
        conLbl: data.conLbl,
        antLbl: data.antLbl,
        preLbl: data.preLbl,
        coLbl: data.coLbl,
        ceabLbl: data.ceabLbl,
        reqTbLbl: data.reqTbLbl,
        othLbl: data.othLbl,
        recRefLbl: data.recRefLbl,
        knowLbl: data.knowLbl,
        useEngLbl: data.useEngLbl,
        impLbl: data.impLbl,
        proLbl: data.proLbl,
        indLbl: data.indLbl,
        ethLbl: data.ethLbl,
        invLbl: data.invLbl,
        comLbl: data.comLbl,
        econLbl: data.conLbl,
        desiLbl: data.desiLbl,
        profLbl: data.profLbl,
        lifeLbl: data.lifeLbl,
        top1Lbl: data.top1Lbl,
        top1aLbl: data.top1aLbl,
        top1bLbl: data.top1bLbl,
        top2Lbl: data.top2Lbl,
        top2aLbl: data.top2aLbl,
        top2bLbl: data.top2bLbl,
        top3Lbl: data.top3Lbl,
        top3aLbl: data.top3aLbl,
        top3bLbl: data.top3bLbl,
        top4Lbl: data.top4Lbl,
        top4aLbl: data.top4aLbl,
        top4bLbl: data.top4bLbl,
        homPercLbl: data.homPercLbl,
        quizPercLbl: data.quizPercLbl,
        labPercLbl: data.labPercLbl,
        midPercLbl: data.midPercLbl,
        finPercLbl: data.finPercLbl,
        homLbl: data.homLbl,
        quiLbl: data.quiLbl,
        labLbl: data.labLbl,
        midLbl: data.midLbl,
        finLbl: data.finLbl,
        lateLbl: data.lateLbl,
        assSubLbl: data.assSubLbl,
        top1AknowLbl: data.top1AknowLbl,
        top1AproLbl: data.top1AproLbl,
        top1AinvLbl: data.top1AinvLbl,
        top1AdesiLbl: data.top1AdesiLbl,
        top1AuseEngLbl: data.top1AuseEngLbl,
        top1AindLbl: data.top1AindLbl,
        top1AcomLbl: data.top1AcomLbl,
        top1AprofLbl: data.top1AprofLbl,
        top1AimpLbl: data.top1AimpLbl,
        top1AethLbl: data.top1AethLbl,
        top1AeconLbl: data.top1AeconLbl,
        top1AlifeLbl: data.top2AlifeLbl,
        top1BknowLbl: data.top1BknowLbl,
        top1BproLbl: data.top1BproLbl,
        top1BinvLbl: data.top1BinvLbl,
        top1BdesiLbl: data.top1BdesiLbl,
        top1BuseEngLbl: data.top1BuseEngLbl,
        top1BindLbl: data.top1BindLbl,
        top1BcomLbl: data.top1BcomLbl,
        top1BprofLbl: data.top1BprofLbl,
        top1BimpLbl: data.top1BimpLbl,
        top1BethLbl: data.top1BethLbl,
        top1BeconLbl: data.top1BeconLbl,
        top1BlifeLbl: data.top1BlifeLbl,
        top2AknowLbl: data.top2AknowLbl,
        top2AproLbl: data.top2AproLbl,
        top2AinvLbl: data.top2AinvLbl,
        top2AdesiLbl: data.top2AdesiLbl,
        top2AuseEngLbl: data.top2AuseEngLbl,
        top2AindLbl: data.top2AindLbl,
        top2AcomLbl: data.top2AcomLbl,
        top2AprofLbl: data.top2AprofLbl,
        top2AimpLbl: data.top2AimpLbl,
        top2AethLbl: data.top2AethLbl,
        top2AeconLbl: data.top2AeconLbl,
        top2AlifeLbl: data.top2AlifeLbl,
        top2BknowLbl: data.top2BknowLbl,
        top2BproLbl: data.top2BproLbl,
        top2BinvLbl: data.top2BinvLbl,
        top2BdesiLbl: data.top2BdesiLbl,
        top2BuseEngLbl: data.top2BuseEngLbl,
        top2BindLbl: data.top2BindLbl,
        top2BcomLbl: data.top2BcomLbl,
        top2BprofLbl: data.top2BprofLbl,
        top2BimpLbl: data.top2BimpLbl,
        top2BethLbl: data.top2BethLbl,
        top2BeconLbl: data.top2BeconLbl,
        top2BlifeLbl: data.top2BlifeLbl,
        top3AknowLbl: data.top3AknowLbl,
        top3AproLbl: data.top3AproLbl,
        top3AinvLbl: data.top3AinvLbl,
        top3AdesiLbl: data.top3AdesiLbl,
        top3AuseEngLbl: data.top3AuseEngLbl,
        top3AindLbl: data.top3AindLbl,
        top3AcomLbl: data.top3AcomLbl,
        top3AprofLbl: data.top3AprofLbl,
        top3AimpLbl: data.top3AimpLbl,
        top3AethLbl: data.top3AethLbl,
        top3AeconLbl: data.top3AeconLbl,
        top3AlifeLbl: data.top3AlifeLbl,
        top3BknowLbl: data.top3BknowLbl,
        top3BproLbl: data.top3BproLbl,
        top3BinvLbl: data.top3BinvLbl,
        top3BdesiLbl: data.top3BdesiLbl,
        top3BuseEngLbl: data.top3BuseEngLbl,
        top3BindLbl: data.top3BindLbl,
        top3BcomLbl: data.top3BcomLbl,
        top3BprofLbl: data.top3BprofLbl,
        top3BimpLbl: data.top3BimpLbl,
        top3BethLbl: data.top3BethLbl,
        top3BeconLbl: data.top3BeconLbl,
        top3BlifeLbl: data.top3BlifeLbl,
        top4AknowLbl: data.top4AknowLbl,
        top4AproLbl: data.top4AproLbl,
        top4AinvLbl: data.top4AinvLbl,
        top4AdesiLbl: data.top4AdesiLbl,
        top4AuseEngLbl: data.top4AuseEngLbl,
        top4AindLbl: data.top4AindLbl,
        top4AcomLbl: data.top4AcomLbl,
        top4AprofLbl: data.top4AprofLbl,
        top4AimpLbl: data.top4AimpLbl,
        top4AethLbl: data.top4AethLbl,
        top4AeconLbl: data.top4AeconLbl,
        top4AlifeLbl: data.top4AlifeLbl,
        top4BknowLbl: data.top4BknowLbl,
        top4BproLbl: data.top4BproLbl,
        top4BinvLbl: data.top4BinvLbl,
        top4BdesiLbl: data.top4BdesiLbl,
        top4BuseEngLbl: data.top4BuseEngLbl,
        top4BindLbl: data.top4BindLbl,
        top4BcomLbl: data.top4BcomLbl,
        top4BprofLbl: data.top4BprofLbl,
        top4BimpLbl: data.top4BimpLbl,
        top4BethLbl: data.top4BethLbl,
        top4BeconLbl: data.top4BeconLbl,
        top4BlifeLbl: data.top4BlifeLbl,
      }),
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

      <Box
        mr="70"
        mt="30"
        borderWidth="2px"
        borderColor="black"
        bg="white"
        h="6000px"
        w="80%"
        alignSelf="center"
      >
        <center>
          <label class="text-xl font-serif text-black mt-2">
            Support Services
          </label>
          <br />
          <label class="text-xl font-serif text-black mt-2">
            Faculty of Engineering
          </label>
          <br />
          <label class="text-xl font-serif text-black mt-2">
            Department of Electrical and Computer Engineering
          </label>
          <br />
          <span class="text-xl font-serif text-black mt-2">ECE&nbsp;</span>
          <span id="codeLbl" class="text-xl font-serif text-black mt-2">
            XXXXA/B
          </span>
          <span class="text-xl font-serif text-black mt-2">:&nbsp;</span>
          <span id="titleLbl" class="text-xl font-serif text-black mt-2">
            Course Title
          </span>
          <br />
          <span class="text-xl font-serif text-black mt-2">
            Course Outline&nbsp;
          </span>
          <span id="yearLbl" class="text-xl font-serif text-black mt-2">
            20YY-YY
          </span>
        </center>

        <label class="text-3xl font-serif text-black ml-2">Description</label>
        <br />
        <label
          id="desLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Instructor</label>
        <br />
        <label id="insLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Dr. Name, P.Eng. TEB XXX, 519-661-2111 ext. XXXXX, UWO e-mail address
          as hyperlink Consultation hours:
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Academic Calendar Copy
        </label>
        <br />
        <label
          id="acaLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Contact Hours</label>
        <br />
        <label id="conLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          X lecture hours, Y laboratory hours, Z tutorial hours, 0.5 course.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Antirequisites
        </label>
        <br />
        <label
          id="antLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Prerequisites</label>
        <br />
        <label
          id="preLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Co-Requisites</label>
        <br />
        <label id="coLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Unless you have either the requisites for this course or written
          special permission from your Dean to enroll in it, you will be removed
          from this course and it will be deleted from your record. This
          decision may not be appealed. You will receive no adjustment to your
          fees in the event that you are dropped from a course for failing to
          have the necessary prerequisites.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          CEAB Academic Units
        </label>
        <br />
        <label id="ceabLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Engineering Science X%, Engineering Design Y%.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Required Textbook
        </label>
        <br />
        <label
          id="reqTbLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Other Required References
        </label>
        <br />
        <label
          id="othLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Recommended References
        </label>
        <br />
        <label
          id="recRefLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          General Learning Objectives (CEAB Graduate Attributes)
        </label>
        <br />
        <br />
        <SimpleGrid columns={3} spacing={0} border="1px" borderColor="black">
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Knowledge Base:
            </label>
            <span id="knowLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Use of Engineering Tools:
            </label>
            <span
              id="useEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            >
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Impact on Society and the Environment:
            </label>
            <span id="impLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Problem Analysis:
            </label>
            <span id="proLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Individual and Team Work:
            </label>
            <span id="indLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Ethics and Equality:
            </label>
            <span id="ethLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Investigation:
            </label>
            <span id="invLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Communication Skills:
            </label>
            <span id="comLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Economics and Project Management:
            </label>
            <span id="econLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Design:
            </label>
            <span id="desiLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Professionalism:
            </label>
            <span id="profLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
          <Box height="80px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Life-Long Learning:
            </label>
            <span id="lifeLbl" class="text-xl font-serif text-black ml-2 w-5/6">
              x
            </span>
          </Box>
        </SimpleGrid>
        <br />

        <label class="text-xl font-serif text-black ml-2 w-5/6">
          Notation: where x be I: Iductory, D: Dmediate, A: Aanced, or empty. I
          – The instructor will Iduce the topic at the level required. It is not
          necessary for the student to have seen the material before. D – There
          may be a reminder or review, but the student is expected to have seen
          and been tested on the material before taking the course. A – It is
          expected that the student can apply the knowledge without prompting
          (e.g. no review).
        </label>
        <br />
        <br />
        <br />

        <SimpleGrid columns={2} spacing={0} border="1px" borderColor="black">
          <Box height="60px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">
              Course Topics and Specific Learning Outcomes
            </label>
            <span
              id="knowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">
              CEAB Graduate Attributes Indicators
            </label>
            <span
              id="useEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top1Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
          </Box>
          <Box height="60px" border="1px" borderColor="black"></Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top1aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top1AknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1AlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top1bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top1BknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top1BlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box>
            <label
              id="top2Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
          </Box>
          <Box height="60px" border="1px" borderColor="black"></Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top2aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top2AknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2AlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top2bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top2BknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top2BlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box>
            <label
              id="top3Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
          </Box>
          <Box height="60px" border="1px" borderColor="black"></Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top3aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top3AknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3AlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top3bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top3BknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top3BlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top4Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
          </Box>
          <Box height="60px" border="1px" borderColor="black"></Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top4aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top4AknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4AlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <label
              id="top4bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="60px" border="1px" borderColor="black">
            <span
              id="top4BknowLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BproLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BinvLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BdesiLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BuseEngLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BindLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BcomLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BprofLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BimpLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BeconLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
            <span
              id="top4BlifeLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
        </SimpleGrid>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Homework Assignments
        </label>
        <br />
        <SimpleGrid columns={2} spacing={0} border="1px" borderColor="black">
          <Box height="40px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">
              Course Component
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">
              Weight (%)
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Homework Assignments
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label
              id="homPercLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            >
              %
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Quizzes
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label
              id="quizPercLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            >
              %
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Laboratory
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label
              id="labPercLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            >
              %
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Midterm Test
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label
              id="midPercLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            >
              %
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              Final Examination
            </label>
          </Box>
          <Box height="40px" border="1px" borderColor="black">
            <label
              id="finPercLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            >
              50%
            </label>
          </Box>
        </SimpleGrid>
        <br />

        <label class="text-xl font-serif text-black ml-2 w-5/6">
          To obtain a passing grade in the course, a mark of 50% or more must be
          achieved on the final examination as well as on the laboratory. A
          final examination or laboratory mark less than 50% will result in a
          final course grade of 48% or less.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Homework Assignments
        </label>
        <br />
        <label
          id="homLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Quizzes</label>
        <br />
        <label
          id="quiLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Laboratory</label>
        <br />
        <label
          id="labLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Midterm Test</label>
        <br />
        <label
          id="midLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Final Examination
        </label>
        <br />
        <label id="finLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          The final examination will be take place during the regular
          examination period.{" "}
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Late Submission Policy
        </label>
        <br />
        <label
          id="lateLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Assignment Submission Locker
        </label>
        <br />
        <label id="assSubLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Locker XYZ located on the second floor of TEB.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Use of English
        </label>
        <br />
        <label id="useLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          In accordance with Senate and Faculty Policy, students may be
          penalized up to 10% of the marks on all assignments, tests, and
          examinations for improper use of English. Additionally, poorly written
          work with the exception of the final examination may be returned
          without grading. If resubmission of the work is permitted, it may be
          graded with marks deducted for poor English and/or late submission.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Attendance</label>
        <br />
        <label id="attLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Any student who, in the opinion of the instructor, is absent too
          frequently from class, laboratory, or tutorial periods will be
          reported to the Dean (after due warning has been given). On the
          recommendation of the department, and with the permission of the Dean,
          the student will be debarred from taking the regular final examination
          in the course.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Absence Due to Illness or Other Circumstances
        </label>
        <br />
        <label id="absLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Students should immediately consult with the instructor or department
          Chair if they have any problems that could affect their performance in
          the course. Where appropriate, the problems should be documented (see
          the attached “Instructions for Students Unable to Write Tests or
          Examinations or Submit Assignments as Scheduled”). The student should
          seek Aice from the instructor or department Chair regarding how best
          to deal with the problem. Failure to notify the instructor or
          department Chair immediately (or as soon as possible thereafter) will
          have a negative effect on any appeal. For more information concerning
          medical accommodations, see the relevant section of the Academic
          Handbook:
          http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf
          For more information concerning accommodations for religious holidays,
          see the relevant section of the Academic Handbook:
          http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Missed Midterm Examinations
        </label>
        <br />
        <label id="misLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          If a student misses a midterm examination, she or he must follow the
          Instructions for Students Unable to Write Tests and provide
          documentation to Undergraduate Services Office within 24 hours of the
          missed test. If accommodation is granted, the department will decide
          whether to provide a make-up test or allow reweighting of the test,
          where reweighting means the marks normally allotted for the midterm
          will be added to the final exam. If no reasonable justification for
          missing the test can be found, then the student will receive a mark of
          zero for the test. If a student is going to miss the midterm
          examination for religious reasons, they must inform the instructor in
          writing within 48 hours of the announcement of the exam date or they
          will be required to write the exam.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Cheating and Plagiarism
        </label>
        <br />
        <label id="cheLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Students must write their essays and assignments in their own words.
          Whenever students take an idea or a passage from another author, they
          must acknowledge their debt both by using quotation marks where
          appropriate and by proper referencing such as footnotes or citations.
          University policy states that cheating, including plagiarism, is a
          scholastic offence. The commission of a scholastic offence is attended
          by academic penalties, which might include expulsion from the program.
          If you are caught cheating, there will be no second warning. All
          required papers may be subject to submission for textual similarity
          review to commercial plagiarism-detection software under license to
          the University for the detection of plagiarism. All papers submitted
          will be included as source documents on the reference database for the
          purpose of detecting plagiarism of papers subsequently submitted to
          the system. Use of the service is subject to the licensing agreement,
          currently between the University of Western Ontario and Turnitin.com
          (http://www.turnitin.com). Scholastic offences are taken seriously and
          students are directed to read the appropriate policy, specifically,
          the definition of what constitutes a Scholastic Offence, in the
          relevant section of the Academic Handbook:
          http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Use of Electronic Devices
        </label>
        <br />
        <label
          id="useElLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Use of Personal Response Devices ("Clickers")
        </label>
        <br />
        <label
          id="usePerLbl"
          class="text-xl font-serif text-black ml-2 w-5/6"
        ></label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Policy on Repeating All Components of a Course
        </label>
        <br />
        <label id="polLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Students who are required to repeat an Engineering course must repeat
          all components of the course. No special permissions will be granted
          enabling a student to retain laboratory, assignment, or test marks
          from previous years. Previously completed assignments and laboratories
          cannot be resubmitted by the student for grading in subsequent years.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Dnet and Electronic Mail
        </label>
        <br />
        <label id="intLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Students are responsible for regularly checking their Western e mail
          and the course web site (https://owl.uwo.ca/portal/) and making
          themselves aware of any information that is posted about the course.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">Accessibility</label>
        <br />
        <label id="accLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Please contact the course instructor if you require material in an
          alternate format or if any other arrangements can make this course
          more accessible to you. You may also wish to contact Services for
          Students with Disabilities (SSD) at 519-661-2111 ext. 82147 for any
          specific question regarding an accommodation.
        </label>
        <br />
        <br />

        <label class="text-3xl font-serif text-black ml-2">
          Support Services
        </label>
        <br />
        <label id="supLbl" class="text-xl font-serif text-black ml-2 w-5/6">
          Office of the Registrar, http://www.registrar.uwo.ca/ Student
          Development Centre, http://www.sdc.uwo.ca/ Engineering Undergraduate
          Services, http://www.eng.uwo.ca/undergraduate/ USC Student Support
          Services, http://westernusc.ca/services/ Students who are in
          emotional/mental distress should refer to Mental Health @ Western,
          http://www.health.uwo.ca/mental_health/, for a complete list of
          options about how to obtain help.
        </label>
        <br />
        <br />
      </Box>
      <br />
      <br />
    </div>
  );
}
