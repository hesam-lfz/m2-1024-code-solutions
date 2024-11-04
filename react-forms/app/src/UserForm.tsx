import { useState, FormEvent } from 'react';
import './RegistrationFormUncontrolled.css';

type User = {
  username: string;
  password: string;
};

type Props = {
  user?: User;
};

export function UserForm({ user }: Props) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');

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
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}></input>
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}></input>
      <button>Submit</button>
    </form>
  );
}
