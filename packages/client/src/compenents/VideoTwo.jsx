import Typography from "@mui/material/Typography";
import videoAccueil2 from "../images/Air-Carburator-Cover-In-Chopper-We-Trust--169x300.jpg";
import * as S from "./ImgVideo.styled";

const VideoTwo = () => (
  <S.GridContainer>
    <iframe
      width="1560"
      height="650"
      src="https://www.youtube.com/embed/Ql-LIm9j6AI?si=B8b9ijhKxmjaB8q7"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

  </S.GridContainer>
);

export default VideoTwo;
