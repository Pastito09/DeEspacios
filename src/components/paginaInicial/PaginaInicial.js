import CarruselDeFotos from '../carrousel/CarruselDeFotos';

import BannerCentral from '../bannerCentral/BannerCentral';
import TextoInicio from '../textoPaginaInicio/TextoInicio';
import TextoQueOfrecemos from '../textoPaginaInicio/TextoQueOfrecemos';

export const PaginaInicial = () => {
  return (
    <div className=''>
      <CarruselDeFotos />
      <BannerCentral />
      <TextoInicio />
      <TextoQueOfrecemos />
    </div>
  );
};
export default PaginaInicial;
