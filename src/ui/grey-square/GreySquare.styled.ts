import styled from "styled-components";
import { IGraySquareProps } from "./GraySquare";

const styledGreySquare = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 43px;
height: 43px;
background: ${(props: IGraySquareProps) => props.isPink ? "#DD377D;" : "#ECECEC;"}
`

export default styledGreySquare;