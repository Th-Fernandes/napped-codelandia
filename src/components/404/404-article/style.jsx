import styled from "styled-components";
import pallet from "../../../../config.json"

export const StyledArticle = styled.article`
  max-width: 112rem;
  margin: auto 0;
  

  > h1 {
    max-width: 45.7rem;
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 6rem;
  }

  > p {
    max-width: 49.5rem;
    font-size: 2rem;
    color: ${pallet.colors.neutrals["white-200"]};
    margin: 1.7rem 0 4.6rem; 
  }

  @media(max-width: 1024px) {
    order: 1;
    width: 100%;
    text-align: center;
    margin-top: 4rem;

    > h1, > p {
      max-width: 100%;
    }
  }
`