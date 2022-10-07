import styled from "styled-components";
import { IImageProps } from "./Image";

const styledImage = styled.img`
max-height: 100vh;
object-fit: ${(props: IImageProps) => props.objectFit || "fill"};
width: ${(props: IImageProps) => props.height};
height: ${(props: IImageProps) => props.height};

${(props: IImageProps) => props.difference && 
"mix-blend-mode: difference"}
`

export default styledImage