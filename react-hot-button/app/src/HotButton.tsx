import { useState } from 'react';
import './HotButton.css';

type Props = {
  label: string;
};

export function HotButton({ label }: Props) {
  const [clicks, setClicks] = useState(0);

  function getTemperatureClass(): string {
    if (clicks < 3) return 'cold';
    if (clicks < 6) return 'cool';
    if (clicks < 9) return 'tepid';
    if (clicks < 12) return 'warm';
    if (clicks < 15) return 'hot';
    return 'nuclear';
  }

  const temperatureClass = getTemperatureClass();
  return (
    <div>
      <button
        onClick={() => setClicks(clicks + 1)}
        className={`hot-button ${temperatureClass}`}>
        {label}
      </button>
      <p>Clicks: {clicks}</p>
    </div>
  );
}
