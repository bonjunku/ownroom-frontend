import styled, { css, CSSProperties } from "styled-components"

interface RowProps {
    height : number;
    mainAxisAlignment? : 'center'|'start'|'end'|'flex-start'|'flex-end'|'left'|'right';
    crossAxisAlignment? : 'normal'|'flex-start'|'flex-end'|'center'|'start'|'end'|'self-start'|'self-end'|'baseline'|'stretch'
    children : JSX.Element | JSX.Element[];
    style? : CSSProperties
}

export const Row = ({height, children,mainAxisAlignment='start',crossAxisAlignment='normal', style=defaultStyle}: RowProps) =>{
    return (<Container height={height} mainAxisAlignment={mainAxisAlignment} crossAxisAlignment={crossAxisAlignment} style={style}>{children}</Container>)
}

const defaultStyle : CSSProperties={

}

const Container = styled.div<RowProps>`
    height : ${({height})=>height}px;
    display:flex;
    flex-direction:row;
    justify-content : ${({mainAxisAlignment})=>mainAxisAlignment};
    align-items: ${({crossAxisAlignment})=>crossAxisAlignment};
    width : 100%;
`