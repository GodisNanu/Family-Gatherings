import { useEffect, useState } from "react";
import { recipeData } from "../../utils/constants";
import "./RecipeCard.css";

export const RecipeCard = ({ openRecipe, name, link }) => {
  return (
    <>
      <div className="recipe__card_container">
        <div className="recipe__card">
          <img src={link} alt="" className="recipe__card-image" />

          <div className="recipe__card-text">
            <h2 className="recipe__card-name">{name}</h2>
          </div>
          <button
            onClick={() => {
              openRecipe(item);
            }}
            type="button"
            className="recipe__card-view-button"
          >
            {" "}
            See Recipe{" "}
          </button>
          <button type="button" className="recipe__card-select-button">
            {" "}
            BRING THIS ONE!{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
