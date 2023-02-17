import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Button
} from '@chakra-ui/react'

import {Input} from "@chakra-ui/react";

export default function PlayerComparison() {

    
  

  return (

    <div class="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 py-6 flex flex-col justify-center sm:py-12">

      <center>
        <span class="text-6xl text-black font-serif font-bold">Create & Edit Course Outline</span><br /><br />
      </center>

      <Flex>

      <form class="ml-6 mt-1 float-left">
        <label class="text-3xl font-serif text-black">Description</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Instructor</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Academic Calendar Copy</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Contact Hours</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Antirequisites</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Prerequisites</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Co-requisites</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">CEAB Academic Units</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Required Textbook</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Other Required References</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Recommended References</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">General Learning Objectives</label><br />
        <label class="text-3xl font-serif text-black">(CEAB Graduate Attributes):</label><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Knowledge Base:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Problem Analysis:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Investigation:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Design:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Knowledge Base:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Knowledge Base:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Use of Engineering Tools:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Individual and Team Work:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Communication Skills:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Professionalism:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Impact on Society and the Environment:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Ethics and Equity:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Economics and Project Management:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br />

        <label class="text-xl font-serif ml-9 text-black">Life-Long Learning:</label>
        <select id="drop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="intro">I</option>
          <option value="inter">D</option>
          <option value="adv">A</option>
        </select><br /><br />

        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black ml-8'></input><br /><br />

        <label class="text-3xl font-serif text-black">Course Topics and Specific Learning Outcomes</label><br /><br />
        <label class="text-xl font-serif ml-9 text-black">Topic 1:</label>
        <textarea cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black ml-11'></input><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Topic 2:</label>
        <textarea cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black ml-11'></input><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Topic 3:</label>
        <textarea cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black ml-11'></input><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Topic 4:</label>
        <textarea cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black ml-11'></input><br /><br />

        <label class="text-3xl font-serif text-black">Evaluation Weights</label><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Homework Assignments:</label>
        <input type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Quizzes:</label>
        <input type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Laboratory:</label>
        <input type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Midterm Test:</label>
        <input type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Final Examination:</label>
        <input type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black ml-8'></input><br /><br />

        <label class="text-3xl font-serif text-black">Homework Assignments</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Quizzes</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Laboratory</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Midterm Test</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Final Examination</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Late Submission Policy</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Assignment Submission Locker</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Use of English</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Attendance</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Absence Due to Illness or Other Circumstances</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Missed Midterm Examinations</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Cheating and Plagiarism</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Use of Electronic Devices</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Use of Personal Response Devices ("Clickers")</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Policy on Repeating All Components of a Course</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Internet and Electronic Mail</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Accessibility</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input><br /><br />

        <label class="text-3xl font-serif text-black">Support Services</label><br />
        <textarea type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <input type='button' value='Submit' class='bg-white border-2 border-black rounded-lg w-20 text-black'></input>

        

      </form>

      

      <Box mr='70' mt='30' borderWidth='2px' borderColor='black' bg='white' h='1000px' w='50%'>

      <blockquote contenteditable="true" class="border-2 border-black w-65 mt-1 ml-1">
      <p>Edit this content to add your own quote</p>
      </blockquote>

      <cite contenteditable="true">-- Write your own name here</cite>

      </Box>

      

      </Flex>

      

      




      

      
        
      
    </div>
  );
}
