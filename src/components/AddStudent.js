import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../App";

function AddStudent(props) {
  let context = useContext(StudentContext);
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    let newData = { name, email, mobile };
    let newArray = [...context.Students, newData];
    // newArray.push(newData);
    context.setStudents(newArray);
    navigate("/all-student");
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        We'll never share your email with anyone else.
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="text"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default AddStudent;
