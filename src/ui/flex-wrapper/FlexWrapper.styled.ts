import { IFlexWrapperProps } from "./FlexWrapper";
import styled from "styled-components";

const StyledWrapper = styled.div`
display: flex;
justify-content: ${(props: IFlexWrapperProps) => props.justify || "center"};
align-items: ${(props: IFlexWrapperProps) => props.items || "center"};
flex-direction: ${(props: IFlexWrapperProps) => props.direction || "row"};
gap: ${(props: IFlexWrapperProps) => props.gap || 0};
width: ${(props: IFlexWrapperProps) => props.width || "auto"};
height: ${(props: IFlexWrapperProps) => props.height || "auto"};
border: ${(props: IFlexWrapperProps) => props.border || "none"};
text-align: ${(props: IFlexWrapperProps) => props.textAlign || "start"};
margin: ${(props: IFlexWrapperProps) => props.margin || "0"};

${(props: IFlexWrapperProps) => props.position && props.position}
`

export default StyledWrapper