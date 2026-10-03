import { PageContainer } from '../../components/Container';
import { SplitedBanner } from '../../components/SplitedBanner';
import { capitalizeAll } from '../../utils/utils';

export const Historia = () => {
  const imgDescription = 'Imagem de massagem terapêutica';
  const title = 'massoterapia e bem-estar';
  const paragraph1 = 'Prazer, me chamo Bruna Goulart, sou massoterapeuta, instrutora de yoga, pesquisadora do movimento humano e a terapeuta por trás do ESTÚDIO SANA. Estou aqui para te auxiliar a viver uma VIDA SEM DORES E COM MAIS PRESENÇA.';
  const paragraph2 = 'O MÉTODO SANA parte da escuta do corpo e necessidades de cada pessoa, entendendo que cada corpo é único. Não são utilizados protocolos estáticos de uma técnica específica, mas sim um combinado de técnicas que melhor se adaptam para a necessidade de cada pessoa naquele momento. Na consulta conversamos e definimos a melhor abordagem juntos. Faço uso das seguintes técnicas que podem ser combiadas ou não, dependendo da necessidade: MASSAGEM TERAPÊUTICA, LIBERAÇÃO MIOFASCIAL, MASSAGEM RELAXANTE, DRENAGEM LINFÁTICA E REIKI.';
  const paragraph3 = 'Acredito que para alcançar resultados duradouros e satisfatórios no alívio das dores e tensões é preciso RESPEITAR OS LIMITES DE DOR DO PACIENTE, para que os músculos não se tensionem tentando proteger o corpo da ameaça da dor. ME CERTIFICO QUE VOCÊ NÃO SINTA DOR DURANTE A SESSÃO, não importa o quão tensionado esteja. Acredito na importância de criar uma atmosfera no ambiente que favoreça o equilibrio do sistema nervoso, utilizando sempre os adicionais de TOALHAS QUENTES, ÓLEOS ESSENCIAIS RELAXANTES, COBERTOR TÉRMICO, MACA COM COLCHÃO MACIO, MÚSICA COM FREQUÊNCIAS CALMANTES E TOQUE QUE TRAGA SEGURANÇA E NÃO DOR, (inclusos em todos os atendimentos), tudo isso num espaço aconchegante e visualmente convidativo ao descanso. Só assim, com o sistema nervoso em estado de equilíbrio, é possível trabalhar o relaxamento dos músculos e recuperação da teia miofascial, trazendo também descanso para a mente.';
  const paragraph4 = 'O cuidado começa quando você se escolhe.';

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
        paragraph4={paragraph4}
        links={links}
      />
    </PageContainer>
  );
};

export default Historia;
