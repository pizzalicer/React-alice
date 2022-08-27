import styled from "styled-components";
import { colors } from "styles/GlobalStyle";

export const Card = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.primary};
  div img {
    height: 26rem;
  }
`
