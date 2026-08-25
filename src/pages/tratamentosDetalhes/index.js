import {
  BtnContainer,
  DetailsPage,
  Heading,
  Intro,
  ServiceContent,
  ServiceDetails,
  ServiceSection,
  ServiceImage,
  ServiceOptionTitle,
  ServiceTitle,
  ServicesList,
} from './styles';
import image1 from '../../assets/images/relax.jpg';
import image2 from '../../assets/images/drenagemLinfatica.png';
import image3 from '../../assets/images/liberacao.jpg';
import image4 from '../../assets/images/terapeutica.jpg';
import image5 from '../../assets/images/pedras.jpg';
import image6 from '../../assets/images/reiki.jpg';
import image7 from '../../assets/images/spaDAY.jpg';
import { Button } from '../../components/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const services = [
  {
    slug: 'massagem-relaxante',
    title: 'MASSAGEM RELAXANTE',
    image: image1,
    description: 'Técnica com toque suave e ritmado que proporciona relaxamento profundo e equilíbrio do sistema nervoso.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: alívio de estresse e ansiedade',
    details: [],
  },
  {
    slug: 'drenagem-linfatica',
    title: 'DRENAGEM LINFÁTICA',
    image: image2,
    description: 'Técnica realizada com movimentos suaves e precisos de bombeamento, que estimulam o sistema linfático e favorecem a eliminação do excesso de líquidos e toxinas. Ajuda a reduzir o inchaço, promove sensação de leveza e bem-estar.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: pessoas com retenção de líquidos e grávidas',
    details: [],
  },
  {
    slug: 'liberacao-miofascial',
    title: 'LIBERAÇÃO MIOFASCIAL',
    image: image3,
    description: 'Traz alívio de dores e tensões crônicas e aumento da mobilidade a partir da técnica de equilíbrio das fáscias musculares.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: pessoas com perda de mobilidade',
    details: [],
  },
  {
    slug: 'massagem-terapeutica',
    title: 'MASSAGEM TERAPÊUTICA',
    image: image4,
    description: 'Uma massagem mais intensa que trabalha nos tecidos mais profundos trazendo alívio de tensões e também preparando ou recuperando o corpo para atividades físicas.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: praticantes de atividade física intensa.',
    details: [],
  },
  {
    slug: 'pedras-quentes',
    title: 'PEDRAS QUENTES',
    image: image5,
    description: 'O calor das pedras junto com movimentos suaves de deslizamento proporcionam um estado de relaxamento',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: dias frios e pessoas com maior tensão muscular que preferem uma abordagem suave e confortável',
    details: [],
  },
  {
    slug: 'reiki',
    title: 'REIKI',
    image: image6,
    description: 'Técnica terapêutica japonesa que trabalha no campo energético sutil do ser através da imposição das mãos, trazendo equilíbrio fisico, emocional e energético.',
    duracao: 'Duração: 60min',
    indicacao: 'Indicação: pessoas que se sentem drenadas energeticamente ou com excesso de energia e agitação',
    details: [],
  },
  {
    slug: 'spa-day',
    title: 'SPA DAYS',
    image: image7,
    description: 'Escolha a experiência que combina com o seu momento de cuidado.',
    options: [
      {
        title: 'MINI DAY SPA',
        description: 'O ritual de autocuidado perfeito para desacelerar durante a semana.',
        duracao: 'Duração: 1h30min',
        details: ['Boas vindas com escalda pés e chá de ervas frescas e cookies', 'Massagem nos pés', 'Massagem no corpo e crânio-facial', 'Pedras quentes nas costas'],
      },
      {
        title: 'SANA DAY SPA',
        description: 'Uma experiência de profundo relaxamento e equilíbrio energético.',
        duracao: 'Duração: 2h',
        details: ['Boas vindas com escalda pés e chá de ervas frescas e cookies', 'Massagem nos pés', 'Massagem no corpo e crânio-facial', 'Pedras quentes nas costas', 'Sessão de Reiki para alinhamento energético'],
      },
      {
        title: 'RESET ENERGÉTICO',
        description: 'Renovação das energias para o seu dia a dia.',
        duracao: 'Duração: 1h30min',
        details: ['Massagem corporal e crânio-facial', 'Toalha quente nas costas', 'Sessão de Reiki para alinhamento energético'],
      },
    ],
    details: [],
  },
  {
    title: 'VOUCHER PRESENTE',
    image: image1,
    description: 'Presenteie alguém especial com uma experiência SANA da sua escolha. Disponibilizamos lindo voucher presente físico ou digital com mensagens personalizadas.',
    duracao: '*Adicione Voucher presente e mini bolo de aniversário com vela em qualquer SPA da sua escolha por um adicional.',
    indicacao: '',
    details: [],
  },
];

export const TratamentosDetalhes = () => {
  const { serviceSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const visibleServices = serviceSlug
    ? services.filter(service => service.slug === serviceSlug)
    : services;
  const links = [
    {
      text: 'AGENDAR ATENDIMENTO',
      href: 'https://wa.me/5551995492876',
      target: '_blank',
    },
    {
      text: 'VOLTAR',
      href: serviceSlug ? '/#/tratamentos/detalhes' : '/#tratamentos',
      target: '',
    },
  ];

  return (
    <DetailsPage>
    <Intro>
      <Heading>TRATAMENTOS SANA</Heading>
    </Intro>
    <div>
      {visibleServices.map(({ title, image, description, duracao, details, indicacao, options }) => (
        <ServiceSection key={title}>
          <ServiceImage src={image} alt={title} />
          <ServiceContent>
            <ServiceTitle>{title}</ServiceTitle>
            <ServiceDetails>{description}</ServiceDetails>
            {options ? options.map(option => (
              <div key={option.title}>
                <ServiceOptionTitle>{option.title}</ServiceOptionTitle>
                <ServiceDetails>{option.description}</ServiceDetails>
                <ServicesList>
                  {option.details.map(detail => <li key={detail}>{detail}</li>)}
                </ServicesList>
                <ServiceDetails>{option.duracao}</ServiceDetails>
              </div>
            )) : (
              <>
                <ServicesList>
                  {details.map(detail => <li key={detail}>{detail}</li>)}
                </ServicesList>
                <ServiceDetails>{indicacao}</ServiceDetails>
                <ServiceDetails>{duracao}</ServiceDetails>
              </>
            )}
          </ServiceContent>
        </ServiceSection>
      ))}
    </div>
    <BtnContainer>
      {links.map((link) => (
        <Button key={link.text} {...link}/>
      ))}
    </BtnContainer>
    </DetailsPage>
  );
};

export default TratamentosDetalhes;
