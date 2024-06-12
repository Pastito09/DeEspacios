import React from 'react';

export const FormLayout = ({ children }) => {
  return (
    <div
      className='container text-center'
      style={{
        border: 'solid',
        borderRadius: 25,
        borderColor: 'grey',
      }}
    >
      <p className='h3'> Formulario Admisiones </p>
      {children}
    </div>
  );
};

export default FormLayout;
