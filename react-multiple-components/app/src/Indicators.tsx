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
          className={i === index ? 'selected' : ''}
          onClick={() => onClick(i)}>
          {i}
        </button>
      ))}
    </div>
  );
}
