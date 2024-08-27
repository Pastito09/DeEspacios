'use client';
// import getBioById from '@/helpers/getBioById';
import React from 'react';
import { useRouter } from 'next/navigation';

export const BioProfesionales = ({
  id,
  text,
  text2 = '',
  img,
  name,
}) => {
  const router = useRouter();
  const onNavigateBack = () => {
    router.push(`/quienes-somos#${id}`);
  };
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-4'>
          <img
            src={img}
            alt={name}
            className='img-fluid animate__animated animate__fadeIn'
          />
        </div>
        <div className='col-8'>
          <h3 className='bio-title mt-5'>{name}</h3>
          <div className='container'>
            <p>{text}</p>
            <p>{text2}</p>
          </div>
          <br />
          <button
            className='btn btn-outline-secondary '
            onClick={onNavigateBack}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioProfesionales;
