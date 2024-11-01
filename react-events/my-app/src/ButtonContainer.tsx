type Props = {
  label: string;
  onClick: () => void;
};

export function ButtonContainer({ label, onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
