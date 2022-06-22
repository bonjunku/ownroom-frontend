import styled from "styled-components"

interface RowProps {
    height : number;
    mainAxisAlignment? : 'center'|'start'|'end'|'flex-start'|'flex-end'|'left'|'right';
    children : JSX.Element | JSX.Element[];
}

export const Row = ({height, children,mainAxisAlignment='start'}: RowProps) =>{
    return (<Container height={height} mainAxisAlignment={mainAxisAlignment}>{children}</Container>)
}

const Container = styled.div<RowProps>`
    height : ${({height})=>height}px;
    display:flex;
    flex-direction:row;
    justify-content : ${({mainAxisAlignment})=>mainAxisAlignment};
    algin-items: center;
    width : 100%;
`