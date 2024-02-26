import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export const FiveStarRating = ({ rating }) => {
  const starList = [];
  /**
   * This line finds the whole number portion of the rating by using the Math.floor function.
   * This essentially rounds the rating down to the nearest integer,
   * representing the number of full stars to display.
   */
  const starFillCount = Math.floor(rating);

  /**
   * This line checks if there should be a half star displayed.
   * It subtracts the number of full stars (starFillCount) from the original rating.
   * If the difference is greater than or equal to 0.5, it means there's enough remaining value to display a half star.
   */
  const hasStarHalf = rating - starFillCount >= 0.5;

  /**
   * This line calculates the number of empty stars to display.
   * It subtracts the number of full stars (starFillCount) and (optionally) the half star (based on the value of hasStarHalf) from the total number of stars (5).
   * This gives the number of empty stars needed to complete the rating.
   */
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  return <div>{starList}</div>;
};
