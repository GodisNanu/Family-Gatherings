const RecipeModal = ({ handleOutsideClick, isOpen, item, onClose }) => {
  return (
    <>
      <div
        onClick={handleOutsideClick}
        className={`modal ${isOpen ? "modal_opened" : ""}`}
      >
        <div className="modal__container">
          <div className="modal__header">
            <h1 className="modal__title">{item.name}</h1>
            <button onClick={onClose} className="modal__close"></button>
          </div>
          <div className="modal__content">
            <img src={item.link} alt={item.name} className="modal__image" />
            <section className="modal__ingredients">
              <h2 className="modal__ingredients-header"> Ingredients: </h2>
              <p className="modal__ingredients-list">{item.ingredients}</p>
            </section>
            <section className="modal__recipe">
              <h2 className="modal__recipe-header"> Directions: </h2>
              <p className="modal__recipe-directions">{item.instructions} </p>
            </section>
            <section className="modal__tips">
              <h2 className="modal__tips-header">Tips:</h2>
              <p className="modal__tips-list">{item.tips}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeModal;
