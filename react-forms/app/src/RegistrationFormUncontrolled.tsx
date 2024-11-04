// import { useState } from 'react';
import { FormEvent } from 'react';
import './RegistrationFormUncontrolled.css';

/*
interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}
  */

type Props = {
  label: string;
};

export function RegistrationFormUncontrolled({ label }: Props) {
  // const [clicks, setClicks] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget as HTMLFormElement;
    /*
    const formInputs = formElement.children as FormElements;
    console.log(formInputs.username.value);
    console.log(formInputs.password.value);
    */
    const formData = new FormData(formElement);
    console.log(formData);
    console.log(Object.fromEntries(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input name="username" type="text"></input>
      <label htmlFor="password">Password:</label>
      <input name="password" type="password"></input>
      <button>{label}</button>
    </form>
  );
}
