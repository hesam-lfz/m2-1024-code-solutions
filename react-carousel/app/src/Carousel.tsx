import { useEffect, useCallback, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaDotCircle } from 'react-icons/fa';
import './Carousel.css';

export interface ImageInfo {
  src: string;
  alt: string;
}

type Props = {
  imageUrls: ImageInfo[];
};

type CarouselImagesProps = {
  imageUrls: ImageInfo[];
  index: number;
};

type CarouselDotsProps = {
  count: number;
  index: number;
  navigateToIndex: (idx: number) => void;
};

type CarouselMainProps = {
  imageUrls: ImageInfo[];
  index: number;
  navigateToNext: (isNext: boolean) => void;
};

export function Carousel({ imageUrls }: Props) {
  const [index, setIndex] = useState(0);
  const count = imageUrls.length;

  const navigateToNext = useCallback(
    (isNext: boolean) => setIndex((index + (isNext ? 1 : -1) + count) % count),
    [index, count]
  );

  const navigateToIndex = useCallback((idx: number) => setIndex(idx), []);

  useEffect(() => {
    const timeoutHandle = setTimeout(() => navigateToNext(true), 3000);
    return () => clearTimeout(timeoutHandle);
  }, [navigateToNext]);

  return (
    <div className="carousel">
      <CarouselMain
        imageUrls={imageUrls}
        index={index}
        navigateToNext={navigateToNext}
      />
      <CarouselDots
        count={count}
        index={index}
        navigateToIndex={navigateToIndex}
      />
    </div>
  );
}

export function CarouselMain({
  imageUrls,
  index,
  navigateToNext,
}: CarouselMainProps) {
  return (
    <div className="carousel-main">
      <h1 className="nav-button" onClick={() => navigateToNext(false)}>
        <FaChevronLeft />
      </h1>
      <CarouselImages imageUrls={imageUrls} index={index} />
      <h1 className="nav-button" onClick={() => navigateToNext(true)}>
        <FaChevronRight />
      </h1>
    </div>
  );
}

export function CarouselImages({ imageUrls, index }: CarouselImagesProps) {
  return (
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
  );
}

export function CarouselDots({
  count,
  index,
  navigateToIndex,
}: CarouselDotsProps) {
  return (
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
  );
}
