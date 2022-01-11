import styled from 'styled-components';

interface IText extends React.HTMLAttributes<HTMLElement> {
  type: 'KRDisplay-1';
}

export const Text = styled.span`
  all: unset;
  display: inline-block;
`;
