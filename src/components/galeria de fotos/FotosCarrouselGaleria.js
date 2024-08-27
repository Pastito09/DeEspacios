'use client';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

export const FotosCarrouselGaleria = () => {
  return (
    <Carousel fade variant='dark' indicators={false}>
      <Carousel.Item className='text-center'>
        <Image
          src={IMAGEN[0].src}
          alt={IMAGEN[0].alt}
          height={450}
          width={450}
          quality={100}
          className='w-75'
        />
      </Carousel.Item>
      {IMAGENES.map(({ src, alt, key }) => (
        <Carousel.Item key={key}>
          <Image
            src={src}
            alt={alt}
            quality={100}
            height={450}
            width={450}
            className='img-fluid'
          />
        </Carousel.Item>
      ))}
      <Carousel.Item className='text-center'>
        <Image
          src={IMAGEN[1].src}
          alt={IMAGEN[1].alt}
          height={450}
          width={450}
          quality={100}
          className='w-75'
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default FotosCarrouselGaleria;

const IMAGEN = [
  {
    alt: 'Foto Entrada al consultorio',
    src: '/galeria de fotos/01.jpg',
    key: 1,
  },
  {
    alt: 'Fachada consultorio 2',
    src: '/galeria de fotos/15.jpg',
    key: 15,
  },
];

const IMAGENES = [
  {
    alt: 'Foto salón',
    src: '/galeria de fotos/02.jpg',
    key: 2,
  },
  {
    alt: 'Foto salón 2',
    src: '/galeria de fotos/03.jpg',
    key: 3,
  },
  {
    alt: 'Foto consultorio',
    src: '/galeria de fotos/04.jpg',
    key: 4,
  },
  {
    alt: 'Foto consultorio 2',
    src: '/galeria de fotos/05.jpg',
    key: 5,
  },
  {
    alt: 'Foto reunion Acompañantes Terapeuticos',
    src: '/galeria de fotos/06.jpg',
    key: 6,
  },
  {
    alt: 'Fotos integrantes del grupo 1',
    src: '/galeria de fotos/07.jpg',
    key: 7,
  },
  {
    alt: 'Fotos integrantes del grupo 2',
    src: '/galeria de fotos/08.jpg',
    key: 8,
  },
  {
    alt: 'Fotos integrantes del grupo 3',
    src: '/galeria de fotos/09.jpg',
    key: 9,
  },
  {
    alt: 'Fotos integrantes del grupo 4',
    src: '/galeria de fotos/10.jpg',
    key: 10,
  },
  {
    alt: 'Fotos integrantes del grupo 5',
    src: '/galeria de fotos/11a.jpg',
    key: 11,
  },
  {
    alt: 'Fotos integrantes del grupo 6',
    src: '/galeria de fotos/12.jpg',
    key: 12,
  },
  {
    alt: 'Cartel Consultorio',
    src: '/galeria de fotos/13a.jpg',
    key: 13,
  },
  {
    alt: 'Fachada consultorio',
    src: '/galeria de fotos/14.jpg',
    key: 14,
  },
];
