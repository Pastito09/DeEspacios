import { MapPin, Mail, Instagram, Map } from 'react-feather';

import Link from 'next/link';
import './styles.css';

export const BannerCentral = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center title-container'>
        <div className='col col-sm-6 mt-1'>
          <h1 className='title'>
            <img src='/logo.png' alt='logo' className='icon pe-2' />
            Espacio Psicológico Integral
          </h1>
        </div>
        <div className='col text-center  mt-1'>
          <Link
            href='https://maps.app.goo.gl/i3t9vxi5PmbxPKkBA'
            target='_blank'
          >
            <MapPin className='me-2' />
            <Map />
            <p className=''>Pueyrredón 1591 - Banfield Este</p>
          </Link>
        </div>
        <div className='col text-center mt-1'>
          <Link href='mailto:deespacios@gmail.com'>
            <Mail />
            <p>deespacios@gmail.com</p>
          </Link>
        </div>
        <div className='col text-center mt-1'>
          <Link
            className=''
            href='https://instagram.com/deespacios.centroterapeutico'
            target='_blank'
          >
            <Instagram className='' />
            <p>@deespacios.centroterapeutico</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerCentral;
