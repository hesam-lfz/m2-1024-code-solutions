import { useState } from 'react';

type Props = {
  captions: string[];
};

export function ImageCaption({ captions }: Props) {
  const [idx, setIdx] = useState<number>(0);

  return (
    <div>
      <h3 onClick={() => setIdx(idx < captions.length - 1 ? idx + 1 : 0)}>
        {captions[idx]}
      </h3>
    </div>
  );
}
