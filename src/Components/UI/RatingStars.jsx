import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <button style={{ background: "transparent" }} key={index}>
          <FontAwesomeIcon
            icon={faStar}
            color={`${star <= rating ? "var(--accent-color)" : "#777e90"}`}
            size="xl"
            onClick={() => setRating(star)}
          />
        </button>
      ))}
    </div>
  );
};
export default RatingStars;
