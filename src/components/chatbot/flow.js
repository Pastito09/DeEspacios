export const flow = {
  start: {
    message: 'Hola!',
    transition: { duration: 1000 },
    path: 'Presentacion',
  },
  Presentacion: {
    transition: { duration: 1000 },
    message:
      'DeEspacios es un equipo de acompañantes terapéuticas que trabajamos en domicilios y también realizamos apoyo externo a la integración en escuelas.',
    path: 'Pregunta',
  },
  Pregunta: {
    message: '¿Qué estás buscando?',
    options: [
      'Busco AT en Domicilio',
      'Busco AT en Integración en Escuelas',
    ],
    chatDisabled: true,
    path: (params) => {
      if (params.userInput === 'Busco AT en Domicilio') {
        return 'ContasConCertificado';
      } else {
        return 'ContasConCertificado';
      }
    },
  },
  ContasConCertificado: {
    message:
      'Para saber cómo ayudarte necesitamos saber si contás con Certificado de Discapacidad (CUD)?',
    chatDisabled: true,
    options: ['Sí', 'No'],
    path: (params) => {
      if (params.userInput === 'Sí') {
        return 'ConCertificado';
      } else {
        return 'SinCertificado';
      }
    },
  },
  ConCertificado: {
    message:
      'Los requisitos para autorizar la prestación empiezan con una orden médica indicando cantidad de horas diarias y un resumen del motivo del pedido.',
    transition: { duration: 1000 },
    path: 'ObraSocial',
  },
  ObraSocial: {
    chatDisabled: true,
    message: '¿Tenés obra social o prepaga?',
    options: ['Sí, tengo', 'No, quiero hacerlo de forma particular'],
    path: (params) => {
      if (params.userInput === 'Sí, tengo') {
        return 'ConObraSocial';
      } else {
        return 'SinObraSocial';
      }
    },
  },
  ConObraSocial: {
    transition: { duration: 1000 },
    message:
      'Si tenés obra social o prepaga te sugerimos averiguar cómo cubre la prestación. Puede ser como acompañante terapéutico, como prestación de apoyo a domicilio, o como modulo de apoyo a la integración. Segun cómo autorice la prestación, asi debe estar escrito en la orden médica.',
    path: 'ConObraSocial2',
  },
  ConObraSocial2: {
    chatDisabled: true,
    message:
      'Podés comunicarte con nosotras via mail a deespacios@gmail.com o al telefono +54 9 11 58254361 (Lic. Nuria Carolina Gimenez)',
    options: ['Via Mail', 'Por Telefono'],
    path: (params) => {
      let link = '';
      switch (params.userInput) {
        case 'Via Mail':
          link = 'mailto:deespacios@gmail.com';
          break;
        case 'Por Telefono':
          link = 'https://wa.me/1158254361';
          break;
        default:
          return 'chau';
      }

      setTimeout(() => {
        window.open(link);
      }, 2500);
      return 'chau';
    },
  },
  SinObraSocial: {
    message:
      'En caso de buscar cobertura particular podes comunicarte con nosotras via mail a deespacios@gmail.com o al telefono +54 9 11 58254361 (Lic. Nuria Carolina Gimenez)',
    chatDisabled: true,
    options: ['Via Mail', 'Por Telefono'],
    path: (params) => {
      let link = '';
      switch (params.userInput) {
        case 'Via Mail':
          link = 'mailto:deespacios@gmail.com';
          break;
        case 'Por Telefono':
          link = 'https://wa.me/1158254361';
          break;
        default:
          return 'chau';
      }

      setTimeout(() => {
        window.open(link);
      }, 2500);
      return 'chau';
    },
  },
  SinCertificado: {
    transition: { duration: 1000 },
    message:
      'Si no contas con CUD te invitamos a que te asesores antes de proseguir con nosotras, ya que al tener CUD tendrias todas las prestaciones cubiertas. Sino podes comunicarte y vemos que propuesta hacerte de acuerdo a tu demanda. Envianos mail a deeepsacios@gmail.com',
    path: 'SinCertificado2',
  },
  SinCertificado2: {
    transition: { duration: 1000 },
    message:
      'También te recomendamos ingresar a la pagina de la Agencia Nacional de Discapacidad (ANDIS), en la cual se te informan tus derechos y  programas que el Estado te ofrece para asegurar la inclusión social y el acceso a la salud: https://www.argentina.gob.ar/andis',
    path: 'end',
  },
  hola: {
    message: 'hola',
    transition: { duration: 1000 },
    path: 'start',
  },
  chau: {
    message:
      'Te dejamos también un documento de la Comisión para la Plena Participación e Inclusión de las Personas con Discapacidad (COPIDIS) del Gobierno de la Ciudad de Buenos Aires que explica de manera clara cómo realizar los trámites y cuáles son tus derechos. https://www.buenosaires.gob.ar/sites/gcaba/files/guia_de_informacion__para_personas_con_discapacidad_reducida_2016_1.pdf',
    transition: { duration: 1000 },
    path: 'end',
  },
  end: {
    message: 'Gracias por comunicarte con DeEspacios',
    options: ['Volver al inicio'],
    path: (params) => {
      if (params.userInput === 'Volver al inicio') {
        return 'start';
      } else {
        return 'end';
      }
    },
  },
};

export default flow;
