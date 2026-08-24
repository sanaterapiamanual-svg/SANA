import styled from 'styled-components';

export const SubtitlePiece = styled.h3`
  margin-bottom: ${({ marginBottom }) => marginBottom || '5px'};
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.variable};
  font-size: 25px;
  line-height: 1.1;
  font-weight: 400;
`;
