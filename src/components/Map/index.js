import { MapFrame } from './styles';

export const Map = () => {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.204580552277!2d-51.20338332035145!3d-30.0245015788128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979cc43953b5f%3A0x9a027231bd8c45c4!2sSANA%20-%20Terapia%20manual!5e0!3m2!1spt-BR!2sbr!4v1787432570794!5m2!1spt-BR!2sbr';
  return (
    <MapFrame src={mapUrl} />
  );
};
