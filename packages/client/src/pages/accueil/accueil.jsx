import * as S from "../../compenents/ImgVideo.styled";
import VideoOne from "../../compenents/VideoOne";
import ImageTwo from "../../compenents/ImageTwo";
import ImageThree from "../../compenents/ImageThree";
import ImageFour from "../../compenents/ImageFour";
import VideoTwo from "../../compenents/VideoTwo";
import ImageFive from "../../compenents/ImageFive";

const Accueil = () => {
  return (
    <S.MainContainer>
      <VideoOne />
      <ImageTwo />
      <ImageThree />
      <ImageFour />
      <VideoTwo />
      <ImageFive />
    </S.MainContainer>
  );
};

export default Accueil;
