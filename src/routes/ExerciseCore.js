import React from "react";
import "./stylesheets/Exercise.css";
const ExerciseCore = () => {
  return (
    <section className="exercise">
      <h2>코어</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KqnFav4Edvw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default ExerciseCore;
