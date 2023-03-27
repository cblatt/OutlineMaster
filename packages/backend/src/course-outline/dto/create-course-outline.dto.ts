import { ApiProperty } from '@nestjs/swagger';
import {
  CourseOutlineEvaluation,
  CourseOutlineInstructor,
  CourseOutlineTopic,
} from '@prisma/client';

export class CreateCourseOutlineDto {
  @ApiProperty()
  courseUuid: string;

  @ApiProperty()
  departmentUuid: string;

  @ApiProperty()
  versionNum: number;

  @ApiProperty()
  year: string;

  @ApiProperty()
  isApproved: string;

  @ApiProperty()
  instructors: CourseOutlineInstructor[];

  @ApiProperty()
  courseTopics: CourseOutlineTopic[];

  @ApiProperty()
  courseEvaluations: CourseOutlineEvaluation[];

  @ApiProperty()
  description: string;

  @ApiProperty()
  calendarCopy: string;

  @ApiProperty()
  lectureHours: number;

  @ApiProperty()
  labHours: number;

  @ApiProperty()
  tutorialHours: number;

  @ApiProperty()
  courseCredits: number;

  @ApiProperty()
  prerequisites: string;

  @ApiProperty()
  antirequisites: string;

  @ApiProperty()
  corequisites: string;

  @ApiProperty()
  engineeringScience: number;

  @ApiProperty()
  engineeringDesign: number;

  @ApiProperty()
  requiredTextbook: string;

  @ApiProperty()
  requiredReferences: string;

  @ApiProperty()
  recommendedReferences: string;

  @ApiProperty()
  knowledgeBase: string;

  @ApiProperty()
  problemAnalysis: string;

  @ApiProperty()
  investigation: string;

  @ApiProperty()
  design: string;

  @ApiProperty()
  useOfEngineering: string;

  @ApiProperty()
  individualAndTeamWork: string;

  @ApiProperty()
  communicationSkills: string;

  @ApiProperty()
  professionalism: string;

  @ApiProperty()
  impactOnSocietyAndEnvironment: string;

  @ApiProperty()
  ethicsAndEquity: string;

  @ApiProperty()
  economicAndProjectManagement: string;

  @ApiProperty()
  lifeLongLearning: string;

  @ApiProperty()
  homeWorkAssignments: string;

  @ApiProperty()
  quizzes: string;

  @ApiProperty()
  laboratory: string;

  @ApiProperty()
  midtermTest: string;

  @ApiProperty()
  finalExamination: string;

  @ApiProperty()
  lateSubmissionPolicy: string;

  @ApiProperty()
  submissionLocker: string;

  @ApiProperty()
  justification: string;
}
