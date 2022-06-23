import styled, { CSSProperties } from "styled-components"

interface ColProps {
    width : number;
    mainAxisAlignment? : 'center'|'start'|'end'|'flex-start'|'flex-end'|'left'|'right';
    children : JSX.Element | JSX.Element[];
    style? : CSSProperties
}

export const Col = ({width, children,mainAxisAlignment='start', style=defaultStyle}: ColProps) =>{
    return (<Container width={width} mainAxisAlignment={mainAxisAlignment} style={style}>{children}</Container>)
}

const defaultStyle : CSSProperties={

}

const Container = styled.div<ColProps>`
    width : ${({width})=>width}px;
    display:flex;
    flex-direction:column;
    justify-content : ${({mainAxisAlignment})=>mainAxisAlignment};
    align-items: center;
    height : 100%;
    border: 5px red solid;
`