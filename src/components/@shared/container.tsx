import styled from 'styled-components';

interface IContainer {
  type?: 'column' | 'row';
  width?: string;
  height?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed';
  justifyContent?:
    | 'start'
    | 'center'
    | 'right'
    | 'left'
    | 'space-between'
    | 'space-evenly';
  alignItems?: 'start' | 'center';
}

export const Container = styled.div<IContainer>`
  position: ${({ position }) => position || 'static'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};

  display: flex;
  flex-direction: ${({ type }) => type || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  overflow: hidden;

  @media all and (max-width: 1136px) {
    width: 100%;
  }

  /* border: 1px blue solid; */
`;
