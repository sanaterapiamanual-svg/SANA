import { useEffect, useState } from 'react';
import estrlas from '../../assets/images/avaliacao.png';
import google from '../../assets/images/google.png';
import {
  Cards,
  CardHeader,
  Carousel,
  Card,
  Description,
  Subtitle,
  Title,
} from './styles';

const reviews = [
  {
    id: 1,
    title: 'Ana Polese',
    subtitle: estrlas,
    description: 'Experiência de auto cuidado e relaxamento! A Bruna como sempre é extremamente atenciosa, ambiente muito aconchegante e limpo, sempre que preciso de uma massagem seja para apenas me dar um momento de cuidado ou massagem por conta de lesões, ela nunca falha!!! A Bruna também é muito disposta a me dar dicas e conversar sobre cuidados com as lesões no dia-a-dia.',
  },
  {
    id: 2,
    title: 'Paula Knop',
    subtitle: estrlas,
    description: 'Espaço diferenciado e sofisticado para um momento de puro relaxamento e conexão interior. Silencioso, bem decorado, música e atendimentos impecáveis. A massagem é um show a parte, personalizada e na medida certa pra te trazer paz, equilíbrio e bem-estar. Nota 10.',
  },
  {
    id: 3,
    title: 'Jéssica Schranck',
    subtitle: estrlas,
    description: 'Faço as minhas massagens com a Bruna há um bom tempo já, e tem me ajudado muito com a tensão e dores principalmente no trapézio, devido a minha rotina de trabalho (sentada na frente do computador durante o dia todo). Além disso, percebi que minha postura melhorou bastante com as massagens. Recomendo também o Reiki no final, traz uma sensação completa de relaxamento e bem estar.',
  },
  {
    id: 4,
    title: 'Brenda Borges',
    subtitle: estrlas,
    description: 'Atendimento impecável, ambiente acolhedor. 10/10',
  },
  {
    id: 5,
    title: 'Luisa Freitas',
    subtitle: estrlas,
    description: 'maravilhoso!!!',
  },
];

export const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[
      (currentIndex - 1 + reviews.length) % reviews.length
    ],
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <Carousel>
      <Cards>
        {visibleReviews.map((review, index) => (
          <Card
            key={`${review.id}-${index}`}
            $focused={index === 1}
            >
            <CardHeader $focused={index === 1}>
              <Subtitle src={google} maxWidth="30px" alt="símbolo google"/>
              <Subtitle src={review.subtitle} alt="5 estrelas"/>
            </CardHeader>
            <Title>{review.title}</Title>

            <Description $focused={index === 1}>
              {review.description}
            </Description>
          </Card>
        ))}
      </Cards>
    </Carousel>
  );
};
