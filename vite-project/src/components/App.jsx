import React from "react";
import "../blocks/app.css";
import Header from "./Header";
import RecipeCardSection from "./RecipeCardSection";
// import CarouselSection from "./CarouselSection";
import Footer from "./Footer";

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
