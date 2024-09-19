import './styles.css';
import Image from 'next/image';

export const TextoInicio = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-xxl-6 align-self-center text-center mt-1 contenedor'>
          <Image
            quality={100}
            className='object-fit-fill w-100'
            width={900}
            height={450}
            src='/deespacios.jpg'
            alt='home'
          />
        </div>
        <div className='col section-text'>
          <h2 className='text-start mb-3 fw-bold'>
            Bienvenidos al Equipo{' '}
            <span className='text-violet'>
              <em>DeEspacios</em>
            </span>
          </h2>
          <p className='text-start'>
            <span className='fw-semibold ms-5 text-violet'>
              DeEspacios
            </span>{' '}
            nace en el 2011, como producto del deseo de armar un
            equipo humano que acompañe a las personas que viven con
            una discapacidad y a sus familias de manera integral,
            respetuosa y cuidada.
          </p>
          <p>
            <span className='ms-5'>Nos</span> une la convicción de que
            trabajar con profesionalismo en salud mental, significa
            trabajar con el corazón, con compromiso y responsabilidad.
          </p>
          <div className='container'>
            <p className='text-start fst-italic'>
              “Creemos que los vínculos basados en el respeto, la
              confianza y la empatía, sanan. Trabajamos constantemente
              para abrir posibilidades, crear nuevos mundos, expandir
              los límites. Ir mas allá del diagnóstico para apostar al
              fortalecimiento de las capacidades de esa persona,
              habilitando la expresión de las emociones, generando
              espacios de participación y autodeterminación.”
            </p>
          </div>

          <p className='fw-semibold'>
            Somos personas formadas en Salud Mental, que trabajamos en
            y con la diversidad, ejerciendo prácticas saludables para
            el desarrollo óptimo de autonomía y transformación.
            Centrando nuestra mirada en la persona y su entorno.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextoInicio;
