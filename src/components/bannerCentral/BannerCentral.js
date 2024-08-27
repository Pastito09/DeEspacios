import { MapPin, Mail, Instagram, Map } from 'react-feather';

import Link from 'next/link';
import './styles.css';
import Image from 'next/image';

export const BannerCentral = () => {
  return (
    <div className='container-fluid text-center'>
      <div className='row align-items-center justify-content-center title-container'>
        <div className='col col-sm-6 mt-1 clearfix'>
          <h1 className='title'>
            <Image
              width={80}
              height={54}
              src='/logo.png'
              alt='logo'
              className='pe-2 img-fluid'
            />
            Espacio Psicológico Integral
          </h1>
        </div>
        <div className='col col-sm-6  mt-1 '>
          <div className='row  row-direction'>
            <div className='col-sm-4 col align-self-center'>
              <Link
                className='link-redes'
                href='https://maps.app.goo.gl/i3t9vxi5PmbxPKkBA'
                target='_blank'
              >
                <MapPin className='me-2' />
                <Map /> <span> Pueyrredón 1591 - Banfield Este</span>
              </Link>
            </div>

            <div className='col-sm-4 align-self-center col'>
              <Link
                href='mailto:deespacios@gmail.com'
                className='link-redes'
              >
                <Mail />
                <span> deespacios@gmail.com</span>
              </Link>
            </div>
            <div className='col-sm-4 col align-self-center'>
              <Link
                className='link-redes'
                href='https://instagram.com/deespacios.centroterapeutico'
                target='_blank'
              >
                <Instagram />
                <span> @deespacios.centroterapeutico</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCentral;
