import Gangnam from "../../videos/Gangnam.mp4";
import faisal from "../../images/faisal.jpg";
import atelier from "../../images/AtelierParallax.jpg";
import garage from "../../images/garage.jpg";
import piste from "../../images/piste.png";
import carbu from "../../images/Air-Carburator-Cover-In-Chopper-We-Trust--169x300.jpg";
import lilou from "../../images/Image-iloveboots-215x300.jpg";
import * as S from "../../pages/apropos/apropos.styled";
import { Typography } from "@mui/material";

const Apropos = () => {
  return (
    <S.MainContainer>
      <S.Container>
        <video src={Gangnam} autoPlay loop muted />
      </S.Container>

      <S.GridContainer>
        <S.Grid1>
          <img src={faisal} alt="" width="350rem" />
        </S.Grid1>
        <S.Grid2Gr>
          <img src={atelier} alt="" width="900rem" height="500rem" />
        </S.Grid2Gr>
        <S.Grid1>
          <img src={garage} alt="" width="350rem" />
        </S.Grid1>
        <S.Grid3Gr>
          <img src={piste} alt="" width="900rem" height="500rem" />
        </S.Grid3Gr>
        <S.Grid1>
          <img src={carbu} alt="" width="350rem" height="200rem" />
        </S.Grid1>
        <S.Grid1>
          <img src={lilou} alt="" width="350rem" height="200rem" />
        </S.Grid1>
      </S.GridContainer>
      <S.TextContainer>
        <Typography variant="h1" textAlign="center">
          Nous Procédons ainsi...
        </Typography>
        <br />
        <br />
        <S.Flex2>
          <div>
            <Typography variant="h3" textAlign="left">
              01.
            </Typography>
            <br />
            <Typography variant="h3" textAlign="left">
              Recherche
            </Typography>
            <br />
            <Typography variant="h6" textAlign="left">
              Nous recherchons nos produits en fonction de nos idée.
            </Typography>
          </div>
          <div>
            <Typography variant="h3" textAlign="left">
              02.
            </Typography>
            <br />
            <Typography variant="h3" textAlign="left">
              Idée & Conception
            </Typography>
            <br />
            <Typography variant="h6" textAlign="left">
              Une fois l'idée trouvée, nous passons à la conception du produit.{" "}
            </Typography>
          </div>
          <div>
            <Typography variant="h3" textAlign="left">
              03.
            </Typography>
            <br />
            <Typography variant="h3" textAlign="left">
              Design & Production
            </Typography>
            <br />
            <Typography variant="h6" textAlign="left">
              Nous dessinons, puis nous passons le produit en production, afin
              de réaliser le projet.
            </Typography>
          </div>
          <div>
            <Typography variant="h3" textAlign="left">
              04.
            </Typography>
            <br />
            <Typography variant="h3" textAlign="left">
              Ventes & Services
            </Typography>
            <br />
            <Typography variant="h6" textAlign="left">
              Nos réalisations finies, nous les mettons sur le marché à des prix
              défiants toutes concurrences.
            </Typography>
          </div>
        </S.Flex2>
      </S.TextContainer>
    </S.MainContainer>
  );
};

export default Apropos;
