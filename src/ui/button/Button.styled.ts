import styled from "styled-components";
import { IButtonProps } from "./Button";

const styledButton = styled.button`
background: ${(props: IButtonProps) => props.background || "auto"};
width: ${(props: IButtonProps) => props.width || "auto"};
height: ${(props: IButtonProps) => props.height || "auto"};
border: ${(props: IButtonProps) => props.border || "none"};
margin: ${(props: IButtonProps) => props.margin || "0"};
z-index: ${(props: IButtonProps) => props.zIndex || "auto"};
cursor: pointer;

${(props: IButtonProps) => props.activeColor && 
`&:active {     
    background-color: ${props.activeColor};    
}`
}
`

export default styledButton;