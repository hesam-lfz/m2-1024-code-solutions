import { useRef, useState } from 'react';
import { Popup } from './Popup';
import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Pop up!
      </button>
      <p>This exercise teaches how to create a popup menu.</p>
      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        opacity={0.1}
        onClose={() => setIsOpen(false)}>
        <div className="menu-wrapper">
          <ul className="menu">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
          </ul>
        </div>
      </Popup>
      <p>It also discusses ways to generalize a component for maximum reuse.</p>
    </>
  );
}

/* Note:
 * If you want to pass clicks on to the other elements on the page and still dismiss
 * the popup when they click, you can do the following:
 * In the button, instead of listening to onClick, listen to onFocus and onBlur.
 * When the button receives focus (the user clicks it) then setIsOpen(true);
 * when the button loses focus (the user clicks outside the button) then setIsOpen(false);
 *
 * Then, in Popup, only render the shade div if opacity is not equal to 0. (Or, alternatively,
 * only render the shade if `onClose` is defined.)
 */
