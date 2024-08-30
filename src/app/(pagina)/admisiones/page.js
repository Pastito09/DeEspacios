import Title from '@/components/Titulo/Title';
import CustomContainer from '@/components/custom-container/CustomContainer';
import FormularioAdmisiones from '@/components/formulario/Form';
import TextoAdmisiones from '@/data/TextoAdmisiones';

export const Admisiones = () => {
  return (
    <div>
      <Title>Admisiones</Title>

      <CustomContainer colBreakPoint='8'>
        <TextoAdmisiones />
      </CustomContainer>

      <div className='container'>
        <div className='row mt-5'>
          <FormularioAdmisiones />
        </div>
      </div>
    </div>
  );
};

export default Admisiones;
