import Typography from "@mui/material/Typography";
import { Parallax } from "react-parallax";
import { useLocation, useNavigate } from "react-router";
import GGBlack from "../images/Personnalisation.jpg";

import * as S from "../compenents/ImgVideo.styled";

const ImageTwo = () => {
  const navigate = useNavigate();
  return (
    <Parallax className="image" bgImage={GGBlack} strength={800}>
      <div className="content">
        <S.Texts>
          <span className="img-txt-strip">Personnalisation</span>
          <br />
          <br />
          <br />
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#ff0000", mixBlendMode: "color-burn" }}
          >
            Bouger en conscience permet de rester en bonne santé. Se connecter à
            son âme d'artiste, d'enfant et aux autres amène de la joie dans nos
            vies.
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#ff0000", mixBlendMode: "color-burn" }}
          >
            Apprendre à contrôler et à lâcher prise. Comprendre notre corps et
            notre esprit nous permet d'exprimer qui nous sommes et ce que nous
            ressentons.
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#ff0000", mixBlendMode: "color-burn" }}
          >
            On propose aux particuliers et aux jeunes sretraités des programmes,
            cours collectifs, cours particuliers et nous organisons également
            des ateliers.
          </Typography>
          <button onClick={() => navigate("produit")} className="button">
            VOIR
          </button>
        </S.Texts>
      </div>
    </Parallax>
  );
};

export default ImageTwo;
