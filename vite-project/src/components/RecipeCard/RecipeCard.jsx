import { useEffect, useState } from "react";
import { recipeData } from "../../utils/constants";
import "./RecipeCard.css";

export const RecipeCard = ({ name, link, ingredients, instructions, tips }) => {
  return (
    <>
      <li className="recipe__card">
        <img src={link} alt="" className="recipe__card-image" />
        <button type="button" className="recipe__card-view-button"></button>
        <div className="recipe__card-text">
          <h2 className="recipe__card-name">{name}</h2>
          <button type="button" className="recipe__card-select-button"></button>
        </div>
      </li>
    </>
  );
};

export default RecipeCard;
