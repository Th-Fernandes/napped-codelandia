import styled from "styled-components";
import mainCardBg from "../../img/example-main-thumb.svg";

export const StyledTopContend = styled.section`
  margin: 8rem auto 0;
  display: flex;
  

  .main-contend {
    max-width: 76.1rem;
    height: 35rem;
    background: url('${mainCardBg.src}') center no-repeat ;
    padding: 1.7rem 3rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-content: space-bettwen;
  }

  .main-contend > p {
    width: 100%;
    align-self: flex-end;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  .subsequent-contends {
    display: flex;
    flex-wrap: wrap;
    margin-left: 2rem;
    align-content: space-between;
  }

  @media(max-width: 500px) {
    margin: 4rem auto 0;
    flex-wrap: wrap;

    .main-contend > p {
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: justify;
    } 

    .subsequent-contends {
      margin-left: 0;
    }
  }

  @media(max-width: 768px) and(min-width: 501px) {
    flex-wrap: wrap;
    

    .subsequent-contends {     
      margin: 1rem 0 0 0;
      display: flex;
      justify-content: space-between;
    }
  }
`

