import Typography from "@mui/material/Typography";
import { Parallax } from "react-parallax";
import Atelier from "../images/AtelierParallax.jpg";
import * as S from "../compenents/ImgVideo.styled";

const ImageFive = () => (
  <Parallax
    variant="h2"
    sx={{ pt: 8 }}
    className="image"
    bgImage={Atelier}
    strength={800}
  >
    <div className="content">
      <S.Texts>
        <span className="img-txt-detente">Détente</span>
        <br />
        <br />
        <br />
        <br />
        <Typography
          variant="h4"
          sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
        >
          Après tous ces efforts, un peu de réconfort.Abandonnez-vous entre les
          mains expertes de nos masseurs, Kinésithérapeute, Chiropracteur et
          Ostéopathe.
        </Typography>
        <br />
        <br />
        <Typography
          variant="h4"
          sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
        >
          Ils sont tous diplômés et chacun d'eux sont les meilleurs dans leur
          catégorie.
        </Typography>
        <br />
        <br />
        <Typography
          variant="h4"
          sx={{ color: "#66a3fd", mixBlendMode: "difference" }}
        >
          Nous sommes aux petits soins avec, car vous êtes nos clients. Une
          douleur, un check-up, de la curiosité. N'hésitez-plus, passez les voir
          pour prendre votre rendez-vous.
        </Typography>
      </S.Texts>
    </div>
  </Parallax>
);

export default ImageFive;
