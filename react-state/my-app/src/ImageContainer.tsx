import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  srcs: string[];
};

export function ImageContainer({ srcs }: Props) {
  const [idx, setIdx] = useState<number>(0);

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={srcs[idx]}
          alt="space-image"
          onClick={() => setIdx(idx < srcs.length - 1 ? idx + 1 : 0)}
        />
      </div>
    </div>
  );
}
