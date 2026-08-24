import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { Title } from '../../components/Title';
import { Container, HeaderTexts } from './styles';
import image1 from '../../assets/images/massagemrelax.jpg';
import image2 from '../../assets/images/drenagemLinfatica.png';
import image3 from '../../assets/images/liberacao.jpg';
import image4 from '../../assets/images/liberacao.jpg';
import image5 from '../../assets/images/pedras.jpg';
import image6 from '../../assets/images/reiki.jpg';
import { PageContainer } from '../../components/Container';

export const Tratamentos = () => {
  const title = 'TÉCNICAS UTILIZADAS';
  const btn = 'SAIBA MAIS';
  const techniqueNames = ['MASSAGEM RELAXANTE', 'DRENAGEM LINFÁTICA', 'LIBERAÇÃO MIOFASCIAL', 'MASSAGEM TERAPÊUTICA', 'PEDRAS QUENTES', 'REIKI', 'DAY SPAs'];
  const carouselItems = [image1, image2, image3, image4, image5, image6].map((image, index) => (
    <figure key={image}>
      <img src={image} alt={techniqueNames[index]} />
      <figcaption>{techniqueNames[index]}</figcaption>
    </figure>
  ));
  return (
    <PageContainer id="tratamentos">
      <Container>
        <HeaderTexts>
          <Title text={title}/>
          <Button text={btn} href="/tratamentos/detalhes" />
        </HeaderTexts>
        <Carousel items={carouselItems} />
      </Container>
    </PageContainer>
  );
};

export default Tratamentos;
