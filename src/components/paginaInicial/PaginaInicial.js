import CarruselDeFotos from '../carrousel/CarruselDeFotos';
import './styles.css';
import BannerCentral from '../bannerCentral/BannerCentral';
import TextoInicio from '../textoPaginaInicio/TextoInicio';

export const PaginaInicial = () => {
  return (
    <div className=''>
      <CarruselDeFotos />
      <BannerCentral />
      <TextoInicio />
    </div>
  );
};
export default PaginaInicial;
