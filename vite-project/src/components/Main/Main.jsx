import React from "react";
import GuestList from "../GuestList/GuestList";
import RecipeCardSection from "../RecipeCardSection/RecipeCardSection";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./Main.css";

const Main = ({ records, handleModalForm }) => {
  return (
    <main className="main">
      <GuestList records={records} />
      <button onClick={handleModalForm} className="main__button" id="openModal">
        RSVP
      </button>
    </main>
  );
};

export default Main;
