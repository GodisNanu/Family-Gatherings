const RsvpModal = () => {
  return (
    <>
      <div className="modal" id="rsvpModal">
        <div className="modal__container">
          <button className="modal__close" id="closeModal"></button>
          <h2 className="modal__heading"> Join Us For Thanksgiving </h2>
          <form action="" className="modal__form" id="rsvpModalForm">
            <label className="modal__label">
              <input
                name="name"
                type="text"
                className="modal__input-text"
                placeholder="Your Name Goes Here"
                minlength="4"
                maxlength="28"
                required
              />
              <span className="modal__error" id=" name-input-error"></span>
            </label>
            <label className="modal__label">
              <input
                name="recipe"
                placeholder="Dish To Share"
                type="text"
                className="modal__input-text"
                id="recipe-input"
                minlength="5"
                maxlength="100"
                required
              />
            </label>
            <label className="modal__label">
              {" "}
              How Many Additional Guests?
              <input
                className="modal__input-number"
                type="number"
                id="numberInput"
                name="number"
                max="10"
                min="0"
                required
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};
