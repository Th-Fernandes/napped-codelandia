import MessageError from "components/404/404-article/MessageError";
import Header404 from "components/404/404-header/Header-404";
import Container404 from "components/404/404-container/Container404.jsx"
import ImgError404 from "components/404/404-errorIMG/ImgError404";

export default function Error404() {
  return (
    <>
      <Header404 class="container-default-size" />

      <main>
        <Container404>
          <MessageError />
          <ImgError404 />
        </Container404>
      </main>
    </>
  )
}