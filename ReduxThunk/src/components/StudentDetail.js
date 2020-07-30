import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: id,
    });
  },

  addToCartThunk: (id) => dispatch(addItemWithThunk(id)),
});

const addItemWithThunk = (id) => {
  return (dispatch, getState) => {
    console.log("A thunk was used to dispatch this action", getState());
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: id,
    });
  };
};

class StudentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.studentSelected !== this.props.studentSelected) {
      this.setState({
        student: this.props.students.find(
          (student) => student.id === this.props.studentSelected
        ),
      });
    }
  }

  render() {
    return this.state.student ? (
      <div className="col-sm-8">
        <div className="row mt-3">
          <div className="col-sm-12">
            <h1>{this.state.student.title}</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-5 mt-3">
            <img
              className="student-cover"
              src={this.state.student.imageUrl}
              alt="student selected"
            />
          </div>
          <div className="col-sm-7">
            <p>
              <span className="font-weight-bold">Description:</span>{" "}
              {this.state.student.description}
            </p>
            <p>
              <span className="font-weight-bold">Price:</span>{" "}
              {this.state.student.price}
            </p>
            {this.props.user.username ? (
              <Button
                color="primary"
                onClick={() => this.props.addToCartThunk(this.state.student.id)}
              >
                BUY
              </Button>
            ) : (
              <p>Users must log in to purchase</p>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row margin-top">
          <div className="col-sm-12">
            <h3>Please select a student!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetail);
