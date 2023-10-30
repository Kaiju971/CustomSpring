import Typography from "@mui/material/Typography";
import videoAccueil from "../videos/videoAccueil.mp4";
import * as S from "./ImgVideo.styled";

const VideoOne = () => (
  <S.GridContainer>
    <video src={videoAccueil} autoPlay loop muted />

    <div className="content">
      <Typography className="img-txt-video">Springfield Custom</Typography>
    </div>
  </S.GridContainer>
);

export default VideoOne;
