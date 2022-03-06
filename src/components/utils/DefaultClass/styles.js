import styled from "styled-components";
import pallet from "../../../../config.json";

export const StyledDefaultClass = styled.span`
  width: 8rem;
  height: 2.5rem;
  background-color: ${pallet.colors.primary["purple-light"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  cursor: default;
  font-size: 1.4rem;
  font-weight: 400;
`