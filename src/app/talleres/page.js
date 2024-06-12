import React from 'react';

import Title from '@/components/Titulo/Title';
import TextoTalleres from '@/data/TextoTalleres';
import CustomContainer from '@/components/custom-container/CustomContainer';

import Form from '@/components/formulario/Form';

export const Talleres = () => {
  return (
    <>
      <Title>Talleres</Title>
      <CustomContainer>
        <TextoTalleres />
        <Form />
      </CustomContainer>
    </>
  );
};

export default Talleres;
