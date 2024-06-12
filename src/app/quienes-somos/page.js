import Title from '@/components/Titulo/Title';
import TextoQuienesSomos from '@/data/TextoQuienesSomos';
import Link from 'next/link';
import Conocenos from '@/components/conocenos/Conocenos';

export const QuienesSomos = () => {
  return (
    <>
      <Title>¿Quiénes somos?</Title>
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className=' col p-5 section-text'>
            <TextoQuienesSomos />
          </div>
          <div className='col-4'>
            <img
              className='img-directoras img-fluid rounded mx-auto d-block'
              src='/directoras.png'
              alt='directoras'
            />
            <ul className='nombres'>
              <Link href='/quienes-somos/bio-carolina'>
                <li>Lic. Nuria Carolina Gimenez </li>
              </Link>

              <Link href='/quienes-somos/bio-virginia'>
                <li>Lic. Virginia Zienka Hogan</li>
              </Link>
            </ul>
          </div>
        </div>
        <Conocenos />
      </div>
    </>
  );
};

export default QuienesSomos;
