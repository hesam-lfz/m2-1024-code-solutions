import { useState, FormEvent } from 'react';
import './RegistrationFormUncontrolled.css';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { username, password };
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        name="username"
        type="text"
        onChange={(event) => setUsername(event.currentTarget.value)}></input>
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        type="password"
        onChange={(event) => setPassword(event.currentTarget.value)}></input>
      <button>Submit</button>
    </form>
  );
}
