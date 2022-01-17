import React, { CSSProperties } from 'react';
import { Container } from './container';

export const DecoratedContainer = ({ width, height, children }) => {
  return (
    <React.Fragment>
      <Container
        position="absolute"
        width={width}
        height={height}
        style={ContainerCSS}
      >
        <Container style={ContainerDecoratorCSS} height="12px"></Container>
        {children}
      </Container>
    </React.Fragment>
  );
};

const ContainerCSS: CSSProperties = {
  backgroundColor: 'var(--gray-white)',
  borderRadius: '10px',
};

const ContainerDecoratorCSS: CSSProperties = {
  position: 'absolute',
  top: 0,
  backgroundColor: 'var(--brand-orange-003)',
};
