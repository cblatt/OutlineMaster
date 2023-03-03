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
  Checkbox
} from '@chakra-ui/react'

export default function CreateOutline() {

  function submitChanges(){

    const elements = document.querySelectorAll('[id$="Txt"], [id$="drop"]');

    for (let i = 0; i < elements.length; i++) {
      const value = elements[i].value.trim();
      const label = document.getElementById(elements[i].id.replace('Txt', 'Lbl').replace('drop', 'Lbl'));

      if (value !== '') {
        label.innerHTML = value;
        if(label.innerHTML == "empty"){
          label.innerHTML = '';
        }
      }
    }


    
    
  }


    
  

  return (

    <div class="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ... text-gray-500 py-6 flex flex-col justify-center sm:py-12">

      <center>
        <span class="text-6xl text-black font-serif font-bold">Create & Edit Course Outline</span><br /><br />
      </center>

      
      

      <Box mr='70' mt='30' borderWidth='2px' borderColor='black' bg='white' h='6000px' w='80%' alignSelf="center">

<center>

  <label class="text-xl font-serif text-black mt-2">Support Services</label><br />
  <label class="text-xl font-serif text-black mt-2">Faculty of Engineering</label><br />
  <label class="text-xl font-serif text-black mt-2">Department of Electrical and Computer Engineering</label><br />
  <span class="text-xl font-serif text-black mt-2">ECE&nbsp;</span>
  <span id="codeLbl" class="text-xl font-serif text-black mt-2">XXXXA/B</span>
  <span class="text-xl font-serif text-black mt-2">:&nbsp;</span>
  <span id="titleLbl" class="text-xl font-serif text-black mt-2">Course Title</span><br />
  <span class="text-xl font-serif text-black mt-2">Course Outline&nbsp;</span>
  <span id="yearLbl" class="text-xl font-serif text-black mt-2">20YY-YY</span>

</center>

<label class="text-3xl font-serif text-black ml-2">Description</label><br />
<label id="desLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Instructor</label><br />
<label id="insLbl" class="text-xl font-serif text-black ml-2 w-5/6">Dr. Name, P.Eng.
				TEB XXX, 519-661-2111 ext. XXXXX, UWO e-mail address as hyperlink
				Consultation hours: 
</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Academic Calendar Copy</label><br />
<label id="acaLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Contact Hours</label><br />
<label id="conLbl" class="text-xl font-serif text-black ml-2 w-5/6">X lecture hours, Y laboratory hours, Z tutorial hours, 0.5 course.</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Antirequisites</label><br />
<label id="antLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Prerequisites</label><br />
<label id="preLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Co-Requisites</label><br />
<label id="coLbl" class="text-xl font-serif text-black ml-2 w-5/6">Unless you have either the requisites for this course or written special permission from your Dean to enroll in it, you will be removed from this course and it will be deleted from your record. This decision may not be appealed. You will receive no adjustment to your fees in the event that you are dropped from a course for failing to have the necessary prerequisites.</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">CEAB Academic Units</label><br />
<label id="ceabLbl" class="text-xl font-serif text-black ml-2 w-5/6">Engineering Science X%, Engineering Design Y%.</label><br /><br />

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
  <span id="knowLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Use of Engineering Tools:</label>
  <span id="useEngLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Impact on Society and the Environment:</label>
  <span id="impLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Problem Analysis:</label>
  <span id="proLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Individual and Team Work:</label>
  <span id="indLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Ethics and Equality:</label>
  <span id="ethLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Investigation:</label>
  <span id="invLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Communication Skills:</label>
  <span id="comLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Economics and Project Management:</label>
  <span id="econLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Design:</label>
  <span id="desiLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Professionalism:</label>
  <span id="profLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
<Box height='80px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Life-Long Learning:</label>
  <span id="lifeLbl" class="text-xl font-serif text-black ml-2 w-5/6">x</span>
</Box>
</SimpleGrid><br />

<label class="text-xl font-serif text-black ml-2 w-5/6">Notation: where x be I: Iductory, D: Dmediate, A: Aanced, or empty. I – The instructor will Iduce the topic at the level required.  It is not necessary for the student to have seen the material before. D – There may be a reminder or review, but the student is expected to have seen and been tested on the material before taking the course. A – It is expected that the student can apply the knowledge without prompting (e.g. no review).</label><br /><br />
< br />



<SimpleGrid columns={2} spacing={0} border="1px" borderColor="black">
<Box height='60px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">Course Topics and Specific Learning Outcomes</label>
  <span id="knowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">CEAB Graduate Attributes Indicators</label>
  <span id="useEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top1Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  <label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
</Box>
<Box height='60px' border="1px" borderColor="black">
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top1aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <span id="top1AknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top1AproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top1AdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1AlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top1bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
</Box>
<Box height='60px' border="1px" borderColor="black">

  <span id="top1BknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top1BproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top1BdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top1BlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  
</Box>
<Box>
<label id="top2Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
<label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
</Box>
<Box height='60px' border="1px" borderColor="black">
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top2aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <span id="top2AknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top2AproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top2AdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2AlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top2bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <span id="top2BknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top2BproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top2BdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top2BlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
</Box>
<Box>
<label id="top3Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
<label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
</Box>
<Box height='60px' border="1px" borderColor="black">
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top3aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <span id="top3AknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top3AproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top3AdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3AlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top3bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <span id="top3BknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top3BproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top3BdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top3BlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top4Lbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  <label class="text-xl font-serif text-black ml-2 w-5/6">At the end of this section, students will be able to:</label>
</Box>
<Box height='60px' border="1px" borderColor="black">
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top4aLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <span id="top4AknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top4AproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top4AdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4AlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  
</Box>
<Box height='60px' border="1px" borderColor="black">
  <label id="top4bLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label>
</Box>
<Box height='60px' border="1px" borderColor="black">

  <span id="top4BknowLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top4BproLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BinvLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>  
  <span id="top4BdesiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BuseEngLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BindLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BcomLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BprofLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BimpLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BethLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BeconLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  <span id="top4BlifeLbl" class="text-xl font-serif text-black ml-2 w-5/6"></span>
  
</Box>
  

</SimpleGrid><br /><br />

<label class="text-3xl font-serif text-black ml-2">Homework Assignments</label><br />
<SimpleGrid columns={2} spacing={0} border="1px" borderColor="black">
<Box height='40px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">Course Component</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black font-bold ml-2 w-5/6">Weight (%)</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Homework Assignments</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label id="homPercLbl" class="text-xl font-serif text-black ml-2 w-5/6">%</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Quizzes</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label id="quizPercLbl" class="text-xl font-serif text-black ml-2 w-5/6">%</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Laboratory</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label id="labPercLbl" class="text-xl font-serif text-black ml-2 w-5/6">%</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Midterm Test</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label id="midPercLbl" class="text-xl font-serif text-black ml-2 w-5/6">%</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label class="text-xl font-serif text-black ml-2 w-5/6">Final Examination</label>
</Box>
<Box height='40px' border="1px" borderColor="black">
  <label id="finPercLbl" class="text-xl font-serif text-black ml-2 w-5/6">50%</label>
</Box>
</SimpleGrid><br />

<label class="text-xl font-serif text-black ml-2 w-5/6">To obtain a passing grade in the course, a mark of 50% or more must be achieved on the final examination as well as on the laboratory. A final examination or laboratory mark less than 50% will result in a final course grade of 48% or less.</label><br /><br />


<label class="text-3xl font-serif text-black ml-2">Homework Assignments</label><br />
<label id="homLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Quizzes</label><br />
<label id="quiLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Laboratory</label><br />
<label id="labLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Midterm Test</label><br />
<label id="midLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Final Examination</label><br />
<label id="finLbl" class="text-xl font-serif text-black ml-2 w-5/6">The final examination will be take place during the regular examination period. </label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Late Submission Policy</label><br />
<label id="lateLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Assignment Submission Locker</label><br />
<label id="assSubLbl" class="text-xl font-serif text-black ml-2 w-5/6">Locker XYZ located on the second floor of TEB.</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Use of English</label><br />
<label id="useLbl" class="text-xl font-serif text-black ml-2 w-5/6">In accordance with Senate and Faculty Policy, students may be penalized up to 10% of the marks on all assignments, tests, and examinations for improper use of English. Additionally, poorly written work with the exception of the final examination may be returned without grading. If resubmission of the work is permitted, it may be graded with marks deducted for poor English and/or late submission.</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Attendance</label><br />
<label id="attLbl" class="text-xl font-serif text-black ml-2 w-5/6">Any student who, in the opinion of the instructor, is absent too frequently from class, laboratory, or tutorial periods will be reported to the Dean (after due warning has been given). On the recommendation of the department, and with the permission of the Dean, the student will be debarred from taking the regular final examination in the course.</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Absence Due to Illness or Other Circumstances</label><br />
<label id="absLbl" class="text-xl font-serif text-black ml-2 w-5/6">Students should immediately consult with the instructor or department Chair if they have any problems that could affect their performance in the course. Where appropriate, the problems should be documented (see the attached “Instructions for Students Unable to Write Tests or Examinations or Submit Assignments as Scheduled”). The student should seek Aice from the instructor or department Chair regarding how best to deal with the problem. Failure to notify the instructor or department Chair immediately (or as soon as possible thereafter) will have a negative effect on any appeal.

For more information concerning medical accommodations, see the relevant section of the Academic Handbook:
http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf

For more information concerning accommodations for religious holidays, see the relevant section of the Academic Handbook:
http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf
</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Missed Midterm Examinations</label><br />
<label id="misLbl" class="text-xl font-serif text-black ml-2 w-5/6">If a student misses a midterm examination, she or he must follow the Instructions for Students Unable to Write Tests and provide documentation to Undergraduate Services Office within 24 hours of the missed test. If accommodation is granted, the department will decide whether to provide a make-up test or allow reweighting of the test, where reweighting means the marks normally allotted for the midterm will be added to the final exam. If no reasonable justification for missing the test can be found, then the student will receive a mark of zero for the test.

If a student is going to miss the midterm examination for religious reasons, they must inform the instructor in writing within 48 hours of the announcement of the exam date or they will be required to write the exam. 
</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Cheating and Plagiarism</label><br />
<label id="cheLbl" class="text-xl font-serif text-black ml-2 w-5/6">Students must write their essays and assignments in their own words. Whenever students take an idea or a passage from another author, they must acknowledge their debt both by using quotation marks where appropriate and by proper referencing such as footnotes or citations. University policy states that cheating, including plagiarism, is a scholastic offence. The commission of a scholastic offence is attended by academic penalties, which might include expulsion from the program. If you are caught cheating, there will be no second warning.

All required papers may be subject to submission for textual similarity review to commercial plagiarism-detection software under license to the University for the detection of plagiarism. All papers submitted will be included as source documents on the reference database for the purpose of detecting plagiarism of papers subsequently submitted to the system. Use of the service is subject to the licensing agreement, currently between the University of Western Ontario and Turnitin.com (http://www.turnitin.com).

Scholastic offences are taken seriously and students are directed to read the appropriate policy, specifically, the definition of what constitutes a Scholastic Offence, in the relevant section of the Academic Handbook:
http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf
</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Use of Electronic Devices</label><br />
<label id="useElLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Use of Personal Response Devices ("Clickers")</label><br />
<label id="usePerLbl" class="text-xl font-serif text-black ml-2 w-5/6"></label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Policy on Repeating All Components of a Course</label><br />
<label id="polLbl" class="text-xl font-serif text-black ml-2 w-5/6">Students who are required to repeat an Engineering course must repeat all components of the course. No special permissions will be granted enabling a student to retain laboratory, assignment, or test marks from previous years. Previously completed assignments and laboratories cannot be resubmitted by the student for grading in subsequent years.</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Dnet and Electronic Mail</label><br />
<label id="intLbl" class="text-xl font-serif text-black ml-2 w-5/6">Students are responsible for regularly checking their Western e mail and the course web site (https://owl.uwo.ca/portal/) and making themselves aware of any information that is posted about the course.

</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Accessibility</label><br />
<label id="accLbl" class="text-xl font-serif text-black ml-2 w-5/6">Please contact the course instructor if you require material in an alternate format or if any other arrangements can make this course more accessible to you. You may also wish to contact Services for Students with Disabilities (SSD) at 519-661-2111 ext. 82147 for any specific question regarding an accommodation.</label><br /><br />

<label class="text-3xl font-serif text-black ml-2">Support Services</label><br />
<label id="supLbl" class="text-xl font-serif text-black ml-2 w-5/6">Office of the Registrar, http://www.registrar.uwo.ca/
					Student Development Centre, http://www.sdc.uwo.ca/
					Engineering Undergraduate Services, http://www.eng.uwo.ca/undergraduate/
					USC Student Support Services, http://westernusc.ca/services/

Students who are in emotional/mental distress should refer to Mental Health @ Western, http://www.health.uwo.ca/mental_health/, for a complete list of options about how to obtain help.
</label><br /><br />







</Box>
<br /><br />












      <form class="ml-6 mt-1">

        <label class="text-3xl font-serif text-black mt-4">Course Code:</label>
        <textarea id="codeTxt" cols="20" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg">XXXXA/B</textarea><br />
        

        <label class="text-3xl font-serif text-black">Course Title:</label>
        <textarea cols="30" rows="1" id="titleTxt" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea>< br />

        <label class="text-3xl font-serif text-black">Year:</label>
        <textarea cols="30" rows="1" id="yearTxt" type="text" class="border-2 border-black ml-3 rounded-lg">20YY-YY</textarea>< br />< br />
        
        
        

        <label class="text-3xl font-serif text-black">Description</label><br />
        <textarea id="desTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br /><br />
        

        <label class="text-3xl font-serif text-black">Instructor</label><br />
        <textarea id="insTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg">Dr. Name, P.Eng.
TEB XXX, 519-661-2111 ext. XXXXX, UWO e-mail address as hyperlink Consultation hours:</textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Academic Calendar Copy</label><br />
        <textarea id="acaTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Contact Hours</label><br />
        <textarea id="conTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg">X lecture hours, Y laboratory hours, Z tutorial hours, 0.5 course.</textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Antirequisites</label><br />
        <textarea id="antTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Prerequisites</label><br />
        <textarea id="preTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Co-requisites</label><br />
        <textarea id="coTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg">Unless you have either the requisites for this course or written special permission from your Dean to enroll in it, you will be removed from this course and it will be deleted from your record. This decision may not be appealed. You will receive no adjustment to your fees in the event that you are dropped from a course for failing to have the necessary prerequisites.</textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">CEAB Academic Units</label><br />
        <textarea id="ceabTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg">Engineering Science X%, Engineering Design Y%.</textarea><br />
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

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top1Aknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top1Aprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top1Ainvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top1Adesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top1AuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top1Ainddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top1Acomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top1Aprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top1Aimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top1Aethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top1Aecondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top1Alifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />


        
        
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top1bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top1Bknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top1Bprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top1Binvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top1Bdesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top1BuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top1Binddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top1Bcomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top1Bprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top1Bimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top1Bethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top1Becondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top1Blifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />
        

        <label class="text-xl font-serif ml-9 text-black">Topic 2:</label>
        <textarea id="top2Txt" cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea id="top2aTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top2Aknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top2Aprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top2Ainvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top2Adesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top2AuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top2Ainddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top2Acomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top2Aprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top2Aimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top2Aethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top2Aecondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top2Alifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />
        
        
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top2bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top2Bknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top2Bprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top2Binvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top2Bdesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top2BuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top2Binddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top2Bcomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top2Bprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top2Bimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top2Bethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top2Becondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top2Blifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />
        

        <label class="text-xl font-serif ml-9 text-black">Topic 3:</label>
        <textarea id="top3Txt" cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea id="top3aTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top3Aknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top3Aprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top3Ainvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top3Adesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top3AuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top3Ainddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top3Acomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top3Aprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top3Aimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top3Aethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top3Aecondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top3Alifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />
        
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top3bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top3Bknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top3Bprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top3Binvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top3Bdesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top3BuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top3Binddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top3Bcomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top3Bprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top3Bimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top3Bethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top3Becondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top3Blifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />
        

        <label class="text-xl font-serif ml-9 text-black">Topic 4:</label>
        <textarea id="top4Txt" cols="40" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />
        <label class="text-xl font-serif ml-12 text-black">At the end of this section, students will be able to:</label><br />
        
        <label class="text-xl font-serif ml-12 text-black">a:</label>
        <textarea id="top4aTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top4Aknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top4Aprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top4Ainvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top4Adesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top4AuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top4Ainddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top4Acomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top4Aprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top4Aimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top4Aethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top4Aecondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top4Alifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />
        
        <label class="text-xl font-serif ml-12 text-black">b:</label>
        <textarea id="top4bTxt" cols="50" rows="1" type="text" class="border-2 border-black ml-3 rounded-lg"></textarea><br />

        <label class="text-xl font-serif ml-20 text-black">Knowledge Base:</label>
        <select id="top4Bknowdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="KB1">KB1</option>
          <option value="KB2">KB2</option>
          <option value="KB3">KB3</option>
          <option value="KB4">KB4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Problem Analysis:</label>
        <select id="top4Bprodrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PA1">PA1</option>
          <option value="PA2">PA2</option>
          <option value="PA3">PA3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Investigation:</label>
        <select id="top4Binvdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="I1">I1</option>
          <option value="I2">I2</option>
          <option value="I3">I3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Design:</label>
        <select id="top4Bdesidrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
          <option value="D4">D4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Use of Engineering Tools:</label>
        <select id="top4BuseEngdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ET1">ET1</option>
          <option value="ET2">ET2</option>
          <option value="ET3">ET3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Individual and Team Work:</label>
        <select id="top4Binddrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="ITW1">ITW1</option>
          <option value="ITW2">ITW2</option>
          <option value="ITW3">ITW3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Communication Skills:</label>
        <select id="top4Bcomdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="CS1">CS1</option>
          <option value="CS2">CS2</option>
          <option value="CS3">CS3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Professionalism:</label>
        <select id="top4Bprofdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="PR1">PR1</option>
          <option value="PR2">PR2</option>
          <option value="PR3">PR3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Impact of Engineering on Society and the Environment:</label>
        <select id="top4Bimpdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="IESE1">IESE1</option>
          <option value="IESE2">IESE2</option>
          <option value="IESE3">IESE3</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Ethics and Equity:</label>
        <select id="top4Bethdrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EE1">EE1</option>
          <option value="EE2">EE2</option>
          <option value="EE3">EE3</option>
          <option value="EE4">EE4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Economics and Project Management:</label>
        <select id="top4Becondrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="EPM1">EPM1</option>
          <option value="EPM2">EPM2</option>
          <option value="EPM3">EPM3</option>
          <option value="EPM4">EPM4</option>
        </select><br />

        <label class="text-xl font-serif ml-20 text-black">Life-Long Learning:</label>
        <select id="top4Blifedrop" class="border-2 border-black rounded-lg">
          <option value="empty"></option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
        </select><br /><br />
        

        <label class="text-3xl font-serif text-black">Evaluation Weights</label><br /><br />

        <label class="text-xl font-serif ml-9 text-black">Homework Assignments:</label>
        <input id="homPercTxt" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Quizzes:</label>
        <input id="quizPercTxt" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Laboratory:</label>
        <input id="labPercTxt" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Midterm Test:</label>
        <input id="midPercTxt" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br />

        <label class="text-xl font-serif ml-9 text-black">Final Examination:</label>
        <input id="finPercTxt" type="number" placeholder="%" class="border-2 border-black ml-3 w-11 rounded-lg"></input><br /><br />

        

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
        <textarea id="finTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg">The final examination will be take place during the regular examination period.</textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Late Submission Policy</label><br />
        <textarea id="lateTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg"></textarea><br />
        <br /><br />

        <label class="text-3xl font-serif text-black">Assignment Submission Locker</label><br />
        <textarea id="assSubTxt" type="text" cols="50" class="border-2 border-black p-4 rounded-lg">Locker XYZ located on the second floor of TEB.</textarea><br />
        <br /><br />


        
        <Button colorScheme="green" size='lg' width="80" id="saveBtn" onClick={() => submitChanges()}>
        Save
        </Button>
        
        

        

      </form>
 
      

      

      

      

      




      

      
        
      
    </div>
  );
}
