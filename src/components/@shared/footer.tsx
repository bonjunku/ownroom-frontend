import { CSSProperties } from 'react';
import { Container } from './container';

export const Footer = () => (
  <Container height="300px" style={FooterCSS}></Container>
);

const FooterCSS: CSSProperties = {
  backgroundColor: 'var(--brand-yellow-001)',
};
