import { useState } from 'react';
import searchIcon from './assets/search-solid.svg';
import './SearchPanel.css';

type Props = {
  items: string[];
};

export function SearchPanel({ items }: Props) {
  const [results, setResults] = useState(items);

  function filterResults(event: React.ChangeEvent<HTMLInputElement>): void {
    const q = event.target.value;
    setResults(items.filter((i) => i.includes(q)));
  }

  return (
    <div className="search-panel">
      <div className="search-bar">
        <img src={searchIcon} />
        <input autoFocus placeholder="search" onChange={filterResults} />
      </div>
      <ul>
        {results.map((i, idx) => (
          <li key={'item-' + idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
