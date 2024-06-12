import { biografias } from '@/data/Biografias/biografias';

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
              className='col-xs col-auto'
              id={foto.id}
              key={foto.id}
            >
              <Link href={`/quienes-somos/${foto.id}`}>
                <Image
                  height={250}
                  width={250}
                  src={foto.img}
                  alt={foto.name}
                  className='img-fluid img-thumbnail m-1'
                />
              </Link>
              <p>{foto.name.replace(/\(.*?\)/g, '')}</p>
              <p>{foto.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GridFotos;
