import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

import Image1 from './images:vids/iphone.jpg';
import Image2 from './images:vids/bravia.jpg';
import Image3 from './images:vids/alien.avif';


function Carousell() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={Image1} text="First slide" alt='Iphone' width={1300} height={550} />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2}  text="Second slide" alt='Bravia' width={1300} height={550}  />
        <Carousel.Caption>
          <h3>Best Deals on Sony TVs</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3}  text="Third slide" alt='Sale' width={1300} height={550}  />
        <Carousel.Caption>
          {/* <h3>j</h3> */}
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;