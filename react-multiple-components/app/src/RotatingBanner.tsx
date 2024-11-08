import { useState } from 'react';
import { Banner } from './Banner';
import { NavButton } from './NavButton';
import { Indicators } from './Indicators';
import './RotatingBanner.css';

type Props = {
  labels: string[];
};

export function RotatingBanner({ labels }: Props) {
  const count = labels.length;
  const [index, setIndex] = useState(0);

  return (
    <div className="container">
      <Banner label={labels[index]} />
      <NavButton
        onClick={() => setIndex((x) => (x + count - 1) % count)}
        label="Prev"
      />
      <Indicators onClick={setIndex} count={count} index={index} />
      <NavButton
        onClick={() => setIndex((x) => (x + 1) % count)}
        label="Next"
      />
    </div>
  );
}
