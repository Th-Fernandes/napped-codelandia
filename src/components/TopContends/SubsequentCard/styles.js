import styled from "styled-components";
import cardThumb from "../../../img/example-subsequent-thumb.svg";

export const StyledSubsequentCard = styled.li`
  width: 33.8rem;
  height: 16.5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding: 1rem 2rem 1rem 1rem;
  background-image: url(${cardThumb.src});
  background-repeat: no-repeat;
  background-size: cover;

  > p {
    align-self: flex-end;
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @media(max-width: 500px) {
    width: 100%;
    margin-top: 4rem;

    > p {
      text-align: justify;
    }
  }

  @media(max-width: 768px) and (min-width: 501px) {
    width: 100%
  }
`