import { Parallax } from "react-parallax";
import imgBlog from "../../images/imgBlog.jpg";
import * as S from "../notFound/notFound.styled";

const notFound = () => (
  <Parallax className="image" bgImage={imgBlog}>
    <div className="content">
      <S.Texts>
        <span className="img-error">Error 404</span>
      </S.Texts>
    </div>
  </Parallax>
);

export default notFound;
