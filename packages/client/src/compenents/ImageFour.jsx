import Typography from "@mui/material/Typography";
import { Parallax } from "react-parallax";
import BadGoldAss from "../images/Bad-Gold-Ass.jpg";
import * as S from "../compenents/ImgVideo.styled";

const ImageFour = () => (
  <Parallax className="image" bgImage={BadGoldAss} strength={800}>
    <div className="content">


      <S.Texts>
        <span className="img-txt-yoga">Cours de Yoga</span>
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
      </S.Texts>

    </div>
  </Parallax>
);

export default ImageFour;
