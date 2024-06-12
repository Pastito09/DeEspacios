'use client';
import React, { useRef } from 'react';
import FormLayout from './FormLayout';
import { sendMail } from '@/actions/sendMail';
import Toast from '../Toast/Toast';

export const FormularioAdmisiones = () => {
  const ref = useRef(null);

  const [isToastActive, setIsToastActive] = React.useState(false);

  return (
    <FormLayout>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          const resp = await sendMail(formData);
          console.log(typeof resp.id);
          if (typeof resp.id === 'string') {
            setIsToastActive(true);
          }
        }}
      >
        <div className='row align-items-center mb-2'>
          <div className='col-3 text-end me-2'>
            <label htmlFor='nombre' className='form-label'>
              Nombre y Apellido:
            </label>
          </div>
          <div className='col-6'>
            <input
              name='nombre'
              type='text'
              className='form-control'
              id='nombre'
              minLength={2}
              placeholder=''
              required
            />
          </div>
        </div>
        <div className='row align-items-center mb-2'>
          <div className='col-3 text-end me-2'>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
          </div>
          <div className='col-6'>
            <input
              name='email'
              type='email'
              className='form-control'
              id='email'
              placeholder=''
              required
            />
          </div>
        </div>
        <div className='row align-items-center mb-2'>
          <div className='col-3 text-end me-2'>
            <label htmlFor='telefono' className='form-label'>
              Telefono de contacto:
            </label>
          </div>
          <div className='col-6'>
            <input
              name='telefono'
              type='tel'
              className='form-control'
              id='telefono'
              placeholder=''
              required
              minLength={8}
            />
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-3 mt-1 text-end me-2'>
            <label htmlFor='mensaje' className='form-label'>
              Mensaje:
            </label>
          </div>

          <div className='col-6 ' style={{ height: '10em' }}>
            <textarea
              name='mensaje'
              className='h-100 form-control'
              id='mensaje'
              required
              minLength={4}
              placeholder='Recuerde tener a mano la información necesaria'
            />
          </div>
        </div>
        <button className='btn btn-primary mb-1'>Enviar</button>
      </form>
      {isToastActive && <Toast onClick={setIsToastActive} />}
    </FormLayout>
  );
};

export default FormularioAdmisiones;

{
  /* <div
            className='row align-items-center mb-2'
            style={{ border: 'solid' }}
          >
            <div className='col-3 text-end me-2'>
              <label for='hola' className='form-label'>
                hola
              </label>
            </div>
            <div className='col-6'>
              <input
                type=''
                className='form-control'
                id='hola'
                placeholder='hola'
              />
            </div>
          </div> */
}
