import { biografias } from '@/data/Biografias/biografias';
import './styles.css';

import Link from 'next/link';
import Image from 'next/image';

export const GridFotos = () => {
  const ordenado = biografias.sort((a, b) => a.orden - b.orden);

  return (
    <>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          {ordenado.map((foto) => (
            <div
              className='col col-md-3 col-12'
              id={foto.id}
              key={foto.id}
            >
              <Link
                href={`/quienes-somos/${foto.id}`}
                className='text-decoration-none'
              >
                <div className='image-container'>
                  <Image
                    height={350}
                    quality={100}
                    width={250}
                    src={foto.img}
                    alt={foto.name}
                    className='img-thumbnail img-profesional img-fluid'
                  />
                </div>

                <div className='container text-container'>
                  <p className='nombre-profesional pt-2 text-violet texto-p fs-6 fw-semibold'>
                    {foto.name.replace(/\(.*?\)/g, '')}
                  </p>
                  <p className='rol-profesional texto-p pb-2'>
                    {foto.name
                      .match(/\(([^)]+)\)/g)
                      .map((c) => c.slice(1, -1))}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GridFotos;
