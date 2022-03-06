import styled from "styled-components";
import pallet from "../../../config.json"

export const StyledFooter = styled.footer`
  text-align: center;
  margin: 9.5rem 0 4rem;

  > p {
    max-width: 50rem;
    margin: auto;
    font: 1.6rem 'Inter',sans-serif;
    font-weight: 400;
    color: ${pallet.colors.neutrals["white-200"]}
  }

  @media(max-width: 425px) {
    > p {
      font-size: 1.2rem;
    }
  }
`