import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Link,
  Font,
} from "@react-pdf/renderer";
import TinosRegular from "../styles/fonts/Tinos-Regular.ttf";
import TinosItalic from "../styles/fonts/Tinos-Italic.ttf";
import TinosBold from "../styles/fonts/Tinos-Bold.ttf";

Font.register({
  family: "Tinos",
  fonts: [
    { src: TinosRegular }, // font-style: normal, font-weight: normal
    { src: TinosItalic, fontStyle: "italic" },
    { src: TinosBold, fontWeight: 700 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  header: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Tinos",
    lineHeight: 1.25,
    textAlign: "center",
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Tinos",
    lineHeight: 1.5,
    textAlign: "center",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  bodySection: {
    marginTop: 12,
    marginBottom: 12,
  },
  bodyHeader: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Tinos",
    lineHeight: 1.25,
  },
  bodyText: {
    fontSize: 12,
    fontFamily: "Tinos",
  },
  bodyItalics: {
    fontSize: 12,
    fontFamily: "Tinos",
    fontStyle: "italic",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  gaTableRow: {
    margin: "auto",
    flexDirection: "row",
    height: 32,
  },
  gaTableColL: {
    width: "28%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  gaTableColS: {
    width: "5.333333%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  gaTableCellL: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "12px",
    textAlign: "left",
    fontSize: 12,
    fontFamily: "Tinos",
  },
  gaTableCellS: {
    margin: "auto",
    fontSize: 12,
    fontFamily: "Tinos",
  },
  topicTableRowHeader: {
    margin: "auto",
    flexDirection: "row",
    height: "auto",
  },
  topicTableRowTopic: {
    margin: "auto",
    flexDirection: "row",
    height: "auto",
  },
  topicTableColL: {
    width: "80%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  topicTableColS: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  topicTableColLTopic: {
    width: "80%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#dcdcdc",
  },
  topicTableColSTopic: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#dcdcdc",
  },
  topicTableCell: {
    marginTop: "12px",
    marginLeft: "12px",
    marginBottom: "12px",
    textAlign: "left",
    fontSize: 12,
    fontFamily: "Tinos",
  },
  evaluationTable: {
    display: "table",
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  evaluationTableRow: {
    margin: "auto",
    flexDirection: "row",
    height: 20,
  },
  evaluationTableColL: {
    width: "75%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  evaluationTableColS: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
});

// Create Document Component
const MyDocument = ({ courseOutline, department, course }) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View>
        <Text style={styles.header}>Western University</Text>
        <Text style={styles.header}>Faculty of Engineering</Text>
        <Text style={styles.header}>
          Department of {department?.departmentName}
        </Text>
        <Text style={styles.title}>
          {department?.departmentCode} {course?.courseCode}:{" "}
          {course?.courseName}
        </Text>
        <Text style={styles.header}>Course Outline {courseOutline.year}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Description:</Text>
        <Text style={styles.bodyText}>{courseOutline.description}</Text>
      </View>
      <View
        style={[styles.bodySection, { display: "flex", flexDirection: "row" }]}
      >
        <Text style={[styles.bodyHeader, { width: "15%" }]}>Instructor:</Text>
        <View style={{ marginLeft: "16px", width: "85%" }}>
          {courseOutline.instructors.map((instructor, index) => (
            <View style={{ marginBottom: "12px" }} key={index}>
              <Text style={styles.bodyText}>
                {instructor.prefix} {instructor.name}
              </Text>
              <Text style={styles.bodyText}>
                {instructor.office}, {instructor.phone},{" "}
                <Link src={`mailto:${instructor.email}`}>
                  {instructor.email}
                </Link>
              </Text>
              <Text style={styles.bodyText}>
                Consultation hours: {instructor.hours}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Academic Calendar Copy:</Text>
        <Text style={styles.bodyText}>{courseOutline.calendarCopy}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Contact Hours:</Text>
        <Text style={styles.bodyText}>
          {isNaN(courseOutline.lectureHours) ? "X" : courseOutline.lectureHours}{" "}
          lecture hours,{" "}
          {isNaN(courseOutline.labHours) ? "Y" : courseOutline.labHours}{" "}
          laboratory hours,{" "}
          {isNaN(courseOutline.tutorialHours)
            ? "Z"
            : courseOutline.tutorialHours}{" "}
          tutorial hours, {courseOutline.courseCredits} course.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Antirequisites:</Text>
        <Text style={styles.bodyText}>{courseOutline.antirequisites}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Prerequisites:</Text>
        <Text style={styles.bodyText}>{courseOutline.prerequisites}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Co-requisites:</Text>
        <Text style={styles.bodyText}>{courseOutline.corequisites}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          Unless you have either the requisites for this course or written
          special permission from your Dean to enroll in it, you will be removed
          from this course and it will be deleted from your record. This
          decision may not be appealed. You will receive no adjustment to your
          fees in the event that you are dropped from a course for failing to
          have the necessary prerequisites.
        </Text>
      </View>
      <View
        style={[styles.bodySection, { display: "flex", flexDirection: "row" }]}
      >
        <Text style={styles.bodyHeader}>CEAB Academic Units: </Text>
        <Text style={styles.bodyText}>
          Engineering Science{" "}
          {isNaN(courseOutline.engineeringScience)
            ? "X"
            : courseOutline.engineeringScience}
          %, Engineering Design{" "}
          {isNaN(courseOutline.engineeringDesign)
            ? "Y"
            : courseOutline.engineeringDesign}
          %.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Required Textbook:</Text>
        <Text style={styles.bodyText}>{courseOutline.requiredTextbook}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Other Required References:</Text>
        <Text style={styles.bodyText}>{courseOutline.requiredReferences}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Recommended References:</Text>
        <Text style={styles.bodyText}>
          {courseOutline.recommendedReferences}
        </Text>
      </View>
      <View style={styles.bodySection} break>
        <Text style={styles.bodyHeader}>
          General Learning Objectives (CEAB Graduate Attributes)
        </Text>

        <Text style={styles.bodyText}>
          In this course the student will have the chance to put all their
          learnings regarding the software development life cycle into practice
          with the popular scrum framework to create a useful software product
        </Text>
      </View>
      <View style={styles.table}>
        <View style={styles.gaTableRow}>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Knowledge Base</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.knowledgeBase}
            </Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Use of Engineering Tools</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.useOfEngineering}
            </Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>
              Impact on Society and the Environment
            </Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.impactOnSocietyAndEnvironment}
            </Text>
          </View>
        </View>
        <View style={styles.gaTableRow}>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Problem Analysis</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.problemAnalysis}
            </Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Individual and Team Work</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.individualAndTeamWork}
            </Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Ethics and Equity</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.ethicsAndEquity}
            </Text>
          </View>
        </View>
        <View style={styles.gaTableRow}>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Investigation</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.investigation}
            </Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Communication Skills</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.communicationSkills}
            </Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>
              Economics and Project Management
            </Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.economicAndProjectManagement}
            </Text>
          </View>
        </View>
        <View style={styles.gaTableRow}>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Design</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>{courseOutline.design}</Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Professionalism</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.professionalism}
            </Text>
          </View>
          <View style={styles.gaTableColL}>
            <Text style={styles.gaTableCellL}>Life-Long Learning</Text>
          </View>
          <View style={styles.gaTableColS}>
            <Text style={styles.gaTableCellS}>
              {courseOutline.lifeLongLearning}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.bodySection,
          {
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          },
        ]}
      >
        <Text style={styles.bodyText}>Notation: </Text>
        <Text style={styles.bodyItalics}>
          where x be I: Introductory, D: Intermediate, A: Advanced, or empty.{" "}
        </Text>
        <Text style={styles.bodyText}>
          I – The instructor will introduce the topic at the level required. It
          is not necessary for the student to have seen the material before. D –
          There may be a reminder or review, but the student is expected to have
          seen and been tested on the material before taking the course. A – It
          is expected that the student can apply the knowledge without prompting
          (e.g. no review).
        </Text>
      </View>
      <View style={[styles.table, styles.bodySection]}>
        <View style={styles.topicTableRowHeader}>
          <View style={styles.topicTableColL}>
            <Text style={[styles.topicTableCell, { fontWeight: 700 }]}>
              Course Topics and Specific Learning Outcomes
            </Text>
          </View>
          <View style={styles.topicTableColS}>
            <Text style={[styles.topicTableCell, { fontWeight: 700 }]}>
              CEAB Graduate Attributes Indicators
            </Text>
          </View>
        </View>
        {courseOutline.courseTopics.map((topic, index) => (
          <View key={index}>
            <View style={styles.topicTableRowTopic}>
              <View style={styles.topicTableColLTopic}>
                <View style={styles.topicTableCell}>
                  <Text style={styles.bodyHeader}>
                    {index + 1}. {topic.topic}
                  </Text>
                  <Text>
                    At the end of this section, students will be able to:
                  </Text>
                </View>
              </View>
              <View style={styles.topicTableColSTopic}>
                <Text style={[styles.topicTableCell, styles.bodyHeader]}>
                  {topic.gaIndicators.map((indicator, index) => {
                    return (
                      (index ? ", " : "") +
                      (indicator.value ? indicator.value : indicator)
                    );
                  })}
                </Text>
              </View>
            </View>
            <View style={styles.topicTableRowTopic}>
              <View style={styles.topicTableColL}>
                <Text style={styles.topicTableCell}>{topic.topicDetails}</Text>
              </View>
              <View style={styles.topicTableColS}></View>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Evaluation</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.evaluationTable}>
            <View style={styles.evaluationTableRow}>
              <View style={styles.evaluationTableColL}>
                <Text style={[styles.gaTableCellL, styles.bodyHeader]}>
                  Course Component
                </Text>
              </View>
              <View style={styles.evaluationTableColS}>
                <Text style={[styles.gaTableCellS, styles.bodyHeader]}>
                  Weight
                </Text>
              </View>
            </View>
            {courseOutline.courseEvaluations.map((evaluation, index) => (
              <View style={styles.evaluationTableRow} key={index}>
                <View style={styles.evaluationTableColL}>
                  <Text style={styles.gaTableCellL}>
                    {evaluation.courseComponent}
                  </Text>
                </View>
                <View style={styles.evaluationTableColS}>
                  <Text style={styles.gaTableCellS}>{evaluation.weight}%</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          To obtain a passing grade in the course, a mark of 50% or more must be
          achieved on the final examination as well as on the laboratory. A
          final examination or laboratory mark &lt; 50% will result in a final
          course grade of 48% or less.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Homework Assignments:</Text>
        <Text style={styles.bodyText}>{courseOutline.homeWorkAssignments}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Quizzes:</Text>
        <Text style={styles.bodyText}>{courseOutline.quizzes}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Laboratory:</Text>
        <Text style={styles.bodyText}>{courseOutline.laboratory}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Midterm Test:</Text>
        <Text style={styles.bodyText}>{courseOutline.midtermTest}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Final Examination:</Text>
        <Text style={styles.bodyText}>{courseOutline.finalExamination}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Late Submission Policy:</Text>
        <Text style={styles.bodyText}>
          {courseOutline.lateSubmissionPolicy}
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Assignment Submission Locker:</Text>
        <Text style={styles.bodyText}>{courseOutline.submissionLocker}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Use of English:</Text>
        <Text style={styles.bodyText}>
          In accordance with Senate and Faculty Policy, students may be
          penalized up to 10% of the marks on all assignments, tests, and
          examinations for improper use of English. Additionally, poorly written
          work with the exception of the final examination may be returned
          without grading. If resubmission of the work is permitted, it may be
          graded with marks deducted for poor English and/or late submission.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Attendance:</Text>
        <Text style={styles.bodyText}>
          Any student who, in the opinion of the instructor, is absent too
          frequently from class, laboratory, or tutorial periods will be
          reported to the Dean (after due warning has been given). On the
          recommendation of the department, and with the permission of the Dean,
          the student will be debarred from taking the regular final examination
          in the course.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>
          Absence Due to Illness or Other Circumstances:
        </Text>
        <Text style={styles.bodyText}>
          Students should immediately consult with the instructor or department
          Chair if they have any problems that could affect their performance in
          the course. Where appropriate, the problems should be documented (see
          the attached “Instructions for Students Unable to Write Tests or
          Examinations or Submit Assignments as Scheduled”). The student should
          seek advice from the instructor or department Chair regarding how best
          to deal with the problem. Failure to notify the instructor or
          department Chair immediately (or as soon as possible thereafter) will
          have a negative effect on any appeal.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          For more information concerning medical accommodations, see the
          relevant section of the Academic Handbook:
        </Text>
        <Link
          style={styles.bodyText}
          src="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf"
        >
          http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf
        </Link>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          For more information concerning accommodations for religious holidays,
          see the relevant section of the Academic Handbook:
        </Text>
        <Link
          style={styles.bodyText}
          src="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf"
        >
          http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf
        </Link>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Missed Midterm Examinations:</Text>
        <Text style={styles.bodyText}>
          If a student misses a midterm examination, she or he must follow the
          Instructions for Students Unable to Write Tests and provide
          documentation to Undergraduate Services Office within 24 hours of the
          missed test. If accommodation is granted, the department will decide
          whether to provide a make-up test or allow reweighting of the test,
          where reweighting means the marks normally allotted for the midterm
          will be added to the final exam. If no reasonable justification for
          missing the test can be found, then the student will receive a mark of
          zero for the test.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          If a student is going to miss the midterm examination for religious
          reasons, they must inform the instructor in writing within 48 hours of
          the announcement of the exam date or they will be required to write
          the exam.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Cheating and Plagiarism:</Text>
        <Text style={styles.bodyText}>
          Students must write their essays and assignments in their own words.
          Whenever students take an idea or a passage from another author, they
          must acknowledge their debt both by using quotation marks where
          appropriate and by proper referencing such as footnotes or citations.
          University policy states that cheating, including plagiarism, is a
          scholastic offence. The commission of a scholastic offence is attended
          by academic penalties, which might include expulsion from the program.
          If you are caught cheating, there will be no second warning.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          All required papers may be subject to submission for textual
          similarity review to commercial plagiarism-detection software under
          license to the University for the detection of plagiarism. All papers
          submitted will be included as source documents on the reference
          database for the purpose of detecting plagiarism of papers
          subsequently submitted to the system. Use of the service is subject to
          the licensing agreement, currently between the University of Western
          Ontario and Turnitin.com (
          <Link src="http://www.turnitin.com">http://www.turnitin.com</Link>).
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          Scholastic offences are taken seriously and students are directed to
          read the appropriate policy, specifically, the definition of what
          constitutes a Scholastic Offence, in the relevant section of the
          Academic Handbook:
        </Text>
        <Link
          src="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf"
          style={styles.bodyText}
        >
          http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf
        </Link>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Use of Electronic Devices:</Text>
        <Text style={styles.bodyText}>
          In this course the student will have the chance to put all their
          learnings regarding the software development life cycle into practice
          with the popular scrum framework to create a useful software product
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>
          Use of Personal Response Devices (“Clickers”):
        </Text>
        <Text style={styles.bodyText}>
          In this course the student will have the chance to put all their
          learnings regarding the software development life cycle into practice
          with the popular scrum framework to create a useful software product
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>
          Policy on Repeating All Components of a Course:
        </Text>
        <Text style={styles.bodyText}>
          Students who are required to repeat an Engineering course must repeat
          all components of the course. No special permissions will be granted
          enabling a student to retain laboratory, assignment, or test marks
          from previous years. Previously completed assignments and laboratories
          cannot be resubmitted by the student for grading in subsequent years.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Internet and Electronic Mail:</Text>
        <Text style={styles.bodyText}>
          Students are responsible for regularly checking their Western e mail
          and the course web site (
          <Link src="https://owl.uwo.ca/portal/">
            https://owl.uwo.ca/portal/
          </Link>
          ) and making themselves aware of any information that is posted about
          the course.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyHeader}>Accessibility:</Text>
        <Text style={styles.bodyText}>
          Please contact the course instructor if you require material in an
          alternate format or if any other arrangements can make this course
          more accessible to you. You may also wish to contact Services for
          Students with Disabilities (SSD) at 519-661-2111 ext. 82147 for any
          specific question regarding an accommodation.
        </Text>
      </View>
      <View
        style={[styles.bodySection, { display: "flex", flexDirection: "row" }]}
      >
        <Text style={[styles.bodyHeader, { width: "20%" }]}>
          Support Services:
        </Text>
        <View style={{ marginLeft: "16px", width: "80%" }}>
          <Text style={styles.bodyText}>
            Office of the Registrar,{" "}
            <Link src="http://www.registrar.uwo.ca/">
              http://www.registrar.uwo.ca/
            </Link>
          </Text>
          <Text style={styles.bodyText}>
            Student Development Centre,{" "}
            <Link src="http://www.sdc.uwo.ca/">http://www.sdc.uwo.ca/</Link>
          </Text>
          <Text style={styles.bodyText}>
            Engineering Undergraduate Services,{" "}
            <Link src="http://www.eng.uwo.ca/undergraduate/">
              http://www.eng.uwo.ca/undergraduate/
            </Link>
          </Text>
          <Text style={styles.bodyText}>
            USC Student Support Services,{" "}
            <Link src="http://westernusc.ca/services/">
              http://westernusc.ca/services/
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.bodyText}>
          Students who are in emotional/mental distress should refer to Mental
          Health @ Western,{" "}
          <Link src="http://www.health.uwo.ca/mental_health/">
            http://www.health.uwo.ca/mental_health/
          </Link>
          , for a complete list of options about how to obtain help.
        </Text>
      </View>
    </Page>
  </Document>
);

export const PreviewOutline = ({
  courseOutline,
  showToolbar,
  department,
  course,
}) => {
  console.log(courseOutline);
  return (
    <PDFViewer height={700} width={600} showToolbar={showToolbar}>
      <MyDocument
        courseOutline={courseOutline}
        department={department}
        course={course}
      />
    </PDFViewer>
  );
};
