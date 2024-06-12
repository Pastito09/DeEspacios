'use client';

import Carousel from 'react-bootstrap/Carousel';
import './styles.css';

export const CarruselDeFotos = () => {
  return (
    <Carousel variant='dark' fade data-bs-ride='carousel'>
      <Carousel.Item>
        <img
          className='d-block w-100 banner'
          src='/banner2.png'
          alt='banner2'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 banner'
          src='/banner.png'
          alt='banner'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarruselDeFotos;
