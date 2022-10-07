import styled from "styled-components";
import { IGridWrapperProps } from "./GridWrapper";

const styledGridWrapper = styled.div`
display: grid;
width: ${(props: IGridWrapperProps) => props.width || "auto"};
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 20px;
grid-row-gap: 20px;
margin: 0 0 40px 0;
`

export default styledGridWrapper