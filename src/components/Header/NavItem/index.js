import PropTypes from 'prop-types';
import { Container, NavigationLink, Underline } from './styles';

export const NavLink = ({
  active = false,
  href,
  onClickHandler,
  title,
  }) => {
  const handleClick = (event) => {
    if (!href.startsWith('#')) {
      onClickHandler?.(event);
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) {
      event.preventDefault();
      const homeUrl = new URL('/', window.location.origin);
      homeUrl.hash = href;
      window.location.href = homeUrl.toString();
      onClickHandler?.(event);
      return;
    }

    event.preventDefault();
    onClickHandler?.(event);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', href);
  };

  return (
    <Container id={`container-${title}`}>
      <NavigationLink
        onClick={handleClick}
        href={href}
        className={active ? 'nav-link-active' : ''}
        aria-current={active ? 'page' : undefined}
      >
        {title}
        <Underline className="underline" />
      </NavigationLink>
    </Container>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
};
