import PropTypes from 'prop-types';
import { PageContainer } from '../../components/Container';
import { WelcomeBanner } from '../../components/WelcomeBanner';

export const Home = () => {
  const title = 'especialista em alívio de dores';
  const subtitle = 'Quando o corpo relaxa a mente descansa';

  const links = [
    { title: 'AGENDAR PELO WHATSAPP', href: 'https://wa.me/5551995492876?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+agendamento+dos+servi%C3%A7os+de+massagem+e+tratamentos.' },
    { title: 'LIGAR', href: 'https://wa.me/5551995492876?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+de+massagem+e+tratamentos.' },
  ];

  return (
    <PageContainer id="home">
      <WelcomeBanner
        title={title}
        subtitle={subtitle}
        links={links}
      />
    </PageContainer>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
