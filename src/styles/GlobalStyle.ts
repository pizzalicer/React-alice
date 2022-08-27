import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Alegreya Sans';
        font-weight: 400;
    }
`
/*
menu1 = D86FA1
menu2 = EF80B6
main = FA9BC8
*/

export const colors = {
    primary: "#F49BC8",
    secondary: "#EF80B6",
    third: "#D86FA1",
    link: "#2F96FA",
    gray: "#E5E5E5",
    white: "#ffffff",
    black: "#000000",
}

