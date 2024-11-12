import './App.css';
import { ImageInfo, Carousel } from './Carousel';
import fushiguroImage from './assets/images/fushiguro.webp';
import inumakiImage from './assets/images/inumaki.webp';
import itadoriImage from './assets/images/itadori.webp';
import kugisakiImage from './assets/images/kugisaki.webp';
import pandaImage from './assets/images/panda.webp';
import zenInImage from './assets/images/zen-in.webp';

function App() {
  const images: ImageInfo[] = [
    {
      src: fushiguroImage,
      alt: 'Megumi Fushiguro',
    },
    {
      src: inumakiImage,
      alt: 'Toge Inumaki',
    },
    {
      src: itadoriImage,
      alt: 'Yuji Itadori',
    },
    {
      src: kugisakiImage,
      alt: 'Nobara Kugisaki',
    },
    {
      src: pandaImage,
      alt: 'Panda',
    },
    {
      src: zenInImage,
      alt: "Maki Zen'in",
    },
  ];
  return <Carousel imageUrls={images} />;
}

export default App;
