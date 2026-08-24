import styled from 'styled-components';

export const NavGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  width: max-content;

  @media (max-width: 767px) {
    display: ${({ $mobile }) => ($mobile ? 'flex' : 'none')};
    flex-direction: ${({ $mobile }) => ($mobile ? 'column' : 'row')};
    gap: ${({ $mobile }) => ($mobile ? '14px' : '26px')};
    width: ${({ $mobile }) => ($mobile ? '100%' : 'max-content')};
  }
`;
