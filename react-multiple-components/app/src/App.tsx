import { RotatingBanner } from './RotatingBanner';
import './App.css';

function App() {
  const labels = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  return (
    <>
      <RotatingBanner labels={labels} />
    </>
  );
}

export default App;
