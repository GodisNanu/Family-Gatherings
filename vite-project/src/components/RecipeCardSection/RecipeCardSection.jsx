import React, { Component } from "react";
import Slider from "react-slick";
import RecipeCard from "../RecipeCard/RecipeCard";
import "../RecipeCard/RecipeCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recipeData } from "../../utils/constants";

export const RecipeCardSection = () => {
  return (
    <>
      <div className="recipe__section">
        <div className="recipe__carousel">
          <h1 className="recipe__carousel-header"> Choose A Dish to Bring </h1>
        </div>
      </div>
      {recipeData.map((card) => {
        return (
          <RecipeCard
            key={card.id}
            name={card.name}
            link={card.link}
            ingredients={card.ingredients}
            instructions={card.instructions}
            tips={card.tips}
          />
        );
      })}
    </>
  );
};

export default RecipeCardSection;
