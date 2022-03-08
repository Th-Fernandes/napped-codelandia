import styled from "styled-components";
import pallet from "../../../../config.json";

export const StyledH2 = styled.h2`
font-size: 2.4rem;
font-weight: 400;

&::after {
  content: "";
  max-width: 25rem;
  height: 0.3rem;
  display: block;
  margin: 1.3rem 0;
  background-color: ${pallet.colors.primary["purple-light"]}
}

@media(max-width: 768px) {
  text-align: center;

  &::after {
    margin: 1rem auto 0;
  }
}
`