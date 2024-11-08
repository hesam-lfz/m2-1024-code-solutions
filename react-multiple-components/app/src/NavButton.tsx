type Props = {
  label: string;
  onClick: () => void;
};

export function NavButton({ label, onClick }: Props) {
  return <button onClick={onClick}>{label}</button>;
}
