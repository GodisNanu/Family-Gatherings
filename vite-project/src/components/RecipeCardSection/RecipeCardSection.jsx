import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const RecipeCardSection = () => {
  return (
    <>
      <div className="recipe__section">
        <div className="recipe__carousel">
          <h1 className="recipe__carousel-header"> Choose A Dish to Bring </h1>
        </div>
      </div>
    </>
  );
};

export default RecipeCardSection;
