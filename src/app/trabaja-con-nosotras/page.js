import Title from '@/components/Titulo/Title';
import TextoTrabajaConNos from '@/data/TextoTrabajaConNos';
import CustomContainer from '@/components/custom-container/CustomContainer';

export const TrabajaConNosotras = () => {
  return (
    <div>
      <Title>Trabajá con Nosotras</Title>
      <CustomContainer colBreakPoint='6'>
        <TextoTrabajaConNos />
      </CustomContainer>
    </div>
  );
};

export default TrabajaConNosotras;
