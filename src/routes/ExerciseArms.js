import React from "react";
import "./stylesheets/Exercise.css";
const ExerciseArms = () => {
  return (
    <section className="exercise">
      <h2>팔</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hvyKIJ5T3cI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YQZ1oATh_3w"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default ExerciseArms;
