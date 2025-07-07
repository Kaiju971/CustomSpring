import Typography from "@mui/material/Typography";
import { Parallax } from "react-parallax";
import Atelier from "../images/atelier.png";
import { useLocation, useNavigate } from "react-router";

import * as S from "../compenents/ImgVideo.styled";

const ImageFive = () => {
  const navigate = useNavigate();

  return (
    <Parallax
      variant="h2"
      className="image"
      bgImage={Atelier}
      strength={800}
    >
      <div className="content">
        <S.Texts>
          <span className="img-txt-detente">L'atelier</span>

          <Typography
            variant="h4"
            sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
          >
            Après tous ces efforts, un peu de réconfort.Abandonnez-vous entre
            les mains expertes de nos masseurs, Kinésithérapeute, Chiropracteur
            et Ostéopathe.
          </Typography>
          <button onClick={() => navigate("/produit")} className="button">
            VOIR
          </button>
        </S.Texts>
      </div>
    </Parallax>
  );
};

export default ImageFive;
