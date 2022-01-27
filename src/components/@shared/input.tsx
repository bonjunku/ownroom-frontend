import styled from 'styled-components';

export const Input = styled.input`
  all: unset;
  background-color: var(--gray-gray-006);
  border: 8px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  padding-left: 20px;
  font-size: 20px;
  color: var(--gray-gray-001);
  font-family: 'Noto Sans KR';
  ::placeholder {
    font-size: 18px;
    color: var(--gray-gray-003);
  }
`;
