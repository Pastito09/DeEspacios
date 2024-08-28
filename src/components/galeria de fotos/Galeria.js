import Title from '../Titulo/Title';
import FotosCarrouselGaleria from './FotosCarrouselGaleria';

export const Galeria = () => {
  return (
    <div className='container-fluid '>
      <Title>Galería de fotos</Title>
      <div className='fs-5 text-center mt-3 section-text'>
        <p>
          Compartimos algunas fotos de los momentos de trabajo en
          equipo, y de los consultorios, para que nos conozcas más de
          cerca.
        </p>
        <p>
          Podes acercarte cuando quieras, estaremos felices de
          recibirte y ayudarte en lo que necesites.
        </p>
      </div>
      <div className='container text-center mt-5'>
        <div className='row'>
          <FotosCarrouselGaleria />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
