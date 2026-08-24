import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const Container = styled.div`
  width: 100vw;

  ${mixins.lg(`
      gap: 15px;
  `)}
  
  ${mixins.xl(`
    margin-top: 150px;
  `)}
`;

export const HeaderTexts = styled.div`
  width: calc(100%-252px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 102px 48px 150px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;
