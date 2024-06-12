'use client';

import './styles.css';
import Image from 'next/image';
import CustomTooltip from '../components-contacto/CustomToolTip';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'react-feather';
import Link from 'next/link';

export const PageFooter = () => {
  return (
    <footer className='footer mt-2'>
      <hr />
      <div
        className='footer-content container'
        style={{ border: 'solid', borderColor: 'green' }}
      >
        <div className='row text-center mt-2'>
          <div className='col mt-2'>
            <div>
              <Image
                src='/logo.png'
                className='img img-fluid'
                width={50}
                height={80}
                alt='logo'
              />
              <Image
                src='/logo2.png'
                className='img img-fluid'
                width={90}
                height={90}
                alt='logo2'
              />
            </div>
            <p className='h6 mt-2'>
              Horario de atención:
              <br /> Lunes a Viernes de 10 a 20hs.
            </p>
          </div>
          <div className='col mt-2'>
            <p className='h5'> Contacto</p>
            <div className='vstack gap-1'>
              <div className=''>
                <CustomTooltip
                  webRef='mailto:deespacios@gmail.com'
                  contentText='Enviar un Email'
                >
                  <Mail /> deespacios@gmail.com
                </CustomTooltip>
              </div>

              <div className=''>
                <CustomTooltip
                  webRef='https://wa.me/1158254361'
                  contentText='Comunicate por Whatsapp'
                >
                  <Phone />
                  Whatsapp
                </CustomTooltip>
              </div>
              <div className=''>
                <CustomTooltip
                  webRef='https://maps.app.goo.gl/i3t9vxi5PmbxPKkBA'
                  contentText='Ir al mapa'
                >
                  <MapPin />
                  Pueyrredón 1591 - Banfield Este. Bs.As. Argentina
                </CustomTooltip>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row justify-content-between'>
          <div className='col-auto '>
            <p className='h6 ms-3 '>
              <small>
                Desarrollado por{' '}
                <Link
                  href='https://patriciozienkahogan.netlify.app/'
                  target='_blank'
                >
                  Patricio Augusto Zienka Hogan
                </Link>
              </small>
            </p>
          </div>
          <div className='col-auto mb-1'>
            <CustomTooltip
              webRef='https://www.facebook.com/deespacios/'
              contentText='Ir al Facebook'
            >
              <Facebook />
            </CustomTooltip>
            <CustomTooltip
              webRef='https://www.instagram.com'
              contentText='Ir al Instagram'
            >
              <Instagram />
            </CustomTooltip>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
