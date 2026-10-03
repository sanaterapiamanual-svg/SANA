import {
  BtnContainer,
  DetailsPage,
  Heading,
  Intro,
  ServiceContent,
  ServiceDetails,
  ServiceImage,
  ServiceInfo,
  ServiceSection,
  ServiceOptionTitle,
  ServiceTitle,
  ServicesList,
} from './styles';
import image1 from '../../assets/images/relax.jpg';
import image2 from '../../assets/images/drenagem.jpg';
import image3 from '../../assets/images/liberacao.jpg';
import image4 from '../../assets/images/terapeutica.jpg';
import image5 from '../../assets/images/pedras.jpg';
import image6 from '../../assets/images/reiki.jpg';
import image7 from '../../assets/images/spaDay.jpg';
import { Button } from '../../components/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const services = [
  {
    slug: 'massagem-relaxante',
    title: 'SESSÃO CORPO INTEIRO',
    acrescimo: 'Acréscimo de 30min: R$159',
    image: image1,
    description: 'Sessão mais aconselhada. Nesta modalidade trabalhamos por mais tempo a região onde o paciente sente maior desconforto e também o resto do corpo inteiro incluido face e crânio. Estão inclusos os adicionais de TOLAHAS QUENTES, ÓLEOS ESSENCIAS, MACA AQUECIDA E ACOLCHOADA.',
    duracao: 'DURAÇÃO: 75 MIN (1H E 15MIN) | COPRO INTEIRO E FACE',
    valor: 'R$320',
    indicacao: 'As técnicas utilizadas irão depender da necessidade do momento.',
    details: ['Ideal para quem precisa se livrar de alguma dor e ainda sim relaxar o corpo por inteiro.', 'Para quem busca relaxamento profundo e conexão consigo mesmo.'],
  },
  {
    slug: 'liberacao-miofascial',
    title: 'SESSÃO ESPECÍFICA',
    acrescimo: '',
    image: image3,
    description: 'Nesta modalidade focamos APENAS NAS REGIÕES ENVOLVIDAS NO DESCONFORTO DO PACIENTE, com intenção de devolver a mobilidade e diminuir dores crônicas. ',
    duracao: 'Duração: 40 min | APENAS UMA REGIÃO DO CORPO',
    valor: 'R$189',
    indicacao: 'Indicação: Indicado para quem não possui tempo para uma sessão completa mas precisa do ALIVIO RÁPIDO DE DORES específicas e melhora na mobilidade.',
    details: ['As principais técnicas utilizadas são: massagem terapêutica de tecido profundo e liberação miofascial.', 'Estão inclusos os adicionais de TOLAHAS QUENTES, ÓLEOS ESSENCIAS, MACA AQUECIDA E ACOLCHOADA.'],
  },
  {
    slug: 'drenagem-linfatica',
    title: 'DRENAGEM LINFÁTICA',
    acrescimo: 'Acréscimo de 30min: R$159',
    image: image2,
    description: 'Técnica realizada com movimentos suaves e precisos de bombeamento, que estimulam o sistema linfático e favorecem a eliminação do excesso de líquidos e toxinas. Ajuda a reduzir o inchaço, promove sensação de leveza e bem-estar.',
    duracao: 'Duração: 60min | Corpo Todo',
    valor: 'R$320',
    indicacao: 'Indicação: pessoas com retenção de líquidos e grávidas',
    details: [],
  },
  {
    slug: 'massagem-terapeutica',
    title: 'MASSAGEM TERAPÊUTICA',
    acrescimo: 'Acréscimo de 30min: R$159',
    image: image4,
    description: 'Uma massagem mais intensa que trabalha nos tecidos mais profundos trazendo alívio de tensões e também preparando ou recuperando o corpo para atividades físicas.',
    duracao: 'Duração: 60min | Corpo Todo',
    valor: 'R$320',
    indicacao: 'Indicação: praticantes de atividade física intensa.',
    details: [],
  },
  {
    slug: 'pedras-quentes',
    title: 'PEDRAS QUENTES',
    acrescimo: 'Acréscimo de 30min: R$159',
    image: image5,
    description: 'O calor das pedras junto com movimentos suaves de deslizamento proporcionam um estado de relaxamento',
    duracao: 'Duração: 60min | Corpo Todo',
    valor: 'R$340',
    indicacao: 'Indicação: dias frios e pessoas com maior tensão muscular que preferem uma abordagem suave e confortável',
    details: [],
  },
  {
    slug: 'reiki',
    title: 'REIKI',
    acrescimo: 'Acréscimo de 30min: R$159',
    image: image6,
    description: 'Técnica terapêutica japonesa que trabalha no campo energético sutil do ser através da imposição das mãos, trazendo equilíbrio fisico, emocional e energético.',
    duracao: 'Duração: 40min',
    valor: 'R$320',
    indicacao: 'Indicação: pessoas que se sentem drenadas energeticamente ou com excesso de energia e agitação',
    details: [],
  },
  {
    slug: 'spa-day',
    title: 'DAY SPA',
    image: image7,
    description: 'A experiência que combina com o seu momento de cuidado.',
    options: [
      {
        title: 'DAY SPA',
        acrescimo: 'Acréscimo de 30min: R$159',
        description: 'O ritual de autocuidado perfeito para desacelerar durante a semana.',
        duracao: 'Duração: 1h30min',
        valor: 'R$489',
        details: ['Boas vindas com escalda pés e chá de ervas frescas e cookies', 'Massagem nos pés', 'Massagem no corpo e crânio-facial', 'Pedras quentes nas costas', 'Aromaterapia'],
      },
    ],
    details: [],
  },
  {
    slug: 'pacotes-tratamento',
    title: 'PACOTES DE TRATAMENTO CONTINUADO COM DESCONTO!',
    image: image4,
    description: 'Para resultados duradouros e satisfatórios é indicado que o paciente faça sessões recorrentes 1x na semana ou a cada 15 dias, dependendo do objetivo. Pensando nisso disponibilizamos planos de tratamento com desconto de 15% OU personalize seu pacote de acordo com o seu gosto e garantindo o desconto de 15%, confira os pacotes disponíveis: ',
    options: [
      {
        title: 'PLANO LIGHT',
        acrescimo: '',
        description: 'VÁLIDO POR 2 MESES CONTANDO A PARTIR DO PAGAMENTO.',
        duracao: '',
        valor: 'R$865 -  PIX OU CARTÃO DE CRÉDITO',
        details: ['2 SESSÕES DE CORPO INTEIRO DE 1H E 15 MIN', '2 SESSÕES ESPECÍFICAS DE 40 MIN'],
      },
      {
        title: 'PLANO PREMIUM',
        acrescimo: '',
        description: 'VÁLIDO POR 2 MESES CONTANDO A PARTIR DO PAGAMENTO.',
        duracao: '',
        valor: 'R$1088 - PIX OU CARTÃO DE CRÉDITO',
        details: ['4 SESSÕES DE CORPO INTEIRO DE 1H E 15 MIN'],
      },
      {
        title: 'PLANO GOLD',
        acrescimo: '',
        description: 'VÁLIDO POR 2 MESES CONTANDO A PARTIR DO PAGAMENTO.',
        duracao: '',
        valor: 'R$1232 - PIX OU CARTÃO DE CRÉDITO',
        details: ['3 SESSÕES DE CORPO INTEIRO DE 1H E 15 MIN', '1 DAY SPA'],
      },
    ],
    details: [''],
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
      {visibleServices.map(({ title, image, acrescimo, description, duracao, details, indicacao, options, valor }) => (
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
                <ServiceDetails>{option.acrescimo}</ServiceDetails>
                <ServiceInfo>
                <ServiceDetails>{option.duracao}</ServiceDetails>
                <ServiceDetails>{option.valor}</ServiceDetails>
                </ServiceInfo>
              </div>
            )) : (
              <>
                <ServicesList>
                  {details.map(detail => <li key={detail}>{detail}</li>)}
                </ServicesList>
                  <ServiceDetails>{indicacao}</ServiceDetails>
                  <ServiceDetails>{acrescimo}</ServiceDetails>
                <ServiceInfo>
                  <ServiceDetails>{duracao}</ServiceDetails>
                  <ServiceDetails>{valor}</ServiceDetails>
                </ServiceInfo>
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
