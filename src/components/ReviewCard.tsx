import React from "react";
import { IReview } from "../types/types";

interface ReviewCardProps {
  review: IReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { name, review: text, date } = review;

  const formatClientName = (name: string) => {
    if (name && typeof name === "string" && name.trim() !== "") {
      const nameParts = name.split(" ");
      if (nameParts.length > 1) {
        const lastName = nameParts[0];
        const initials = nameParts[1][0].toUpperCase();

        return `${lastName} ${initials}.`;
      } else {
        return name;
      }
    } else {
      return "Анонимный пользователь";
    }
  };

  return (
    <div className="ReviewCard">
      <h3 className="review-card-name">{formatClientName(name)}</h3>
      <p className="review-card-review">{text}</p>
      <p className="review-date">{date}</p>
    </div>
  );
};

export default ReviewCard;
