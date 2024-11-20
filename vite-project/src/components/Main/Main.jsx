import React from "react";
import GuestList from "../GuestList/GuestList";
import RecipeCardSection from "../RecipeCardSection/RecipeCardSection";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./Main.css";

const Main = ({ records }) => {
  return (
    <main className="main">
      <GuestList records={records} />
    </main>
  );
};

export default Main;
