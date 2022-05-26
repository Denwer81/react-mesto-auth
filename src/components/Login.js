import React from 'react';
import ErrorMessage from './ErrorMessage';
import ButtonSubmitForm from './ButtonSubmitForm';

function Login({ title, onSubmitForm, handleInputData, inputData, isLoading }) {
  const popupName = "login";
  const email = React.useRef();
  const password = React.useRef();
  const form = React.useRef();
  const [isValid, setIsValid] = React.useState(false);

  function setValidityForm() {
    setIsValid(form.current.checkValidity());
  }

  function handleSubmitForm(evt) {
    evt.preventDefault();
    onSubmitForm();
  }

  return (
    <div className="popup__container" style={{ backgroundColor: '#000000', alignSelf: 'center'}}>
      <h2 className="popup__title" style={{ color: '#ffffff', alignSelf: 'center' }}>Вход</h2>
      <form
        ref={form}
        className={`popup__form popup__form_type_${popupName}`}
        name={`${popupName}-form`}
        noValidate
        onInput={setValidityForm}
        onSubmit={handleSubmitForm}
        style={{ backgrond: '#ffffff'}}>
        <input
          ref={email}
          onChange={handleInputData}
          className={`popup__input popup__input_${popupName}`}
          id={`${popupName}-email`}
          type="email"
          name={`${popupName}-email`}
          placeholder="Email"
          required />
        <ErrorMessage popupName={popupName} inputData={inputData} name="email" />
        <input
          ref={password}
          onChange={handleInputData}
          className={`popup__input popup__input_${popupName}`}
          id={`${popupName}-url-input`}
          type="password"
          name={`${popupName}-url`}
          placeholder="Пароль"
          minLength="3"
          maxLength="30"
          required />
        <ErrorMessage popupName={popupName} inputData={inputData} name="url" />
        <ButtonSubmitForm
          popupName={popupName}
          isValid={isValid}
          buttonText={isLoading ? "Вход..." : "Войти"}
          style={{backgrond: "#000000"}} />
      </form>
    </div>
  );
}

export default Login;