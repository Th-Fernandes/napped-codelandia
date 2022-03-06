import styled from "styled-components";
import pallet from "../../../config.json";

 export const StyledNapedApresentation = styled.article`
 margin: 11.4rem auto 0;

  h1 {
    font-size: 4.8rem;
    font-weight: 400;
    max-width: 30.3rem;
  }

  p {
    max-width: 49.2rem;
    font-size: 2rem;
    color: ${pallet.colors.neutrals["white-200"]};
    line-height: 3.2rem;
    margin-top: 1.1rem;
  }

  @media(max-width: 475px) {
    margin-top: 5rem;

    h1 {
      font-size: 4.2rem;
    }

    p {
      text-align: justify;
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }
 `

