import styled from 'styled-components';

export interface IContainer {
  width?: string;
  height?: string;
  direction?: 'right' | 'left' | 'center';
  flexDirection?: 'column' | 'row';
  option?: string;
}

export const Container = styled.div<IContainer>`
  ${({ width, height }) => {
    return `
     width: ${width};
     height: ${height};
   `;
  }}
  ${({ direction }) => {
    return `
      display:flex;
      justify-content:${direction};
    `;
  }}
  ${({ flexDirection }) => {
    return `
      flex-direction:${flexDirection};
    `;
  }}

  /* border: 1px solid blue; */
  display: flex;
  ${({ option }) => {
    return `${option};`;
  }}
`;