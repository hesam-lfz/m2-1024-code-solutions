import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Baz';
const imageSrc = '/starry-sky.jpeg';
const imageCaption = 'A beautiful Image of Space';
const imageDescription = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        incidunt sit dolorum accusantium sapiente reiciendis maxime dolores
        ullam delectus, commodi placeat eveniet, quam voluptates facere et
        magnam architecto quaerat velit voluptas rerum quos asperiores quis in!
        Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero.
        Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt?
        Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi
        ipsum, dicta sunt laborum similique repellat?`;
const buttonTitle = 'Clickee!';

export default function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imageSrc} />
      <ImageCaption text={imageCaption} />
      <ImageDescription text={imageDescription} />
      <ButtonContainer text={buttonTitle} />
    </>
  );
}
