import Title from '../Titulo/Title';

import Spinner from '../Spinner';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const GridFotos = dynamic(
  () => import('../gridFotosProfesionales/GridFotos'),
  { loading: Spinner }
);

export const Conocenos = () => {
  return (
    <>
      <Title altText='Click en la foto para ver la descripción'>
        Conocenos
      </Title>

      <Suspense fallback={<Spinner />}>
        <GridFotos />
      </Suspense>
    </>
  );
};

export default Conocenos;
