import React, {Component} from "react";
import Student from "./Student";


class StudentList extends Component{
  
  render(){
    return({ students, changeStudent, studentSelected }) => (
      <ul className="col-sm-4">
        {students.map((student, index) => (
          <Student
            {...student}
            key={index}
            changeStudent={changeStudent}
            studentSelected={studentSelected}
          />
        ))}
      </ul>)
  }
}
export default StudentList
