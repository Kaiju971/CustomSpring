import Typography from "@mui/material/Typography";
import videoAccueil2 from "../images/Air-Carburator-Cover-In-Chopper-We-Trust--169x300.jpg";
import * as S from "./ImgVideo.styled";

const VideoOne = () => (
  <S.GridContainer>
    <video src={videoAccueil2} autoPlay loop muted />

    <div className="content">
      <Typography className="img-txt-video">AssoFacTory</Typography>
    </div>
  </S.GridContainer>
);

export default VideoOne;
