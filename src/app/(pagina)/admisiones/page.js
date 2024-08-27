import Title from '@/components/Titulo/Title';
import FormularioAdmisiones from '@/components/formulario/Form';
import TextoAdmisiones from '@/data/TextoAdmisiones';

export const Admisiones = () => {
  return (
    <div>
      <Title>Admisiones</Title>
      <div className='container'>
        <div className='row '>
          <div className='col mt-3 mb-5 text-center'>
            <TextoAdmisiones />
          </div>
        </div>

        <div className='container'>
          <div className='row mt-5'>
            <FormularioAdmisiones />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admisiones;
