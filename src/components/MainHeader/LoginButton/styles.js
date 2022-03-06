import styled from "styled-components";
import pallet from "../../../../config.json";

export const StyledLoginButton = styled.button`
  border: 2px solid ${pallet.colors.primary["purple-light"]};
  color: ${pallet.colors.neutrals["white"]};
  width: 12.5rem;
  height: 2.8rem;
  border-Radius: 3rem;
  font-Size: 1.4rem;
  margin-left: 8.4rem;

  @media(max-width: 1024px) {
    margin: 0;
  }
`;
