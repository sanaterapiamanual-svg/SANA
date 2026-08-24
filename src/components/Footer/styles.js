import styled from 'styled-components';

export const PageFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  box-sizing: border-box;
  height: 90px;
  color: ${({ theme }) => theme.colors.light.beige0};
  background-color: ${({ theme }) => theme.colors.dark.brown0};
`;
