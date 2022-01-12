import styled from 'styled-components';

interface IContainer {
  type?: 'column' | 'row';
  width?: string;
  height?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed';
  justifyContent?:
    | 'center'
    | 'right'
    | 'left'
    | 'space-between'
    | 'space-evenly';
}

export const Container = styled.div<IContainer>`
  position: ${({ position }) => position || 'static'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};

  display: flex;
  flex-direction: ${({ type }) => type || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: center;
  overflow: hidden;

  @media all and (max-width: 1136px) {
    width: 100%;
  }

  border: 1px solid blue;
`;
