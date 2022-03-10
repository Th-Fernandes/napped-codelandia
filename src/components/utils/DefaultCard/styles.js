import styled from "styled-components";

export const StyledCard = styled.li`
  background: url(${props => props.thumb}) center no-repeat;
  background-size: cover;
  width: 33.8rem;
  height: 25rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  cursor: pointer;

  > p {
    font-size: 1.3rem;
  }
`