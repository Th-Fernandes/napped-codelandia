import styled from "styled-components";
import pallet from "../../../../config.json";
import thumb from "../../../img/card-example.svg";
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

  .card {
    background-image: url(${thumb.src});
    height: 25rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }

  .card:not(first-child) {
    margin-top: 4.7rem;
  }

  .card > p {
    font-size: 1.3rem;
  }

  @media(max-width: 768px) {
    margin-top: 5rem;
    text-align: center;

    h2::after {
      margin: 1rem auto 0;
    }

    .card {
      background-size: cover;
      background-position: center;
      width: 90%;
      margin: auto;
    }
  }
`