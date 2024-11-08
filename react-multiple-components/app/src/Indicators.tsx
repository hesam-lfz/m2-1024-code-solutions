type Props = {
  count: number;
  index: number;
  onClick: (i: number) => void;
};

export function Indicators({ count, index, onClick }: Props) {
  return (
    <div>
      {[...Array(count).keys()].map((i) => (
        <button
          key={String(i)}
          className={i === index ? 'selected' : ''}
          onClick={() => onClick(i)}>
          {String(i)}
        </button>
      ))}
    </div>
  );
}
