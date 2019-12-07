import React, { Component } from "react";

export default function BookDescription(props) {
  let description = "";
  if (props.description != undefined) {
    description = props.description;
  }

  return (
    <div className="container">
      <div className="mt-5 mb-3">
        <h5>
          <strong>Book Description:</strong>
        </h5>

        {description.split("\n").map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          );
        })}
      </div>
    </div>
  );
}
