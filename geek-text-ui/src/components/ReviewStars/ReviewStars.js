import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

export default function ReviewStars(props) {
  let rating = Math.round(props.avgRating * 10) / 10;

  var style = {
    verticalAlign: "middle"
  };

  return (
    <span>
      <span style={style}>
        <Rating value={Math.floor(props.avgRating)} readOnly />
      </span>

      <Typography component="span" className="ml-2">
        <span>{rating ? "(" + rating + " out of 5)" : "(0 Reviews)"}</span>
      </Typography>
    </span>
  );
}

function displayRating() {}
