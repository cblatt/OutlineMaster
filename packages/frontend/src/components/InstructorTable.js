import React, { useCallback, useEffect, useState } from "react";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import useAuth from "../hooks/useAuth";

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const columns = [
  {
    title: "Location",
    key: "location",
  },
  {
    title: "Population",
    key: "population",
  },
  {
    title: "Party",
    key: "party",
  },
];

const data = [
  {
    location: "Texas",
    population: "29 million",
    party: "Republican",
    child: [
      {
        location: "Houston",
        population: "2 million",
        party: "Democrat",
      },
      {
        location: "Austin",
        population: "1 million",
        party: "Democrat",
      },
    ],
  },
  {
    location: "California",
    population: "39 million",
    party: "Democrat",
    child: [
      {
        location: "Los Angeles",
        population: "4 million",
        party: "Democrat",
      },
      {
        location: "San Jose",
        population: "1 million",
        party: "Democrat",
      },
    ],
  },
];

const InstructorTable = () => {
  const [courses, setCourses] = useState([]);
  const user = useAuth();

  const fetchInstructorCourses = useCallback(async () => {
    const res = await fetch(
      process.env.REACT_APP_API_URI + `/instructor-courses/${user.user.uwoId}`,
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
    console.log("data", data);
    setCourses(data);
  }, []);

  useEffect(() => {
    fetchInstructorCourses();
  }, [setCourses]);

  return (
    <DataTable
      className="px-20"
      columns={columns}
      data={courses}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />
  );
};

export default InstructorTable;
