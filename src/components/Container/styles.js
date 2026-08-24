import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / -1;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    min-width: 0;
  }
`;
