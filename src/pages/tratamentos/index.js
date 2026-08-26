import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { Container, HeaderTexts } from './styles';
import { DescriptionText } from '../../components/Description';
import image1 from '../../assets/images/relax.jpg';
import image2 from '../../assets/images/drenagemLinfatica.png';
import image3 from '../../assets/images/liberacao.jpg';
import image4 from '../../assets/images/terapeutica.jpg';
import image5 from '../../assets/images/pedras.jpg';
import image6 from '../../assets/images/reiki.jpg';
import image7 from '../../assets/images/spaDAY.jpg';
import { PageContainer } from '../../components/Container';
import { ReviewCarousel } from '../../components/ReviewGoogle';
import { Title } from '../../components/Title';

export const Tratamentos = () => {
  const title = 'TÉCNICAS UTILIZADAS';
  const text = 'MEMÓRIAS INESQUECÍVEIS';
  const reviewDesc = 'Descubra um pouco de como é a experiência SANA nas palavras de nossos clientes:';
  const btn = 'SAIBA MAIS';

  const techniques = [
    ['massagem-relaxante', 'MASSAGEM RELAXANTE', image3],
    ['drenagem-linfatica', 'DRENAGEM LINFÁTICA', image2],
    ['liberacao-miofascial', 'LIBERAÇÃO MIOFASCIAL', image1],
    ['massagem-terapeutica', 'MASSAGEM TERAPÊUTICA', image4],
    ['pedras-quentes', 'PEDRAS QUENTES', image5],
    ['reiki', 'REIKI', image6],
    ['spa-day', 'DAY SPAS', image7],
  ];

  const carouselItems = techniques.map(([slug, name, image]) => (
    <a href={`/#/tratamentos/detalhes/${slug}`} key={slug}>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </a>
  ));

  return (
    <PageContainer id="tratamentos">
      <Container>
        <HeaderTexts>
          <Title text={title}/>
          <Button text={btn} href="/#/tratamentos/detalhes" />
        </HeaderTexts>
        <Carousel items={carouselItems} />
        <Title text={text}/>
        <DescriptionText text={reviewDesc}/>
        <ReviewCarousel />
      </Container>
    </PageContainer>
  );
};

export default Tratamentos;
