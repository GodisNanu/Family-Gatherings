const RsvpModal = () => 
{
  return (
<>
      <div class="modal" id="rsvpModal">
        <div class="modal__container">
          <button class="modal__close" id="closeModal"></button>
          <h2 class="modal__heading"> Join Us For Thanksgiving </h2>
          <form action="" class="modal__form" id="rsvpModalForm">
            <label class="modal__label">
              <input name="name" type="text" class="modal__input-text" placeholder="Your Name Goes Here" minlength="4" maxlength="28" required>
              <span class="modal__error" id=" name-input-error"></span>
            </label>
            <label class="modal__label">
              <input name = "recipe" placeholder = "Dish To Share" type="text" class="modal__input-text" id="recipe-input" minlength="5" maxlength="100" required>
            </label>
            <label class="modal__label"> How Many Additional Guests?
              <input class= "modal__input-number" type="number" id="numberInput" name="number" max="10" min="0"required>
            </label>
          </form>
        </div>
      </div>
    </>
    )
}