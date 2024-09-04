import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='d-flex flex-column-reverse align-items-center mt-5'>
      <div className='text-center row justify-content-center px-5 mx-5'>
        <h2 className='fs-1'>404</h2>
        <p className='fw-semibold fs-2'>Ups! lo sentimos mucho</p>
        <p className='fw-semibold'>Esta página no existe</p>
        <p className='fw-bold'>
          <span>Puedes regresar al </span>
          <Link href='/' className='text-decoration-none'>
            inicio
          </Link>
        </p>
      </div>
      <div className='px-5 mx-5'>
        <Image
          src='/favicon.png'
          alt='Logo'
          height={150}
          width={150}
          quality={100}
        />
      </div>
    </div>
  );
}
