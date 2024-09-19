import Image from 'next/image';

export const TextoAdmisiones = () => {
  return (
    <div className='container-fluid text-start'>
      <div className='section-text'>
        <h4 className='mb-3'>
          En esta sección, te contamos cómo son los pasos para
          solicitar Acompañamiento Terapéutico.
        </h4>
        <ol>
          <li>
            Una vez establecido el contacto, evaluamos si el servicio
            de acompañamiento terapéutico es lo más indicado para la
            necesidad del caso.
          </li>
          <li>Coordinamos una entrevista de admisión.</li>
          <li>
            En esta entrevista conversamos sobre las características
            del cuadro, y realizamos una evaluación para determinar el
            nivel de apoyo necesario e identificar objetivos
            terapéuticos.
          </li>
          <li>
            Creación de un plan personalizado basado en las
            necesidades y objetivos de la persona.
          </li>
          <li>
            Se arma el equipo de acompañantes según el perfil de la
            persona y las particularidades del tratamiento. Se
            organiza el cronograma de días y horarios.
          </li>
          <li>Se da inicio al tratamiento.</li>
        </ol>
        <div className='row m-1 align-items-center'>
          <div className='col-2 d-none d-md-block'>
            <Image
              className='img-fluid'
              src='/equipo rompecabezas.jpg'
              width={350}
              height={350}
              alt='imagen admisiones'
            />
          </div>
          <div className='col '>
            <p>
              Si el acompañamiento se solicita mediante obra social o
              prepaga, se recaba la documentación necesaria y se
              entrega en formato papel o digital, para que el familiar
              pueda presentarlo. Es importante saber cuáles son los
              requisitos, y la figura prestacional con la que la
              prestadora autorizará el tratamiento. Por eso
              solicitamos que al momento de la entrevista, contar con
              esta información.
            </p>
          </div>
        </div>
        <p>
          Tenemos una planilla de datos, un consentimiento informado,
          y un documento donde se explica cómo es el mecanismo
          administrativo para la presentación de la documentación, y
          la facturación mensual.
        </p>
        <div className='container mt-5 mb-5'>
          <p>
            <strong>
              <u>Importante:</u>
            </strong>{' '}
            Para comenzar el proceso de admisión para Acompañamiento
            Terapéutico (AT), es necesario la indicación de un
            profesional. Esto es así, porque al ser tratamiento en
            Salud Mental, es fundamental trabajar en equipo y contar
            con la supervisión de quien dirige el tratamiento. Puede
            ser{' '}
            <em>
              Médica/o Pediatra, Neuróloga/o, Psicóloga/o, Terapista
              Ocupacional, Psiquiatra, Asistente Social, etc.
            </em>{' '}
            Es importante que ésta recomendación te la den por{' '}
            <u>escrito</u>.
          </p>
        </div>
        <div
          style={{ border: 'solid', borderRadius: 5 }}
          className='m-2 p-2'
        >
          “Solicito ……. <em>(cantidad de horas por día)</em> horas de
          Acompañamiento Terapéutico, ….. <em>(cantidad de días)</em>{' '}
          veces a la semana, para el período de …….{' '}
          <em>(mes del inicio del AT)</em> a Diciembre del año……
          <em>(año vigente)</em> para el paciente……{' '}
          <em>(apellido y nombre del beneficiario)</em> afiliado
          número…. ”
        </div>
        <div className='mt-5 mb-5'>
          <p>
            Además, en otra órden se deben indicar los motivos por los
            cuales se pide acompañamiento y los objetivos. Un ejemplo
            puede ser:
          </p>
        </div>
        <div
          style={{ border: 'solid', borderRadius: 5 }}
          className='m-2 p-2'
        >
          <p>
            (…) para trabajar el desarrollo de autonomía, actividades
            de la vida Diaria, Habilidades sociales, etc”
          </p>
        </div>
        <div className='mt-5 text-center'>
          <p className='fw-medium'>
            Dejanos tus datos y nos ponemos en contacto con vos.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TextoAdmisiones;
