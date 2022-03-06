import DefaultClass from "../../utils/DefaultClass/DefaultClass";
import DefaultButton from "../../utils/DefaultButton/DefaultButton";
import { StyledUl } from ".";

export default function MostWatchedList() {

  return (
    <StyledUl className="mostWatched-list">
      {
        [1,2,3,4,5,6].map((el) => {
          return (
            <li className="mostWatched-item" key={el}>
              <div className="item-thumb">
                <DefaultClass/>
              </div>

              <article>
                <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
                </h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...
                </p>

                <span className="time">{new Date().toLocaleDateString()}</span>
                <DefaultButton dimensions={{}}>Ler notícia</DefaultButton>
              </article>
            </li>
          )
        })
      }
    </StyledUl>
  )
}