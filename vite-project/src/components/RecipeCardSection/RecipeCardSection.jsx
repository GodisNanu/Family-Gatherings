import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecipeCardSection.css";
import RecipeCard from "../RecipeCard/RecipeCard";
/*RecipeModal */
import "./RecipeCardSection.css";

const RecipeCardSection = () => {
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
    const processedData = cardData.map((card) => ({
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
    slidesToShow: 4,
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
              <RecipeCard openRecipe={openRecipe} key={item.id} item={item} />
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
