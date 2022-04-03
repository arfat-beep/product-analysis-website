import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import "./Review.css";
const Review = ({ review }) => {
  console.log(review);
  const { name, comment, rating, picture } = review;
  let ratingIcons = [];
  for (let i = 1; i <= parseInt(rating); i++) {
    ratingIcons.push(<StarIcon className="star"></StarIcon>);
  }
  return (
    <div className="review-container" style={{ textAlign: "center" }}>
      <img src={picture} width="250" height="250" alt="" />
      <div className="review-details">
        <h5>Name: {name} </h5>
        <p>
          <strong>Comment</strong>: {comment}{" "}
        </p>
        <p className="ratings">
          {" "}
          <strong>Ratings</strong> {ratingIcons}
        </p>
      </div>
    </div>
  );
};

export default Review;
