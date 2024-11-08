type Props = {
  label: string;
};

export function Banner({ label }: Props) {
  return <h1>{label}</h1>;
}
