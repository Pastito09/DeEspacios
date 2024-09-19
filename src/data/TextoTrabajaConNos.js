import Image from 'next/image';
import Link from 'next/link';

export const TextoTrabajaConNos = () => {
  return (
    <div className='mt-2'>
      <p>
        Sumate a nuestro equipo de acompañantes terapéuticos y forma
        parte de un equipo comprometido con el bienestar integral de
        nuestros acompañados. Buscamos profesionales apasionados y
        dedicados que deseen hacer una diferencia en la vida de los
        demás.
      </p>
      <div className='ms-5 mt-4'>
        <em>
          Cada encuentro, cada palabra y cada gesto tiene el poder de
          transformar vidas.
        </em>
      </div>
      <br />
      <p>
        Nuestro compromiso es el pilar que sostiene el crecimiento de
        nuestros pacientes. En{' '}
        <span className='fw-semibold text-violet'>DeEspacios</span>{' '}
        trabajamos con mucho corazón y queremos que quienes sean parte
        de nuestro equipo sientan el mismo amor por la función,
        compromiso y responsabilidad. Nuestro objetivo es generar un
        ambiente de trabajo amable y enriquecedor, generar lazos de
        confianza y sostén compartido.
      </p>
      <br />
      <div className='row align-items-center'>
        <div className='col-3 text-center d-none d-md-block'>
          <Image
            className='img-fluid'
            src='/equipo de amor.jpg'
            height={250}
            width={250}
            alt='Imagen trabajando en conjunto'
          />
        </div>
        <div className='col col-md-9 text-center text-md-start'>
          <p>
            <em>
              Si estás interesado en ejercer la función de acompañante
              terapéutico con compromiso y fidelidad, y deseas
              trabajar en un ambiente colaborativo y de apoyo,
              envíanos tu CV. Estamos buscando personas que compartan
              nuestros valores y estén dispuestas a crecer con
              nosotros.{' '}
            </em>
          </p>
        </div>
      </div>
      <hr />
      <p className='mt-4 mb-4 text-center fst-italic'>
        Al unirte a nuestro equipo, podrás:
      </p>
      {/* <p className='fst-italic lh-lg mb-4'> */}
      <ul>
        <li>Hacer una diferencia real en la vida de los demás.</li>
        <li>
          Desarrollar tus habilidades y conocimientos en un ambiente
          de apoyo y sostén compartido.
        </li>
        <li>
          Aprender en el intercambio constante en los grupos de
          WhatsApp de los tratamientos en los que estés trabajando
        </li>
        <li>
          Acceder a reuniones y supervisiones individuales y grupales,
          a demanda según la necesidad del acompañante y del caso
        </li>
      </ul>

      <hr />
      <p className='mt-4'>
        <span className='fw-semibold text-violet'>DeEspacios</span> se
        amplía constantemente, e incorporamos acompañantes para cubrir
        diferentes zonas de Buenos Aires, y en distintas franjas
        horarias. Por eso, no dudes en enviarnos tu cv, si te has
        capacitado, y crees que estás listo/a para ejercer la función.
      </p>
      <h3>
        <Link href='mailto:deespaciosrecursoshumanos@gmail.com'>
          deespaciosrecursoshumanos@gmail.com
        </Link>
      </h3>
      <p className='fw-semibold mt-4'>Gracias!</p>
    </div>
  );
};

export default TextoTrabajaConNos;
