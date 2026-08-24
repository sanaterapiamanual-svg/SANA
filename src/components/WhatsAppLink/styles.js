import styled from 'styled-components';

export const ButtonLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
  }

  &:hover,
  &.nav-link-active {
    filter: drop-shadow(0px 2px 1px rgba(53, 24, 0, 0.2));
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 55px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
`;
