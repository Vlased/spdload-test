import styled from "styled-components";
import Text from "ui/text/Text";

interface IStyledHeaderLinkProps {
    children: React.ReactNode;
    isCurrent: boolean;
}

export const styledHeaderLink = styled(Text)`
line-height: 19px;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;

${(props: IStyledHeaderLinkProps) => props.isCurrent &&
`text-decoration: underline; 
text-underline-position: under; 
text-decoration-thickness: 1.4px;`}

&:hover{
    color: #DD377D;
}
`