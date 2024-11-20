const RecipeModal = ({ handleOutsideClick, isOpen, item, onClose }) => {
  return (
    <>
      <div
        onClick={handleOutsideClick}
        className={`modal ${isOpen ? "modal_opened" : ""}`}
      >
        <div className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">{item.name}</h1>
            <button onClick={onClose} className="modal__close"></button>
          </div>
          <img src={item.link} alt={item.name} className="modal__image" />
          <section className="modal__ingredients">
            <h2 className="modal__ingredients-header"> Ingredients: </h2>
            {/*<ul className="modal__ingredients-list">{item.ingredients}</ul>*/}
          </section>
          <section className="modal__recipe">
            <h2 className="modal__recipe-header"> Directions: </h2>
            {/*<ul className="modal__recipe-directions">{item.directions}</ul>*/}
          </section>
          <section className="modal__tips">
            <h2 className="modal__tips-header">Tips:</h2>
            {/*<ul className="modal__tips-list">{item.tips}</ul>*/}
          </section>
        </div>
      </div>
    </>
  );
};

export default RecipeModal;
