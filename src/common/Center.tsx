import styled, { CSSProperties } from "styled-components";

interface CenterProps {
  children: JSX.Element | JSX.Element[];
  style?: CSSProperties;
}

export const Center = ({ children, style = defaultStyle }: CenterProps) => {
  return <Container style={style}>{children}</Container>;
};

const defaultStyle: CSSProperties = {};

const Container = styled.div<CenterProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
