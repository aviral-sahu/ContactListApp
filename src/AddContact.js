import React from "react";
import { Link } from "react-router-dom";
import Contact from "../component/Contact";
const AddContact = () => {
  return (
    <>
      <h1>Add contact</h1>
      <Contact />
      <br />
      <p>
        Return to home page :{" "}
        <span>
          {" "}
          <Link to="/"> Home</Link>
        </span>
      </p>
    </>
  );
};
export default AddContact;
