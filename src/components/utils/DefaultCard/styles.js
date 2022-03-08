import styled from "styled-components";

export const StyledCard = styled.li`
  background-image: url(${props => props.thumb});
  width: 33.8rem;
  height: 25rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  > p {
    font-size: 1.3rem;
  }
`