import styled, { css } from 'styled-components';

interface SpacingProps {
  width?: number;
  height?: number;
}

export const Spacing = ({ width, height }: SpacingProps) => {
  return <Container width={width} height={height}></Container>;
};

const Container = styled.div<SpacingProps>`
  ${({ width }) => {
    if (width) {
      return css`
        width: ${width}px;
      `;
    } else {
      return css`
        width: 100%;
      `;
    }
  }}

  ${({ height }) => {
    if (height) {
      return css`
        height: ${height}px;
      `;
    } else {
      return css`
        height: 100%;
      `;
    }
  }}
`;
