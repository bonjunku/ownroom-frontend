import styled, { css, CSSProperties } from "styled-components"

interface RowProps {
    height : number;
    mainAxisAlignment? : 'center'|'start'|'end'|'flex-start'|'flex-end'|'left'|'right';
    children : JSX.Element | JSX.Element[];
    style? : CSSProperties
}

export const Row = ({height, children,mainAxisAlignment='start', style=defaultStyle}: RowProps) =>{
    return (<Container height={height} mainAxisAlignment={mainAxisAlignment} style={style}>{children}</Container>)
}

const defaultStyle : CSSProperties={

}

const Container = styled.div<RowProps>`
    height : ${({height})=>height}px;
    display:flex;
    flex-direction:row;
    justify-content : ${({mainAxisAlignment})=>mainAxisAlignment};
    align-items: center;
    width : 100%;
`