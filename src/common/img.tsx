import styled from 'styled-components';

export const Img = styled.img`
  ${({ width, height }) => {
    return `
      width:${width || '100%'};
      height:${height || '100%'};
    `;
  }}
`;
