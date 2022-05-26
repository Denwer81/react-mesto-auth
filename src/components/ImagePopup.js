import ButtonClosePopup from "./ButtonClosePopup";
import closeByOverlay from "../utils/closeByOverlay";
import UseCloseByEsc from "../utils/UseCloseByEsc";

function ImagePopup({ card, isOpen, closePopup }) {
  UseCloseByEsc(isOpen, closePopup);

  return (
    <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}
        onMouseDown={(evt) => closeByOverlay(evt, closePopup)}>
      <figure className="popup__figure">
        <img className="popup__image" src={card.link} alt={card.title} />
        <figcaption className="popup__image-text">{card.title}</figcaption>
        <ButtonClosePopup closePopup={closePopup} />
      </figure>
    </div>
  )
}

export default ImagePopup;