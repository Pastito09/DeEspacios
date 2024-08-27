import Title from '@/components/Titulo/Title';
import TextoAcompTerap from '@/data/TextoAcompTerap';
import CustomContainer from '@/components/custom-container/CustomContainer';


export const AcompañamientoTerapeutico = () => {
  return (
    <>
      <Title>Acompañamiento Terapéutico</Title>
      <CustomContainer colBreakPoint='8'>
        <TextoAcompTerap />
      </CustomContainer>
    </>
  );
};

export default AcompañamientoTerapeutico;
