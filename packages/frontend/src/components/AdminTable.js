import React from "react";
import { Component } from "react";
import courses from "./courses";

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = { expandedRows: [] };
  }

  handleExpand = (course) => {
    let newExpandedRows = [...this.state.expandedRows];
    let allExpanded = this.state.allExpanded;
    let idxFound = newExpandedRows.findIndex((id) => {
      return id === course.id;
    });

    if (idxFound > -1) {
      console.log("Collapsing " + course.firstName + " " + idxFound);
      newExpandedRows.splice(idxFound, 1);
    } else {
      console.log("Expanding " + course.firstName);
      newExpandedRows.push(course.id);
    }

    console.log("Expanded rows");
    console.log(newExpandedRows);

    this.setState({ expandedRows: [...newExpandedRows] });
  };

  isExpanded = (course) => {
    const idx = this.state.expandedRows.find((id) => {
      return id === course.id;
    });

    return idx > -1;
  };

  expandAll = (courses) => {
    console.log("ExapndedRows: " + this.state.expandedRows.length);
    console.log("Players:      " + courses.length);
    if (this.state.expandedRows.length === courses.length) {
      let newExpandedRows = [];
      this.setState({ expandedRows: [...newExpandedRows] });
      console.log("Collapsing all...");
    } else {
      let newExpandedRows = courses.map((course) => course.id);
      this.setState({ expandedRows: [...newExpandedRows] });
      console.log("Expanding all...");
      console.log("Expanded rows " + newExpandedRows.length);
    }
  };

  getRows = (course) => {
    let rows = [];
    const projects = course.projects || [];

    const firstRow = (
      <tr>
        <td>{course.firstName}</td>
        <td>{course.lastName}</td>
        <td>{course.team}</td>
        <td>
          {projects.length > 0 && (
            <button onClick={() => this.handleExpand(course)}>
              {this.isExpanded(course) ? "-" : "+"}
            </button>
          )}
        </td>
      </tr>
    );

    rows.push(firstRow);

    if (this.isExpanded(course) && projects.length > 0) {
      const projectRows = projects.map((project) => (
        <tr className="player-details">
          <td className="player-details" />
          <td colspan="3" className="player-details">
            <br />
            <div className="attribute">
              <div className="attribute-name">Toggle Here: </div>
              <div className="attribute-value">{project.name}</div>
            </div>
            <br />
          </td>
        </tr>
      ));

      rows.push(projectRows);
    }

    return rows;
  };

  getPlayerTable = (courses) => {
    const playerRows = courses.map((course) => {
      return this.getRows(course);
    });

    return (
      <div className="mt-4 bg-white shadow-md rounded-lg text-left p-8 mx-20">
        <table className="my-table">
          <tr>
            <th>Current Courses</th>
            <th onClick={() => this.expandAll(courses)}>
              <button>
                {courses.length === this.state.expandedRows.length ? "-" : "+"}
              </button>
            </th>
          </tr>
          {playerRows}
        </table>
      </div>
    );
  };

  render() {
    return <div>{this.getPlayerTable(courses)}</div>;
  }
}

export default MyTable;
