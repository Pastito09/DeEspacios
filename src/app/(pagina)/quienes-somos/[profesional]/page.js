import Title from '@/components/Titulo/Title';
import BioProfesionales from '@/components/bio-profesionales/BioProfesionales';
import getBioById from '@/helpers/getBioById';
import React from 'react';

export const Profesionales = ({ params }) => {
  const { text, name, img, text2, id } = getBioById(
    params.profesional
  );
  return (
    <>
      <Title>{name.replace(/\(.*?\)/g, '')}</Title>
      <BioProfesionales
        text={text}
        text2={text2}
        img={img}
        name={name}
        id={id}
      />
    </>
  );
};

export default Profesionales;
