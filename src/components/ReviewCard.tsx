import React, { Component } from "react";
import { IReview } from "../types/types";

interface ReviewCardProps {
  review: IReview;
}

class ReviewCard extends Component<ReviewCardProps> {
  render() {
    return (
      <div className="ReviewCard">
        <h3 className="review-card-name">{this.props.review.name}</h3>
        <p className="review-card-review">{this.props.review.review}</p>
        <p className="review-card-date">{this.props.review.date}</p>
      </div>
    );
  }
}

export default ReviewCard;
