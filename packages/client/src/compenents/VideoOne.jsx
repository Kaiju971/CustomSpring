import Typography from "@mui/material/Typography";
import videoAccueil from "../videos/videoAccueil.mp4";
import { useLocation, useNavigate } from "react-router";

import * as S from "./ImgVideo.styled";

const VideoOne = () => {
  const navigate = useNavigate();
  return (
    <S.GridContainer>
      <video src={videoAccueil} autoPlay loop muted />

      <div className="content">
        <Typography className="img-txt-video">Springfield Custom</Typography>
        <br />

        <S.ButOne variant="contained" onClick={() => navigate("/produit")}>
          VOIR
        </S.ButOne>
      </div>
    </S.GridContainer>
  );
};
export default VideoOne;
