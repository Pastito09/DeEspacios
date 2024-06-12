import Title from '@/components/Titulo/Title';
import TextoAcompTerap from '@/data/TextoAcompTerap';
import TextoAtProfesional from '@/data/TextoAtProfesional';
import CustomContainer from '@/components/custom-container/CustomContainer';

export const AcompañamientoTerapeutico = () => {
  return (
    <>
      <Title>¿Qué es el acompañamiento terapéutico?</Title>
      <CustomContainer>
        <TextoAcompTerap />
      </CustomContainer>
      <Title>
        ¿En qué casos se solicita un Acompañante Terapéutico?
      </Title>
      <CustomContainer>
        <TextoAtProfesional />
      </CustomContainer>
    </>
  );
};

export default AcompañamientoTerapeutico;
