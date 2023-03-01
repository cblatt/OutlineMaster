import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Button,
  SimpleGrid
} from '@chakra-ui/react'

import {Input} from "@chakra-ui/react";

export default function PlayerComparison() {

  function submitChanges(){

    
    document.getElementById('courseCodeLabel').innerHTML = document.getElementById('courseCodeText').value;
    document.getElementById('courseTitleLabel').innerHTML = document.getElementById('courseTitleText').value;
    document.getElementById('desLbl').innerHTML = document.getElementById('desTxt').value;
    document.getElementById('insLbl').innerHTML = document.getElementById('insTxt').value;
    document.getElementById('accLbl').innerHTML = document.getElementById('accTxt').value;
    document.getElementById('conLbl').innerHTML = document.getElementById('conTxt').value;
    document.getElementById('antLbl').innerHTML = document.getElementById('antTxt').value;
    document.getElementById('preLbl').innerHTML = document.getElementById('preTxt').value;
    document.getElementById('coLbl').innerHTML = document.getElementById('coTxt').value;
    document.getElementById('ceabLbl').innerHTML = document.getElementById('ceabTxt').value;
    document.getElementById('reqTbLbl').innerHTML = document.getElementById('reqTbTxt').value;
    document.getElementById('othLbl').innerHTML = document.getElementById('othTxt').value;
    document.getElementById('recRefLbl').innerHTML = document.getElementById('recRefTxt').value;
    document.getElementById('homLbl').innerHTML = document.getElementById('homTxt').value;
    document.getElementById('quiLbl').innerHTML = document.getElementById('quiTxt').value;
    document.getElementById('labLbl').innerHTML = document.getElementById('labTxt').value;
    document.getElementById('midLbl').innerHTML = document.getElementById('midTxt').value;
    document.getElementById('finLbl').innerHTML = document.getElementById('finTxt').value;
    document.getElementById('lateLbl').innerHTML = document.getElementById('lateTxt').value;
    document.getElementById('assSubLbl').innerHTML = document.getElementById('assSubTxt').value;
    document.getElementById('useLbl').innerHTML = document.getElementById('useTxt').value;
    document.getElementById('attLbl').innerHTML = document.getElementById('attTxt').value;
    document.getElementById('absLbl').innerHTML = document.getElementById('absTxt').value;
    document.getElementById('misLbl').innerHTML = document.getElementById('misTxt').value;
    document.getElementById('cheLbl').innerHTML = document.getElementById('cheTxt').value;
    document.getElementById('useElLbl').innerHTML = document.getElementById('useElTxt').value;
    document.getElementById('usePerLbl').innerHTML = document.getElementById('usePerTxt').value;
    document.getElementById('polLbl').innerHTML = document.getElementById('polTxt').value;
    document.getElementById('intLbl').innerHTML = document.getElementById('intTxt').value;
    document.getElementById('accLbl').innerHTML = document.getElementById('accTxt').value;
    document.getElementById('supLbl').innerHTML = document.getElementById('supTxt').value;

    document.getElementById('knowLbl').innerHTML = document.getElementById('knowdrop').value;
    document.getElementById('useEngLbl').innerHTML = document.getElementById('useEngdrop').value;
    document.getElementById('impLbl').innerHTML = document.getElementById('impdrop').value;
    document.getElementById('proLbl').innerHTML = document.getElementById('prodrop').value;
    document.getElementById('indLbl').innerHTML = document.getElementById('inddrop').value;
    document.getElementById('ethLbl').innerHTML = document.getElementById('ethdrop').value;
    document.getElementById('invLbl').innerHTML = document.getElementById('invdrop').value;
    document.getElementById('comLbl').innerHTML = document.getElementById('comdrop').value;
    document.getElementById('econLbl').innerHTML = document.getElementById('econdrop').value;
    document.getElementById('desiLbl').innerHTML = document.getElementById('desidrop').value;
    document.getElementById('profLbl').innerHTML = document.getElementById('profdrop').value;
    document.getElementById('lifeLbl').innerHTML = document.getElementById('lifedrop').value;

    document.getElementById('top1Lbl').innerHTML = document.getElementById('top1Txt').value;
    document.getElementById('top1aLbl').innerHTML = document.getElementById('top1aTxt').value;
    document.getElementById('top1bLbl').innerHTML = document.getElementById('top1bTxt').value;
    document.getElementById('top2Lbl').innerHTML = document.getElementById('top2Txt').value;
    document.getElementById('top2aLbl').innerHTML = document.getElementById('top2aTxt').value;
    document.getElementById('top2bLbl').innerHTML = document.getElementById('top2bTxt').value;
    document.getElementById('top3Lbl').innerHTML = document.getElementById('top3Txt').value;
    document.getElementById('top3aLbl').innerHTML = document.getElementById('top3aTxt').value;
    document.getElementById('top3bLbl').innerHTML = document.getElementById('top3bTxt').value;
    document.getElementById('top4Lbl').innerHTML = document.getElementById('top4Txt').value;
    document.getElementById('top4aLbl').innerHTML = document.getElementById('top4aTxt').value;
    document.getElementById('top4bLbl').innerHTML = document.getElementById('top4bTxt').value;

    document.getElementById('homPercLbl').innerHTML = document.getElementById('homPerc').value + '%';
    document.getElementById('quizPercLbl').innerHTML = document.getElementById('quizPerc').value + '%';
    document.getElementById('labPercLbl').innerHTML = document.getElementById('labPerc').value + '%';
    document.getElementById('midPercLbl').innerHTML = document.getElementById('midPerc').value + '%';
    document.getElementById('finPercLbl').innerHTML = document.getElementById('finPerc').value + '%';
  }


    
  

  return (

    <div class="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 py-6 flex flex-col justify-center sm:py-12">

      <center>
        <span class="text-6xl text-black font-serif font-bold">Create & Edit Course Outline</span><br /><br />
      </center>

      <Flex>

      <form class="ml-6 mt-1 float-left">

        <label class="text-3xl font-serif text-black mt-4">Course Code:</label>
        <textarea id="courseCodeText" cols="20" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        

        <label class="text-3xl font-serif text-black">Course Title:</label>
        <textarea cols="30" rows="1" id="courseTitleText" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br /><br />
        

        <label class="text-3xl font-serif text-black">Description</label><br />
        <textarea id="desTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br /><br />
        

        <label class="text-3xl font-serif text-black">Instructor</label><br />
        <textarea id="insTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Academic Calendar Copy</label><br />
        <textarea id="accTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Contact Hours</label><br />
        <textarea id="conTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Antirequisites</label><br />
        <textarea id="antTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Prerequisites</label><br />
        <textarea id="preTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Co-requisites</label><br />
        <textarea id="coTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">CEAB Academic Units</label><br />
        <textarea id="ceabTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Required Textbook</label><br />
        <textarea id="reqTbTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Other Required References</label><br />
        <textarea id="othTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Recommended References</label><br />
        <textarea id="recRefTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">General Learning Objectives</label><br />
        <label class="text-3xl font-serif text-black">(CEAB Graduate Attributes):</label><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Knowledge Base:</label>
        <select id="knowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Problem Analysis:</label>
        <select id="prodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Investigation:</label>
        <select id="invdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Design:</label>
        <select id="desidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Use of Engineering Tools:</label>
        <select id="useEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Individual and Team Work:</label>
        <select id="inddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Communication Skills:</label>
        <select id="comdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Professionalism:</label>
        <select id="profdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Impact on Society and the Environment:</label>
        <select id="impdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Ethics and Equity:</label>
        <select id="ethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Economics and Project Management:</label>
        <select id="econdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Life-Long Learning:</label>
        <select id="lifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I">I</option>
          <option value="D">D</option>
          <option value="A">A</option>
        </select><br /><br />

        

        <label class="text-3xl font-serif text-black">Course Topics and Specific Learning Outcomes</label><br /><br />
        <label class="text-xl font-serif ml-9 text-black">Topic 1:</label>
        <textarea id="top1Txt" cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea id="top1aTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top1bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        

        <label class="text-xl font-serif ml-9 text-black">Topic 2:</label>
        <textarea id="top2Txt" cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea id="top2aTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top2bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        

        <label class="text-xl font-serif ml-9 text-black">Topic 3:</label>
        <textarea id="top3Txt" cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea id="top3aTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top3bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        

        <label class="text-xl font-serif ml-9 text-black">Topic 4:</label>
        <textarea id="top4Txt" cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea id="top4aTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top4bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        

        <label class="text-3xl font-serif text-black">Evaluation Weights</label><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Homework Assignments:</label>
        <input id="homPerc" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Quizzes:</label>
        <input id="quizPerc" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Laboratory:</label>
        <input id="labPerc" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Midterm Test:</label>
        <input id="midPerc" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Final Examination:</label>
        <input id="finPerc" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br /><br />

        

        <label class="text-3xl font-serif text-black">Homework Assignments</label><br />
        <textarea id="homTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Quizzes</label><br />
        <textarea id="quiTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Laboratory</label><br />
        <textarea id="labTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Midterm Test</label><br />
        <textarea id="midTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Final Examination</label><br />
        <textarea id="finTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Late Submission Policy</label><br />
        <textarea id="lateTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Assignment Submission Locker</label><br />
        <textarea id="assSubTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Use of English</label><br />
        <textarea id="useTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Attendance</label><br />
        <textarea id="attTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Absence Due to Illness or Other Circumstances</label><br />
        <textarea id="absTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Missed Midterm Examinations</label><br />
        <textarea id="misTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Cheating and Plagiarism</label><br />
        <textarea id="cheTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Use of Electronic Devices</label><br />
        <textarea id="useElTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Use of Personal Response Devices ("Clickers")</label><br />
        <textarea id="usePerTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Policy on Repeating All Components of a Course</label><br />
        <textarea id="polTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Internet and Electronic Mail</label><br />
        <textarea id="intTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Accessibility</label><br />
        <textarea id="accTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Support Services</label><br />
        <textarea id="supTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br /><br />

        
        <Button colorScheme="green" size='lg' width="80" id="saveBtn" onClick={() => submitChanges()}>
        Save
        </Button>
        
        

        

      </form>

      

      

      <Box mr='70' mt='30' borderWidth='2px' borderColor='black' bg='white' h='6000px' w='65%'>

        <center>

          <label class="text-xl font-serif text-black mt-2">Support Services</label><br />
          <label class="text-xl font-serif text-black mt-2">Faculty of Engineering</label><br />
          <label class="text-xl font-serif text-black mt-2">Department of Electrical and Computer Engineering</label><br />
          <label id="courseCodeLabel" class="text-xl font-serif text-black mt-2"></label><br />
          <label id="courseTitleLabel" class="text-xl font-serif text-black mt-2"></label><br />

        </center>

      <label class="text-3xl font-serif text-black ml-2">Description</label><br />
      <label id="desLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Instructor</label><br />
      <label id="insLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Academic Calendar Copy</label><br />
      <label id="accLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Contact Hours</label><br />
      <label id="conLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Antirequisites</label><br />
      <label id="antLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Prerequisites</label><br />
      <label id="preLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Co-Requisites</label><br />
      <label id="coLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">CEAB Academic Units</label><br />
      <label id="ceabLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Required Textbook</label><br />
      <label id="reqTbLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />
      
      <label class="text-3xl font-serif text-black ml-2">Other Required References</label><br />
      <label id="othLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Recommended References</label><br />
      <label id="recRefLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">General Learning Objectives (CEAB Graduate Attributes)</label><br /><br />
      <SimpleGrid columns={3} spacing={0} border="1px" borderColor="black">
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Knowledge Base:</label>
          <span id="knowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Use of Engineering Tools:</label>
          <span id="useEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Impact on Society and the Environment:</label>
          <span id="impLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Problem Analysis:</label>
          <span id="proLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Individual and Team Work:</label>
          <span id="indLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Ethics and Equality:</label>
          <span id="ethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Investigation:</label>
          <span id="invLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Communication Skills:</label>
          <span id="comLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Economics and Project Management:</label>
          <span id="econLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Design:</label>
          <span id="desiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Professionalism:</label>
          <span id="profLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='80px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Life-Long Learning:</label>
          <span id="lifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
      </SimpleGrid><br /><br />

      
      <SimpleGrid columns={2} spacing={0} border="1px" borderColor="black">
        <Box height='60px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">Course Topics and Specific Learning Outcomes</label>
          <span id="knowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='60px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">CEAB Graduate Attributes Indicators</label>
          <span id="useEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label id="top1Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
          <label id="top1aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label id="top1bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <span id="proLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label id="top2Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
          <label id="top2aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label id="top2bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <span id="ethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label id="top3Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
          <label id="top3aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label id="top3bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <span id="comLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label id="top4Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
          <label id="top4aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <label id="top4bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='170px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6"></label>
          <span id="comLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
        </Box>
      </SimpleGrid><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Homework Assignments</label><br />
      <SimpleGrid columns={2} spacing={0} border="1px" borderColor="black">
        <Box height='40px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">Course Component</label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">Weight</label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Homework Assignments</label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label id="homPercLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Quizzes</label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label id="quizPercLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Laboratory</label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label id="labPercLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Midterm Test</label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label id="midPercLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label class="text-xl font-serif text-black ml-2 w-5/6">Final Examination</label>
        </Box>
        <Box height='40px' border="1px" borderColor="black">
          <label id="finPercLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
        </Box>
      </SimpleGrid><br /><br />


      <label class="text-3xl font-serif text-black ml-2">Homework Assignments</label><br />
      <label id="homLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Quizzes</label><br />
      <label id="quiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Laboratory</label><br />
      <label id="labLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Midterm Test</label><br />
      <label id="midLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Final Examination</label><br />
      <label id="finLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Late Submission Policy</label><br />
      <label id="lateLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Assignment Submission Locker</label><br />
      <label id="assSubLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Use of English</label><br />
      <label id="useLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Attendance</label><br />
      <label id="attLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Absence Due to Illness or Other Circumstances</label><br />
      <label id="absLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Missed Midterm Examinations</label><br />
      <label id="misLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Cheating and Plagiarism</label><br />
      <label id="cheLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Use of Electronic Devices</label><br />
      <label id="useElLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Use of Personal Response Devices ("Clickers")</label><br />
      <label id="usePerLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Policy on Repeating All Components of a Course</label><br />
      <label id="polLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Internet and Electronic Mail</label><br />
      <label id="intLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Accessibility</label><br />
      <label id="accLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

      <label class="text-3xl font-serif text-black ml-2">Support Services</label><br />
      <label id="supLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />


      
      

      

      </Box>

      

      

      </Flex>

      

      




      

      
        
      
    </div>
  );
}
