import {
  BtnContainer,
  DetailsPage,
  Heading,
  Intro,
  ServiceContent,
  ServiceDetails,
  ServiceSection,
  ServiceImage,
  ServiceTitle,
  ServicesList,
} from './styles';
import image1 from '../../assets/images/massagemrelax.jpg';
import image2 from '../../assets/images/drenagemLinfatica.png';
import image3 from '../../assets/images/liberacao.jpg';
import image4 from '../../assets/images/liberacao.jpg';
import image5 from '../../assets/images/pedras.jpg';
import image6 from '../../assets/images/reiki.jpg';
import { Button } from '../../components/Button';

const services = [
  {
    title: 'MASSAGEM RELAXANTE',
    image: image1,
    description: 'Técnica com toque suave e ritmado que proporciona relaxamento profundo e equilíbrio do sistema nervoso.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: alívio de estresse e ansiedade',
    details: [],
  },
  {
    title: 'DRENAGEM LINFÁTICA',
    image: image2,
    description: 'Técnica realizada com movimentos suaves e precisos de bombeamento, que estimulam o sistema linfático e favorecem a eliminação do excesso de líquidos e toxinas. Ajuda a reduzir o inchaço, promove sensação de leveza e bem-estar.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: pessoas com retenção de líquidos e grávidas',
    details: [],
  },
  {
    title: 'LIBERAÇÃO MIOFASCIAL',
    image: image3,
    description: 'Traz alívio de dores e tensões crônicas e aumento da mobilidade a partir da técnica de equilíbrio das fáscias musculares.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: pessoas com perda de mobilidade',
    details: [],
  },
  {
    title: 'MASSAGEM TERAPÊUTICA',
    image: image4,
    description: 'Uma massagem mais intensa que trabalha nos tecidos mais profundos trazendo alívio de tensões e também preparando ou recuperando o corpo para atividades físicas.',
    duracao: 'Duração: 60min | Corpo Todo',
    indicacao: 'Indicação: praticantes de atividade física intensa.',
    details: [],
  },
  {
    title: 'PEDRAS QUENTES',
    image: image5,
    description: 'O calor das pedras junto com movimentos suaves de deslizamento proporcionam um estado de relaxamento',
    duracao: '',
    indicacao: 'Indicação: dias frios e pessoas com maior tensão muscular que preferem uma abordagem suave e confortável',
    details: [],
  },
  {
    title: 'REIKI',
    image: image6,
    description: 'Técnica terapêutica japonesa que trabalha no campo energético sutil do ser através da imposição das mãos, trazendo equilíbrio fisico, emocional e energético.',
    duracao: 'Duração: 60min',
    indicacao: 'Indicação: pessoas que se sentem drenadas energeticamente ou com excesso de energia e agitação',
    details: [],
  },
  {
    title: 'MINI DAY SPA',
    image: image1,
    description: 'O ritual de autocuidado perfeito para desacelerar durante a semana ',
    duracao: 'Duração: 1h30min',
    indicacao: '',
    details: ['Boas vindas com escalda pés e chá de ervas frescas e cookies', 'Massagem nos pés', 'Massagem no corpo e crânio-facial', 'Pedras quentes nas costas'],
  },
  {
    title: 'SANA DAY SPA',
    image: image1,
    description: 'Uma experiência de profundo relaxamento e equilíbrio energético.',
    duracao: 'Duração: 2h',
    indicacao: '',
    details: ['Boas vindas com escalda pés e chá de ervas frescas e cookies', 'Massagem nos pés', 'Massagem no corpo e crânio-facial', 'Pedras quentes nas costas', 'Sessão de Reiki para alinhamento energético'],
  },
  {
    title: 'VOUCHER PRESENTE',
    image: image1,
    description: 'Presenteie alguém especial com uma experiência SANA da sua escolha. Disponibilizamos lindo voucher presente físico ou digital com mensagens personalizadas.',
    duracao: 'Adicione Voucher presente e mini bolo de aniversário com vela em qualquer SPA da sua escolha.',
    indicacao: '',
    details: [],
  },
  {
    title: 'RESET ENERGÉTICO',
    image: image1,
    description: 'Renovação das energias para o seu dia a dia.',
    duracao: 'Duração: 1h30min',
    indicacao: '',
    details: [ 'Massagem corporal e crânio-facial', 'Toalha quente nas costas', 'Sessão de Reiki para alinhamento energético'],
  },
];

const links = [
  {
    text: 'AGENDAR ATENDIMENTO',
    href: 'https://wa.me/5551995492876',
    target: '_blank',
  },
  {
    text: 'VOLTAR',
    href: '/#tratamentos',
    target: '',
  },
];

export const TratamentosDetalhes = () => (
  <DetailsPage>
    <Intro>
      <Heading>TRATAMENTOS SANA</Heading>
    </Intro>
    <div>
      {services.map(({ title, image, description, duracao, details, indicacao }) => (
        <ServiceSection key={title}>
          <ServiceImage src={image} alt={title} />
          <ServiceContent>
            <ServiceTitle>{title}</ServiceTitle>
            <ServiceDetails>{description}</ServiceDetails>
            <ServicesList>
              {details.map(detail => <li key={detail}>{detail}</li>)}
            </ServicesList>
            <ServiceDetails>{indicacao}</ServiceDetails>
            <ServiceDetails>{duracao}</ServiceDetails>
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

export default TratamentosDetalhes;
