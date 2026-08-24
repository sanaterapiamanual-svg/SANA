import styled from 'styled-components';

export const TitlePiece = styled.h2`
  margin-bottom: ${({ marginBottom }) => marginBottom || '20px'};
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 40px;
  line-height: 1.1;
  font-weight: 400;
`;
