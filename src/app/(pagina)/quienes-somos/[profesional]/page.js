import Title from '@/components/Titulo/Title';
import BioProfesionales from '@/components/bio-profesionales/BioProfesionales';
import getBioById from '@/helpers/getBioById';
import { notFound } from 'next/navigation';
import React from 'react';

export const Profesionales = ({ params }) => {
  const prof = getBioById(params.profesional);
  if (prof === undefined) {
    return notFound();
  }
  return (
    <>
      <Title>{prof.name.replace(/\(.*?\)/g, '')}</Title>
      <BioProfesionales
        text={prof.text}
        text2={prof.text2}
        img={prof.img}
        name={prof.name}
        id={prof.id}
      />
    </>
  );
};

export default Profesionales;
