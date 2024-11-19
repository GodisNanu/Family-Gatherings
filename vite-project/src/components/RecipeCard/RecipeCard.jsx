import { useEffect, useState } from "react";
import { recipeData } from "../../utils/constants";

export const RecipeCard = () => {
  return (
    <>
      <li className="recipe__card">
        <img src={recipeData.link} alt="" className="recipe__card-image" />
        <button type="button" className="recipe__card-view-button"></button>
        <div className="recipe__card-text">
          <h2 className="recipe__card-name">{recipeData.name}</h2>
          <button type="button" className="recipe__card-select-button"></button>
        </div>
      </li>
    </>
  );
};

export default RecipeCard;
