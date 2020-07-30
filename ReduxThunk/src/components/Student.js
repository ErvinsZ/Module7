import React, {Component} from "react";

class Student extends Component{
  componentDidMount = async () => {
    const res = await fetch ("http://localhost:3003/students")
    const students = await res.json()
    console.log(students)
    this.setState({
      students: students 
    })
  }
  render(){
    return({ id, name, imageUrl, surname, changeStudent, studentSelected }) => (
      <li
        onClick={() => changeStudent(id)}
        className={studentSelected === id ? "border-thick card mt-3" : "card mt-3"}
        key={name}
        style={{ cursor: "pointer" }}
      >
        <div className="media card-body">
          <img className="student-image" src={imageUrl} alt="profile picture" />
          <div>
            <p className="card-name font-weight-bold">{name}</p>
            <p>{surname}</p>
          </div>
        </div>
      </li>

    )
  }
}

export default Student
