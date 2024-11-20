import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import RecipeCardSection from "../RecipeCardSection/RecipeCardSection";
import GuestList from "../GuestList/GuestList";
// import CarouselSection from "./CarouselSection";
import Footer from "../Footer/Footer";
import { fetchRecords, createRecord } from "../../utils/api";

import "./App.css";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [records, setRecords] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const handleModalForm = () => {
    setActiveModal("modal-form");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    fetchRecords("tblSSnbbr1wuSH3DW")
      .then((data) => {
        console.log("Fetched data:", data);
        setRecords(data.records);
      })
      .catch((error) => console.error("Error fetching records:", error));
  }, []);

  const handleCreate = (newRecord) => {
    createRecord("tblSSnbbr1wuSH3DW", newRecord)
      .then((data) => {
        console.log("Record created:", data);
        // Update the records state with the new record
        setRecords((prevRecords) => [...prevRecords, data]);
      })
      .catch((error) => console.error("Error creating record:", error));
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main handleModalForm={handleModalForm} records={records} />
        <RecipeCardSection />
        <Footer />
      </div>
      <ModalWithForm
        closeModal={closeActiveModal}
        isOpen={activeModal === "modal-form"}
        handleCreate={handleCreate}
      />
      <RecipeCardSection />
    </div>
  );
}

export default App;
