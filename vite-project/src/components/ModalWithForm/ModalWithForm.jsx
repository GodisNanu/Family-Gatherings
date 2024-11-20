import React, { useState } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({ isOpen, closeModal, handleCreate }) => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [number, setNumber] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new record object with the form data
    const newRecord = {
      name: name,
      dish: recipe,
      additional: parseInt(number, 10),
    };

    // Call the handleCreate function passed from App.jsx
    handleCreate(newRecord);

    // Close the modal and reset form fields
    closeModal();
    setName("");
    setRecipe("");
    setNumber("");
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} id="modal-form">
      <div className="modal__container">
        <button
          onClick={closeModal}
          className="modal__close"
          id="closeModal"
        ></button>
        <h2 className="modal__heading">Join Us For Thanksgiving</h2>
        <form
          className="modal__form"
          id="rsvpModalForm"
          onSubmit={handleSubmit}
        >
          <label className="modal__label">What is your name?</label>
          <input
            name="name"
            type="text"
            className="modal__input-text"
            placeholder="Your Name Goes Here"
            minLength="4"
            maxLength="28"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="modal__error" id="name-input-error"></span>

          <label className="modal__label">What dish are you bringing?</label>
          <input
            name="recipe"
            placeholder="Dish To Share"
            type="text"
            className="modal__input-text"
            id="recipe-input"
            minLength="5"
            maxLength="100"
            required
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />

          <label className="modal__label">How Many Additional Guests?</label>
          <input
            className="modal__input-number"
            type="number"
            id="numberInput"
            name="number"
            max="10"
            min="0"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <button type="submit" className="modal__button">
            RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
