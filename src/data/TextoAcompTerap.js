import Image from 'next/image';

export const TextoAcompTerap = () => {
  return (
    <>
      <p className='fs-5'>
        ¿Sabes qué es un acompañante terapéutico y cómo puede ayudar a
        alguien que lo necesita?.
      </p>{' '}
      <p>
        <span className='ms-3'>La</span> vida puede presentar desafíos
        que requieren apoyo y orientación adicional. Un acompañante
        terapéutico es un profesional capacitado que brinda apoyo
        emocional y asistencia a personas con necesidades específicas,
        como trastornos de salud mental, discapacidades o problemas de
        comportamiento.
      </p>
      <p>
        <span className='ms-3'>Por</span> medio de una relación de
        confianza, se propone generar, sostener y afianzar los
        recursos que le permitan a esa persona, el mayor grado de
        autonomía posible. Teniendo como eje y motor, la relación
        humana acompañante-acompañado, como medio e instrumento para
        lograr un estado personal y social de bienestar integral.
      </p>
      <div className='row'>
        <div className='col-2 text-center d-none d-md-block'>
          <Image
            className='img-fluid'
            src='/Logo equipo.png'
            width={450}
            height={450}
            alt='imagen admisiones'
          />
        </div>
        <div className='col'>
          <p>
            <em>
              Trabaja de manera directa con la persona y su entorno,
              en el lugar donde habita, y se desarrolla
              cotidianamente. Se puede realizar en el domicilio de
              residencia, en el centro terapéutico al que asiste, o en
              procesos de Internación en salud mental.
            </em>
          </p>
          <p>
            La premisa principal es que la persona logre el mayor
            grado de autodeterminación para desarrollarse en su vida
            con independencia, generando recursos para participar de
            actividades tanto de disfrute como terapéuticas.
          </p>
        </div>
      </div>
      <p>
        <span className='ms-3'>Potenciar</span> las habilidades y
        fortalezas, prestar voz al deseo de superarse y ayudar a la
        persona a desarrollar habilidades y estrategias para manejar
        sus desafíos cotidianos.
      </p>
      <p className='fs-5 mt-5'>
        Entre las actividades que puede proponer un acompañamiento,
        encontramos:
      </p>
      <ol className='fs-6 fw-medium'>
        <li>
          <em>Acompañamiento emocional:</em> Brindar apoyo y
          comprensión en momentos de estrés o crisis.
        </li>
        <li>
          <em>Desarrollo de Habilidades Sociales:</em> Generar
          recursos para desarrollar actividades de disfrute, salidas
          sociales, y actividades grupales.
        </li>
        <li>
          <em>Prestar Herramientas de Comunicación:</em> Facilitar la
          expresión de deseos, ansiedades y miedos. Poder ofrecer un
          ambiente propicio y contenedor, junto con medios
          alternativos de comunicación.
        </li>
        <li>
          <em>Actividades de la Vida Diaria:</em> Establecimiento de
          rutinas y hábitos saludables. Posibilitar adquisiciones como
          uso de dinero, transporte, y manejo de situaciones en la vía
          pública.
        </li>
        <li>
          <em>Rehabilitación Cognitiva:</em> diseñar recursos y
          actividades para ayudar a personas con daño o disfunción
          cerebral a recuperar o compensar habilidades cognitivas
          afectadas.
        </li>
        <li>
          <em>Apoyo en la medicación:</em> Ayudar a la persona a
          recordar y tomar su medicación según lo prescrito.
        </li>
        <li>
          <em>Acompañar y sostener los espacios terapéuticos:</em> Se
          trabaja interdisciplinariamente para lograr adquisiciones
          mas profundas y duraderas.
        </li>
      </ol>
    </>
  );
};

export default TextoAcompTerap;
