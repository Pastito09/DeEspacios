import Title from '@/components/Titulo/Title';
import TextoComoTrabajamos from '@/data/TextoComoTrabajamos';
import TextoDondeTrabaja from '@/data/TextoDondeTrabaja';
import TextoConsultoriosExt from '@/data/TextoConsultoriosExt';
import CustomContainer from '@/components/custom-container/CustomContainer';

export const ComoTrabajamos = () => {
  return (
    <>
      <Title>¿Cómo trabajamos?</Title>
      <CustomContainer>
        <TextoComoTrabajamos />
      </CustomContainer>

      <Title>¿Donde trabaja un Acompañante Terapéutico?</Title>
      <CustomContainer>
        <TextoDondeTrabaja />
      </CustomContainer>
      <Title>Consultorios Externos</Title>
      <CustomContainer>
        <TextoConsultoriosExt />
      </CustomContainer>
    </>
  );
};

export default ComoTrabajamos;
