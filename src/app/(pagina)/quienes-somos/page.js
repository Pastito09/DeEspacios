import Title from '@/components/Titulo/Title';
import TextoQuienesSomos from '@/data/TextoQuienesSomos';

import Conocenos from '@/components/conocenos/Conocenos';
import Organizadas from '@/components/organizadas/Organizadas';
import Image from 'next/image';

export const QuienesSomos = () => {
  return (
    <>
      <Title>¿Quiénes somos?</Title>
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className=' col p-5 section-text'>
            <TextoQuienesSomos />
          </div>
          <div className='col-4 d-none d-md-block'>
            <Image
              className='img-fluid rounded mx-auto d-block'
              src='/Estructura DeEspacios.png'
              alt='Estructura del equipo'
              height={850}
              width={900}
              style={{ height: 700, width: 750 }}
              quality={100}
            />
          </div>
        </div>
        <Organizadas />
        <Conocenos />
      </div>
    </>
  );
};

export default QuienesSomos;
4;
