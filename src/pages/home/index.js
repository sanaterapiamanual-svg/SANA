import PropTypes from 'prop-types';
import { PageContainer } from '../../components/Container';
import { WelcomeBanner } from '../../components/WelcomeBanner';

export const Home = () => {
  const title = 'uma experiência sensorial e terapêutica de corpo e alma';
  const subtitle = 'O cuidado começa quando você se escolhe.';

  const links = [
    { title: 'TRATAMENTOS', href: '#tratamentos' },
    { title: 'ATENDIMENTO', href: '#atendimento' },
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
