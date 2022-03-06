import {StyledImgError} from "./styles.js";
import errorImage from "../../../img/404-error.svg"

export default function ImgError404() {
  return (
    <StyledImgError src={errorImage.src} />
  )
}