import styled from 'styled-components';

interface IContainer {
  type?: 'column' | 'row';
  width?: string;
  height?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed';
  mobileheight?: string;
}

export const Container = styled.div<IContainer>`
  position: ${({ position }) => position || 'static'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};

  display: flex;
  flex-direction: ${({ type }) => type || 'row'};
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1440px) {
    width: 100%;
  }

  border: 1px solid blue;
`;
