import { useState } from 'react';

type Props = {
  descs: string[];
};

export function ImageDescription({ descs }: Props) {
  const [idx, setIdx] = useState<number>(0);

  return (
    <div>
      <p onClick={() => setIdx(idx < descs.length - 1 ? idx + 1 : 0)}>
        {descs[idx]}
      </p>
    </div>
  );
}
