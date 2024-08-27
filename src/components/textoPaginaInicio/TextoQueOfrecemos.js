import { Minus } from 'react-feather';

export const TextoQueOfrecemos = () => {
  return (
    <>
      <div
        className='container-fluid mt-2 section-text'
        style={{ backgroundColor: '#e9e9e9' }}
      >
        <div className='h3 mb-3 ' style={{ color: '#3b3a3a' }}>
          <strong>
            {' '}
            * <u>¿Qué Ofrecemos?</u> *
          </strong>
        </div>
        <div>
          <p>
            <Minus size={10} />{' '}
            <span className='fw-semibold'>
              *Acompañamiento Terapéutico*:
            </span>{' '}
            Apoyo personalizado y profesional para personas con
            discapacidades y sus familias.
          </p>
        </div>
        <div>
          <p>
            <Minus size={10} />{' '}
            <span className='fw-semibold'>
              *Atención Psicológica y Psicopedagógica*:
            </span>{' '}
            Un espacio individual, de escucha respetuosa y reflexión,
            para trabajar todo tipo de problemáticas, y la elaboración
            de angustias, ansiedades, miedos, e inhibiciones.
          </p>
        </div>
        <div>
          <p>
            <Minus size={10} />{' '}
            <span className='fw-semibold'>
              *Talleres y Actividades*:
            </span>{' '}
            Espacios de aprendizaje y crecimiento para fomentar el
            bienestar y la integración.
          </p>
        </div>
        <div>
          <p>
            <Minus size={10} />{' '}
            <span className='fw-semibold'>
              *Asesoramiento Familiar*:
            </span>{' '}
            Guía y orientación para afrontar desafíos cotidianos y
            mejorar la calidad de vida.
          </p>
        </div>
        <div className='h3 mb-3 mt-4 ' style={{ color: '#3b3a3a' }}>
          <strong>
            * <u>Nuestro compromiso</u> *
          </strong>
        </div>
        <div className='container-fluid'>
          <p>
            Nos comprometemos a crear un espacio inclusivo donde cada
            persona pueda sentirse comprendida y apoyada. En{' '}
            <span className='text-violet fw-semibold'>
              DeEspacios
            </span>
            , creemos que cada familia merece un acompañamiento que
            inspire confianza y sea motivo de orgullo y esperanza.
            Somos Equipo{' '}
            <span className='text-violet fw-semibold'>
              DeEspacios
            </span>
            , un grupo de personas que continúa creciendo profesional
            y humanamente. Aprendemos en el trabajo con otros y en
            intercambio constante.
          </p>
        </div>
      </div>
    </>
  );
};

export default TextoQueOfrecemos;
