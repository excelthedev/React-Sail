import React from "react";
import "./Details.css";

const Details = (props) => {
  return (
    <>
      <div className="container">
        <div className="self-con">
          <p className="para-fine">FirstName: {props.firstname}</p>
          <p>LastName: {props.lastname}</p>
          <p>Email Address: {props.email}</p>
          <p>Phone Number: {props.phone}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
