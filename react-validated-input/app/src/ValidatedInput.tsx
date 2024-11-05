import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface Props {
  label: string;
  initValue?: string;
}

const message1 = 'A password is required';
const message2 = 'Password is too short';

export function ValidatedInput({ label, initValue = '' }: Props) {
  const [value, setValue] = useState(initValue);
  let message = message1;
  function checkValue() {
    const len = value.length;
    message = len === 0 ? message1 : message2;
    return value.length >= 8;
  }
  const validated = checkValue();
  return (
    <div className="container">
      <label htmlFor="username">{label}:</label>
      <div className="row">
        <input
          name="username"
          type="text"
          value={value}
          autoFocus={true}
          onChange={(event) => setValue(event.target.value)}></input>
        <h1 className="input-mark">
          {validated ? (
            <span className="green">
              <FaCheck />
            </span>
          ) : (
            <span className="red">
              <FaTimes />
            </span>
          )}
        </h1>
      </div>
      <p className="message">{validated ? '' : message}</p>
    </div>
  );
}
