import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaDotCircle } from 'react-icons/fa';
import './Carousel.css';

export interface ImageInfo {
  src: string;
  alt: string;
}

type Props = {
  imageUrls: ImageInfo[];
};

export function Carousel({ imageUrls }: Props) {
  const [index, setIndex] = useState(0);
  const count = imageUrls.length;

  function navigateToNext(isNext: boolean) {
    setIndex((index + (isNext ? 1 : -1) + count) % count);
  }

  function navigateToIndex(idx: number) {
    setIndex(idx);
  }

  return (
    <div className="carousel">
      <div className="carousel-main">
        <h1 className="nav-button" onClick={(e) => navigateToNext(e, false)}>
          <FaChevronLeft />
        </h1>
        <div>
          {imageUrls.map((i, idx) => {
            return (
              <img
                key={'img-' + idx}
                src={i.src}
                alt={i.alt}
                className={idx === index ? 'current-image' : ''}
              />
            );
          })}
        </div>
        <h1 className="nav-button" onClick={() => navigateToNext(true)}>
          <FaChevronRight />
        </h1>
      </div>
      <div className="carousel-nav-dots">
        {[...Array(count).keys()].map((i) => (
          <span
            key={'nav-dot-' + i}
            className={'nav-dot' + (i === index ? ' current-dot' : '')}
            onClick={() => navigateToIndex(i)}>
            <FaDotCircle />
          </span>
        ))}
      </div>
    </div>
  );
}
