import Typography from "@mui/material/Typography";
import { Parallax } from "react-parallax";
import BadGoldAss from "../images/Bad-Gold-Ass.jpg";
import { useLocation, useNavigate } from "react-router";

import * as S from "../compenents/ImgVideo.styled";

const ImageFour = () => {
  const navigate = useNavigate();
  return (
    <Parallax className="image" bgImage={BadGoldAss} strength={800}>
      <div className="content">
        <S.Texts>
          <span className="img-txt-yoga">Arrivages</span>
          <br />
          <br />
          <br />
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
          >
            Respirez, étirez-vous, trouvez la paix intérieure.
          </Typography>
          <br />

          <Typography
            variant="h4"
            sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
          >
            Le yoga vous guide vers l'équilibre et la sérénité.
          </Typography>
          <br />

          <Typography
            variant="h4"
            sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
          >
            Pratiquez avec amour et laissez votre lumière intérieure briller.
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
          >
            Vous serez entourez des meilleurs coachs pour vous aider à
            perfectionner ces mouvements et à équilibrer votre chakra.
          </Typography>
          <button onClick={() => navigate("/produit")} className="button">
            VOIR
          </button>
        </S.Texts>
      </div>
    </Parallax>
  );
};

export default ImageFour;
