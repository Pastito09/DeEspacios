export const TextoAdmisiones = () => {
  return (
    <div className='container'>
      <div>
        <p>
          Para comenzar el proceso de admisión para Acompañamiento
          Terapéutico (AT), es necesario la indicación de un
          profesional que lo recomiende. Esto es así, porque como todo
          tratamiento en Salud Mental, el profesional que Guía el
          tratamiento debe estar al tanto para poder trabajar en
          conjunto con el equipo. Puede ser{' '}
          <em>
            Médica/o Pediatra, Neuróloga/o, Psicóloga/o, Terapista
            Ocupacional, Psiquiatra, Asistente Social, etc.
          </em>{' '}
          Es importante que ésta recomendación te la den por{' '}
          <u>escrito</u>. Si contás con Certificado Único de
          Discapacidad (CUD), la receta debe decir:
        </p>
      </div>
      <div
        style={{ border: 'solid', borderRadius: 5 }}
        className='m-2 p-2'
      >
        “Solicito ……. <em>(cantidad de horas por día)</em> horas de
        Acompañamiento Terapéutico, ….. <em>(cantidad de días)</em>{' '}
        veces a la semana, para el período de ……. a ……. del año…… para
        el paciente…… afiliado número…. ”
      </div>
      <div className='mt-5'>
        <p>
          Además, en otra receta deben estar los motivos por los
          cuales se pide acompañamiento y los objetivos. No hace falta
          que sea muy largo, un ejemplo puede ser:
        </p>
      </div>
      <div
        style={{ border: 'solid', borderRadius: 5 }}
        className='m-2 p-2'
      >
        <p>
          (…) para trabajar el desarrollo de autonomía, actividades de
          la vida Diaria, Habilidades sociales, etc”
        </p>
      </div>
      <div className='mt-5'>
        <p>
          Luego de la entrevista de Admisión, nosotras hacemos el Plan
          de Tratamiento, el Presupuesto, y armamos el equipo de
          acompañantes. Te vamos a pedir completes una ficha de datos,
          y vamos a entregarte un contrato de acuerdo y un
          consentimiento. Además, vamos a crear un grupo de WhatsApp
          entre los familiares y la coordinación, para poder estar en
          contacto constante. Dejanos tus datos y nos ponemos en
          contacto con vos.
        </p>
      </div>
    </div>
  );
};
export default TextoAdmisiones;
