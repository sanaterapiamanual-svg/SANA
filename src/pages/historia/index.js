import { PageContainer } from '../../components/Container';
import { SplitedBanner } from '../../components/SplitedBanner';
import { capitalizeAll } from '../../utils/utils';

export const Historia = () => {
  const imgDescription = 'Imagem de massagem terapêutica';
  const title = 'massoterapia e bem-estar';
  const paragraph1 = 'O ESTÚDIO SANA foi criado pela massoterapeuta Bruna Goulart a partir do desejo de construir um espaço terapêutico que fosse além da terapia manual: um verdadeiro refúgio visual e sensorial, pensado para inspirar presença, cuidado e reconexão consigo.';
  const paragraph2 = 'É um convite para criar uma relação mais amorosa com o próprio corpo, respeitando suas pausas e necessidades. Um espaço para aliviar dores físicas, estimular a circulação do sangue e da energia, devolver o brilho à pele e aos olhos e, acima de tudo, aquietar a mente e o coração.';
  const paragraph3 = 'NO SANA, cada experiência é um momento de pausa e cuidado — uma oportunidade de voltar para si, escutar o corpo e encontrar equilíbrio entre corpo, mente e energia.'

  const links = [
    { title: 'TRATAMENTOS', href: '#tratamentos' },
    { title: 'ATENDIMENTO', href: '#atendimento' },
  ];

  return (
    <PageContainer id="historia">
      <SplitedBanner
        imgDescription={imgDescription}
        text={capitalizeAll(title)}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
        paragraph3={paragraph3}
        links={links}
      />
    </PageContainer>
  );
};

export default Historia;
