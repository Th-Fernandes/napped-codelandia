import styled from "styled-components";
import pallet from "../../../../config.json";
import cardAnimation from "../../../styles/cardAnimation"

export const StyledCards = styled.ul`
  flex-grow: 1;
  margin-left: 2.2rem;
  width: 33.8rem;

  h2 {
    font-size: 2.4rem;
    font-weight: 400;
  }

  h2::after {
    content: "";
    max-width: 25rem;
    height: 0.3rem;
    display: block;
    margin: 1.3rem 0;
    background-color: ${pallet.colors.primary["purple-light"]}
  }

  li {
    ${cardAnimation.mainStyle};
  }
  
  li:hover {
    ${cardAnimation.hoverStyle}
  }

  li:not(first-child) {
    margin-top: 4.7rem;
  }

  @media(max-width: 768px) {
    margin-top: 5rem;
    text-align: center;

    h2::after {
      margin: 1rem auto 0;
    }

    > li {
      background-size: cover;
      background-position: center;
      width: 90%;
      margin: auto;
    }
  }
`