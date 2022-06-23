import styled, { CSSProperties } from "styled-components"

interface ColProps {
    width : number;
    mainAxisAlignment? : 'center'|'start'|'end'|'flex-start'|'flex-end'|'left'|'right';
    crossAxisAlignment? : 'normal'|'flex-start'|'flex-end'|'center'|'start'|'end'|'self-start'|'self-end'|'baseline'|'stretch'
    children : JSX.Element | JSX.Element[];
    style? : CSSProperties
}

export const Col = ({width, children,mainAxisAlignment='start', crossAxisAlignment='center', style=defaultStyle}: ColProps) =>{
    return (<Container width={width} mainAxisAlignment={mainAxisAlignment} crossAxisAlignment={crossAxisAlignment} style={style}>{children}</Container>)
}

const defaultStyle : CSSProperties={

}

const Container = styled.div<ColProps>`
    width : ${({width})=>width}px;
    display:flex;
    flex-direction:column;
    justify-content : ${({mainAxisAlignment})=>mainAxisAlignment};
    align-items: ${({crossAxisAlignment})=>crossAxisAlignment};
    height : 100%;
`