import { useEffect, useState } from "react";
import { recipeData } from "../constants";

export const RecipeCard = () => {
  return;
  <>
    <li className="recipe__card">
      <img
        src="./images/card-images/lake-louise.jpg"
        alt=""
        className="recipe__card-image"
      />
      <button type="button" className="recipe__card-view-button"></button>
      <div className="recipe__card-text">
        <h2 className="recipe__card-name"></h2>
        <button type="button" className="recipe__card-select-button"></button>
      </div>
    </li>
  </>;
};
