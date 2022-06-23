import styled from "styled-components";

interface SpacingProps {
    width?: number;
    height?: number;
}

export const Spacing = ({width=100,height=100}:SpacingProps)=>{
return <Container width={width} height={height}></Container>
}

const Container = styled.div<SpacingProps>`
width: ${({width})=>width}px;
height: ${({height})=>height}px;
`


