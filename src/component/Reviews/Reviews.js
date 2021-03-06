import React from "react";
import ImportFromJson from "../../Hook/ImportFromJson";
import "./Reviews.css";
import Review from "../Review/Review";
const Reviews = () => {
  const [reviews, setReviews] = ImportFromJson("reviews.json");
  return (
    <div>
      <h1>What our customers say!</h1>
      <div className="reviews">
        {reviews.map((review, index) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
