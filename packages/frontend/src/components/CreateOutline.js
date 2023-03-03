import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function CreateOutline() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitChanges(data) {
    const elements = document.querySelectorAll('[id$="Txt"], [id$="drop"]');

    for (let i = 0; i < elements.length; i++) {
      const value = elements[i].value.trim();
      const label = document.getElementById(
        elements[i].id.replace("Txt", "Lbl").replace("drop", "Lbl")
      );

      if (value !== data.length) {
        label.innerHTML = value;
      }
    }

    console.log(data.codeLbl);

    fetch("/course-outline", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 7,
      },
      body: JSON.stringify({
        courseUuid: "39bdbbc3-ece0-48db-9aee-bd4f50a4b7a4",
        versionNum: 4,
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
          <label id="codeLbl" class="text-xl font-serif text-black mt-2">
            ECE XXXXA/B: Course Title
          </label>
          <br />
          <label
            id="titleLbl"
            class="text-xl font-serif text-black mt-2"
          ></label>
          <br />
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
          Notation: where x be I: Introductory, D: Intermediate, A: Advanced, or
          empty. I – The instructor will introduce the topic at the level
          required. It is not necessary for the student to have seen the
          material before. D – There may be a reminder or review, but the
          student is expected to have seen and been tested on the material
          before taking the course. A – It is expected that the student can
          apply the knowledge without prompting (e.g. no review).
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
          <Box height="170px" border="1px" borderColor="black">
            <label
              id="top1Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
            <label
              id="top1aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label
              id="top1bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="170px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
            <span
              id="proLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="170px" border="1px" borderColor="black">
            <label
              id="top2Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
            <label
              id="top2aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label
              id="top2bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="170px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
            <span
              id="ethLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="170px" border="1px" borderColor="black">
            <label
              id="top3Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
            <label
              id="top3aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label
              id="top3bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="170px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
            <span
              id="comLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></span>
          </Box>
          <Box height="170px" border="1px" borderColor="black">
            <label
              id="top4Lbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label class="text-xl font-serif text-black ml-2 w-5/6">
              At the end of this section, students will be able to:
            </label>
            <label
              id="top4aLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
            <label
              id="top4bLbl"
              class="text-xl font-serif text-black ml-2 w-5/6"
            ></label>
          </Box>
          <Box height="170px" border="1px" borderColor="black">
            <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
            <span
              id="comLbl"
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
          seek advice from the instructor or department Chair regarding how best
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
          Internet and Electronic Mail
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

      <form class="ml-6 mt-1">
        <label class="text-3xl font-serif text-black mt-4">Course Code:</label>
        <textarea
          id="codeTxt"
          cols="20"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("codeLbl")}
        ></textarea>
        <br />

        <label class="text-3xl font-serif text-black">Course Title:</label>
        <textarea
          cols="30"
          rows="1"
          id="titleTxt"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("titleLbl")}
        ></textarea>
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Description</label>
        <br />
        <textarea
          id="desTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("desLbl")}
        ></textarea>
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Instructor</label>
        <br />
        <textarea
          id="insTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("insLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Academic Calendar Copy
        </label>
        <br />
        <textarea
          id="acaTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("acaLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Contact Hours</label>
        <br />
        <textarea
          id="conTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("conLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Antirequisites</label>
        <br />
        <textarea
          id="antTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("antLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Prerequisites</label>
        <br />
        <textarea
          id="preTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("preLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Co-requisites</label>
        <br />
        <textarea
          id="coTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("coLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          CEAB Academic Units
        </label>
        <br />
        <textarea
          id="ceabTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("ceabLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Required Textbook</label>
        <br />
        <textarea
          id="reqTbTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("reqTbLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Other Required References
        </label>
        <br />
        <textarea
          id="othTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("othLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Recommended References
        </label>
        <br />
        <textarea
          id="recRefTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("recRefLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          General Learning Objectives
        </label>
        <br />
        <label class="text-3xl font-serif text-black">
          (CEAB Graduate Attributes):
        </label>
        <br />
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Knowledge Base:
        </label>
        <select
          id="knowdrop"
          class="border-2 border-black rounded-lg "
          {...register("knowLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Problem Analysis:
        </label>
        <select
          id="prodrop"
          class="border-2 border-black rounded-lg"
          {...register("proLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Investigation:</label>
        <select
          id="invdrop"
          class="border-2 border-black rounded-lg"
          {...register("invLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Design:</label>
        <select
          id="desidrop"
          class="border-2 border-black rounded-lg"
          {...register("desiLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Use of Engineering Tools:
        </label>
        <select
          id="useEngdrop"
          class="border-2 border-black rounded-lg"
          {...register("useEngLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Individual and Team Work:
        </label>
        <select
          id="inddrop"
          class="border-2 border-black rounded-lg"
          {...register("indLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Communication Skills:
        </label>
        <select
          id="comdrop"
          class="border-2 border-black rounded-lg"
          {...register("comLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Professionalism:
        </label>
        <select
          id="profdrop"
          class="border-2 border-black rounded-lg"
          {...register("profLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Impact on Society and the Environment:
        </label>
        <select
          id="impdrop"
          class="border-2 border-black rounded-lg"
          {...register("impLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Ethics and Equity:
        </label>
        <select
          id="ethdrop"
          class="border-2 border-black rounded-lg"
          {...register("ethLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Economics and Project Management:
        </label>
        <select
          id="econdrop"
          class="border-2 border-black rounded-lg"
          {...register("econLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Life-Long Learning:
        </label>
        <select
          id="lifedrop"
          class="border-2 border-black rounded-lg"
          {...register("lifeLbl")}
        >
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select>
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Course Topics and Specific Learning Outcomes
        </label>
        <br />
        <br />
        <label class="text-xl font-serif ml-9 text-black">Topic 1:</label>
        <textarea
          id="top1Txt"
          cols="40"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top1Lbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">
          At the end of this section, students will be able to:
        </label>
        <br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea
          id="top1aTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top1aLbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea
          id="top1bTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top1bLbl")}
        ></textarea>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Topic 2:</label>
        <textarea
          id="top2Txt"
          cols="40"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top2Lbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">
          At the end of this section, students will be able to:
        </label>
        <br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea
          id="top2aTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top2aLbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea
          id="top2bTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top2bLbl")}
        ></textarea>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Topic 3:</label>
        <textarea
          id="top3Txt"
          cols="40"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top3Lbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">
          At the end of this section, students will be able to:
        </label>
        <br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea
          id="top3aTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top3aLbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea
          id="top3bTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top3bLbl")}
        ></textarea>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Topic 4:</label>
        <textarea
          id="top4Txt"
          cols="40"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top4Lbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">
          At the end of this section, students will be able to:
        </label>
        <br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea
          id="top4aTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top4aLbl")}
        ></textarea>
        <br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea
          id="top4bTxt"
          cols="50"
          rows="1"
          type="text"
          class="border-2 border-black ml-3 rounded-lg"
          {...register("top4bLbl")}
        ></textarea>
        <br />

        <label class="text-3xl font-serif text-black">Evaluation Weights</label>
        <br />
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Homework Assignments:
        </label>
        <input
          id="homPercTxt"
          type="number"
          placeholder="%"
          class="border-2 border-black ml-3 w-11 rounded-lg"
          {...register("homPercLbl")}
        ></input>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Quizzes:</label>
        <input
          id="quizPercTxt"
          type="number"
          placeholder="%"
          class="border-2 border-black ml-3 w-11 rounded-lg"
          {...register("quizPercLbl")}
        ></input>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Laboratory:</label>
        <input
          id="labPercTxt"
          type="number"
          placeholder="%"
          class="border-2 border-black ml-3 w-11 rounded-lg"
          {...register("labPercLbl")}
        ></input>
        <br />

        <label class="text-xl font-serif ml-9 text-black">Midterm Test:</label>
        <input
          id="midPercTxt"
          type="number"
          placeholder="%"
          class="border-2 border-black ml-3 w-11 rounded-lg"
          {...register("midPercLbl")}
        ></input>
        <br />

        <label class="text-xl font-serif ml-9 text-black">
          Final Examination:
        </label>
        <input
          id="finPercTxt"
          type="number"
          placeholder="%"
          class="border-2 border-black ml-3 w-11 rounded-lg"
          {...register("finPercLbl")}
        ></input>
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Homework Assignments
        </label>
        <br />
        <textarea
          id="homTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("homLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Quizzes</label>
        <br />
        <textarea
          id="quiTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("quiLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Laboratory</label>
        <br />
        <textarea
          id="labTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("labLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Midterm Test</label>
        <br />
        <textarea
          id="midTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("midLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Final Examination</label>
        <br />
        <textarea
          id="finTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("finLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Late Submission Policy
        </label>
        <br />
        <textarea
          id="lateTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("lateLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Assignment Submission Locker
        </label>
        <br />
        <textarea
          id="assSubTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
          {...register("assSubLbl")}
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Use of English</label>
        <br />
        <textarea
          id="useTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Attendance</label>
        <br />
        <textarea
          id="attTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Absence Due to Illness or Other Circumstances
        </label>
        <br />
        <textarea
          id="absTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Missed Midterm Examinations
        </label>
        <br />
        <textarea
          id="misTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Cheating and Plagiarism
        </label>
        <br />
        <textarea
          id="cheTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Use of Electronic Devices
        </label>
        <br />
        <textarea
          id="useElTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Use of Personal Response Devices ("Clickers")
        </label>
        <br />
        <textarea
          id="usePerTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Policy on Repeating All Components of a Course
        </label>
        <br />
        <textarea
          id="polTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">
          Internet and Electronic Mail
        </label>
        <br />
        <textarea
          id="intTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Accessibility</label>
        <br />
        <textarea
          id="accTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />
        <br />

        <label class="text-3xl font-serif text-black">Support Services</label>
        <br />
        <textarea
          id="supTxt"
          type="text"
          cols="50"
          class="border-2 border-black p-4 rounded-lg"
        ></textarea>
        <br />
        <br />

        <Button
          colorScheme="green"
          size="lg"
          width="80"
          id="saveBtn"
          onClick={handleSubmit(submitChanges)}
        >
          Save
        </Button>
      </form>
    </div>
  );
}
