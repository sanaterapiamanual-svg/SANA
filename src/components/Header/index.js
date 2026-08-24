import { useEffect, useState } from 'react';
import { LogoArea } from './LogoArea';
import { NavGroup } from './NavGroup';
import {
  MenuButton,
  MenuCloseButton,
  MenuIcon,
  MobileMenu,
  NavBar,
  PageHeader,
} from './styles';

const leftLinks = [
  { title: 'HOME', href: '#home', active: true },
  { title: 'HISTÓRIA', href: '#historia' },
];

const rightLinks = [
  { title: 'TRATAMENTOS', href: '#tratamentos' },
  { title: 'ATENDIMENTO', href: '#atendimento' },
];

export const Header = () => {
  const [activeTitle, setActiveTitle] = useState('HOME');
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const links = [...leftLinks, ...rightLinks];

    const handleScroll = () => {
      setIsCompact(window.scrollY > 20);

      const visibleSections = links
        .map((link) => ({
          ...link,
          section: document.getElementById(link.href.slice(1)),
        }))
        .filter(({ section }) => section)
        .map((link) => ({
          ...link,
          top: link.section.getBoundingClientRect().top + window.scrollY,
        }))
        .sort((first, second) => first.top - second.top);

      const currentSection = visibleSections.reduce((current, section) => (
        section.top <= window.scrollY + 180 ? section : current
      ), visibleSections[0]);

      if (!currentSection) return;

      setActiveTitle((currentTitle) => (
        currentTitle === currentSection.title ? currentTitle : currentSection.title
      ));

      if (window.location.hash !== currentSection.href) {
        window.history.replaceState(null, '', currentSection.href);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageHeader className="site-header" compact={isCompact}>
      <NavBar className="navbar">
        <MenuButton
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon />
        </MenuButton>
        <NavGroup
          links={leftLinks}
          activeTitle={activeTitle}
          onItemClick={setActiveTitle}
        />
        <LogoArea compact={isCompact} />
        <NavGroup
          links={rightLinks}
          activeTitle={activeTitle}
          onItemClick={setActiveTitle}
        />
        <MobileMenu open={isMenuOpen}>
          <MenuCloseButton
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </MenuCloseButton>
          <NavGroup
            links={[...leftLinks, ...rightLinks]}
            activeTitle={activeTitle}
            mobile
            onItemClick={(title) => {
              setActiveTitle(title);
              setIsMenuOpen(false);
            }}
          />
        </MobileMenu>
      </NavBar>
    </PageHeader>
  );
};

export default Header;
