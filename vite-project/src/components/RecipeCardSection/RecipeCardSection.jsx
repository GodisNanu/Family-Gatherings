import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeCardSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recipeData } from "../../utils/constants";
import RecipeModal from "../RecipeModal/RecipeModal";

const RecipeCardSection = ({ handleModalForm }) => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const onClose = () => {
    setActiveModal("");
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };
  const openRecipe = (item) => {
    setActiveModal("view-recipe");
    setSelectedCard(item);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const processedData = recipeData.map((card) => ({
      id: card._id,
      name: card.name,
      link: card.link,
      ingredients: card.ingredients,
      instructions: card.instructions,
      tips: card.tips,
    }));

    setData(processedData);
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="recipe__section">
        <div className="recipe__carousel">
          <h1 className="recipe__carousel-header"> Choose A Dish to Bring </h1>
        </div>
        <div className="recipe__carousel-feature">
          <Slider {...settings}>
            {data.map((item) => (
              <RecipeCard
                handleModalForm={handleModalForm}
                openRecipe={openRecipe}
                key={item._id}
                name={item.name}
                link={item.link}
              />
            ))}
          </Slider>
        </div>
      </div>

      <RecipeModal
        handleOutsideClick={handleOutsideClick}
        isOpen={activeModal === "view-recipe"}
        item={selectedCard}
        onClose={onClose}
      />
    </>
  );
};

export default RecipeCardSection;
