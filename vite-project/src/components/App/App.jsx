import React from "react";
import Header from "../Header/Header";
import RecipeCardSection from "../RecipeCardSection/RecipeCardSection";
// import CarouselSection from "./CarouselSection";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <RecipeCardSection />
      {/* <CarouselSection /> */}
      <Footer />
    </div>
  );
}

export default App;
