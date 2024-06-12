import CustomTooltip from '@/components/components-contacto/CustomToolTip';
import Title from '@/components/Titulo/Title';
import { Facebook, Instagram, Mail, Phone } from 'react-feather';

export const Contacto = () => {
  return (
    <div className='main'>
      <Title>Contacto</Title>
      <div className='container text-center'>
        <div
          style={{ height: '25em' }}
          className=' row  align-items-center'
        >
          <div className='col'>
            <p className='h1'>
              <strong>Licenciada </strong>Nuria Carolina Gimenez{' '}
              <br />
              <small>(Directora)</small>
            </p>
          </div>
          <div className='col'>
            <p className='h1'>
              <strong>Licenciada</strong> Virginia Zienka Hogan <br />
              <small>(Directora)</small>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='h2 mb-5'>Comunicate con nosotras:</p>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <CustomTooltip
              webRef='https://www.instagram.com'
              contentText='Ir al Instagram'
            >
              <Instagram />
              DeEspacios
            </CustomTooltip>
          </div>
          <div className='col'>
            <CustomTooltip
              webRef='https://www.facebook.com/deespacios/'
              contentText='Ir al Facebook'
            >
              <Facebook /> DeEspacios
            </CustomTooltip>
          </div>
          <div className='col'>
            <CustomTooltip
              webRef='mailto:deespacios@gmail.com'
              contentText='Enviar un Email'
            >
              <Mail />
              Mail
            </CustomTooltip>
          </div>
          <div className='col'>
            <CustomTooltip
              webRef='https://wa.me/1158254361'
              contentText='Comunicate por Whatsapp'
            >
              <Phone />
              Whatsapp
            </CustomTooltip>
          </div>
        </div>
        <div className='row'>
          <p className='h3 mb-2'>Horarios:</p>
          <p className='h4'>Lunes a Viernes de 10 a 20hs.</p>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p className='h6'>Pueyrredón 1591, Banfield Este.</p>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.511485810865!2d-58.39231398826469!3d-34.74270617279173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2a1397641dd%3A0xffd7b2b32dc85e26!2sADN%2C%20Pueyrred%C3%B3n%201591%2C%20B1828%20Banfield%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716821680344!5m2!1ses-419!2sar'
            width='800'
            height='600'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
