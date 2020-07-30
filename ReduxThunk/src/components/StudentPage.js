import React, { Component } from "react";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import { Toast } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StudentSelected: null,
      showPopover: false,
    };
  }

  

  componentDidUpdate(prevProps) {
    if (prevProps.cart.products.length < this.props.cart.products.length) {
      this.setState({ showPopover: true }, () => {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(
          () => this.setState({ showPopover: false }),
          2500
        );
      });
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  changeStudent = (id) => this.setState({ studentSelected: id });

  render() {
    return (
      <div className="row">
        <StudentList
          studentSelected={this.state.studentSelected}
          changeStudent={this.changeStudent}
          students={students}
        />
        <StudentDetail studentSelected={this.state.studentSelected} students={students} />
        <Toast
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          show={this.state.showPopover}
        >
          <Toast.Header>
            <strong className="mr-auto">Item added to the cart</strong>
          </Toast.Header>
        </Toast>
      </div>
    );
  }
  
}

export default connect(mapStateToProps)(StudentPage);
