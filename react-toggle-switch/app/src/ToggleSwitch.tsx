import { useState } from 'react';
import './ToggleSwitch.css';

type Props = {
  value: boolean;
  className: string;
};

export function ToggleSwitch({
  value = false,
  className = 'toggle-switch-size-default',
}: Props) {
  const [on, setOn] = useState(value);
  return (
    <div
      onClick={() => setOn(!on)}
      className={`toggle-switch ${className} ${on ? 'on' : ''}`}>
      <div className="toggle-switch-button"></div>
    </div>
  );
}
