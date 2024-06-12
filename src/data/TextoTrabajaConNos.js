import Link from 'next/link';

export const TextoTrabajaConNos = () => {
  return (
    <div className=''>
      <p>
        Te invitamos a que nos envíes tu CV con Nombre, Apellido y
        Profesión al siguiente mail contándonos tu búsqueda y
        objetivos.
      </p>
      <h3>
        <Link href='mailto:deespacios@gmail.com'>
          {' '}
          deespacios@gmail.com
        </Link>
      </h3>
      <p>Gracias!</p>
    </div>
  );
};

export default TextoTrabajaConNos;
