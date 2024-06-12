import './styles.css';
import Image from 'next/image';

export const TextoInicio = () => {
  return (
    <div className='row'>
      <div className=' col text-start '>
        <div className='img-container'>
          <Image
            className='m-1'
            width={900}
            height={450}
            src='/portada.jpg'
            alt='home'
          />
        </div>
      </div>
      <div className='col section-text'>
        <h2 className='text-start mb-3'>¿Quiénes somos?</h2>
        <p className='text-start'>
          <span className='fw-semibold text-violet'>DeEspacios</span>{' '}
          nace en el 2010, y desde entonces acompañamos a mas de 80
          familias. La confianza y el trabajo en equipo son lo que nos
          sostiene desde hace mas de 12 años. Buscamos revolucionar la
          forma de trabajar en salud, con la convicción de que se
          trata de una construcción, un proceso relacional y en
          movimiento.
        </p>
        <p className='text-start fst-italic'>
          Somos un equipo que continúa creciendo profesional y
          humanamente. Aprendemos del trabajo con otros y en el
          intercambio constante.
        </p>
      </div>
    </div>
  );
};

export default TextoInicio;
