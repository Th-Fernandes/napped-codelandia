import styled from "styled-components";
import pallet from "../../../../config.json";

export const StyledBar = styled.form`
  width: min(112rem, 90%);
  height: 6rem;
  margin:  4.2rem auto 0;
  padding: 0 1.8rem 0 2.5rem;
  background: ${pallet.colors.neutrals["gray-200"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: ${props => props.focusStyle};

  > input {
    background: ${pallet.colors.neutrals["gray-200"]};
    color: #989898;
    font-size: 2rem;
    flex-grow: 1;
    
    &:focus {
      outline: none;
    }
  }

  > img {
    width: 2.3rem;
    height: 2.3rem;
  }

`