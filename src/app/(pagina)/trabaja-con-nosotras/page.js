import Title from '@/components/Titulo/Title';
import TextoTrabajaConNos from '@/data/TextoTrabajaConNos';
import CustomContainer from '@/components/custom-container/CustomContainer';
import Galeria from '@/components/galeria de fotos/Galeria';

export const TrabajaConNosotras = () => {
  return (
    <div>
      <Title>Trabajá con Nosotras</Title>
      <CustomContainer colBreakPoint='8'>
        <TextoTrabajaConNos />
      </CustomContainer>
    </div>
  );
};

export default TrabajaConNosotras;
