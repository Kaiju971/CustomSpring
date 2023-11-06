import Typography from "@mui/material/Typography";
import { Parallax } from "react-parallax";
import cruiser from "../images/cruiser.jpg";
import { useLocation, useNavigate } from "react-router";

import * as S from "../compenents/ImgVideo.styled";

const ImageThree = () => {
  const navigate = useNavigate();
  return (
    <Parallax className="image" bgImage={cruiser} strength={800}>
      <div className="content">
        <S.Texts>
          <S.Title>Low riders</S.Title>
          <br />
          <br />
          <br />
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#b4f573", mixBlendMode: "difference" }}
          >
            Surpassez-vous et atteignez vos limites pendant vos entraînements.
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#b4f573", mixBlendMode: "difference" }}
          >
            Un coach vous accompagne si vous le désirez. il pourra vous établir
            un programme selon vos objectifs, mais également vous conseiller sur
            les produits alimentaires, avec un repas diététique selon vos
            apports nutritionnels.
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ color: "#b4f573", mixBlendMode: "difference" }}
          >
            <p>
              Exemple novice : 3 entrainements par semaine en 1 heure de
              temps/jour.
            </p>
            <p>
              Exemple intermédiaire : 5 entrainements par semaine en 1 heure de
              temps/jour.
            </p>
            <p>
              Exemple Expert : 5 entrainements par semaine en 2 heures de
              temps/jour.
            </p>
            <p>
              Exemple Legende : 7 entrainements par semaine en 2 heures de
              temps/jour.
            </p>
          </Typography>
          <button onClick={() => navigate("produit")} className="button">
            VOIR
          </button>
        </S.Texts>
      </div>
    </Parallax>
  );
};

export default ImageThree;
