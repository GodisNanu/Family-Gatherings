import { useEffect, useState } from "react";
import { recipeData } from "../../utils/constants";
import "./RecipeCard.css";

export const RecipeCard = ({ handleModalForm, openRecipe, item }) => {
  return (
    <>
      <div className="recipe__card_container">
        <div className="recipe__card">
          <img src={item.link} alt="" className="recipe__card-image" />

          <div className="recipe__card-text">
            <h2 className="recipe__card-name">{item.name}</h2>
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
          <button
            onClick={() => {
              handleModalForm();
            }}
            type="button"
            className="recipe__card-select-button"
          >
            {" "}
            BRING THIS ONE!{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
