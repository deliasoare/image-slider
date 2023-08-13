import pic1 from './assets/1.jpg';
import pic1Th from './assets/1prv.png'; 
import pic2 from './assets/2.jpeg' ;
import pic2Th from './assets/2prv.png';

import ImageSlider from './ImageSlider';
function App() {
  const images = [
    {
      src: pic1,
      thumbnail: pic1Th
    },
    {
      src: pic2,
      thumbnail: pic2Th
    },
  ]
  return (
    <>
      <ImageSlider images={images} thumbnails={false}/>
    </>
  )
}

export default App
