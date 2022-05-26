function ButtonSubmitForm({ popupName, buttonText, isValid }) {
  return (
    <button
      className={`popup__saved-btn ${popupName === "delete-card"
        ? '' : !isValid ? 'popup__saved-btn_disabled' : ''}`}
      type="submit"
      aria-label={`${popupName}_button`}
      disabled={popupName === "delete-card" ? false : isValid ? false : true}>
      {buttonText}
    </button>
  );
}

export default ButtonSubmitForm;