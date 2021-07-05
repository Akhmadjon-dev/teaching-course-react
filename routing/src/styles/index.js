import sty from "styled-components";

export const Main = sty.div`
    background-color: lightblue;
    display: flex;
    min-height: 100vh;

`;
export const Section = sty.div`
    display: flex;
    min-height: 100vh;
    width: calc(100% - 130px);

`;

export const FlexWrap = sty.div`
    display: flex;
    flex-direction: ${(props) => props.fd || "row"};
    justify-content: ${(props) => props.jc || "center"};
    align-items: ${(props) => props.ai || "center"};
    flex-wrap: ${(props) => props.wr || "no-wrap"};
`;
