import { Typography } from "@mui/material";
import * as S from "./footer.styled";

const Footer = () => {
  return (
    <S.MainContainer>
      <Typography variant="h1">Notre Boutique</Typography>
      <S.FooterContent>
        {/* <ul className="contact-list"> */}
          <div>
            <h2>Nos horaires</h2>
            <span> du Mardi au Vendredi</span>
            <br />
            <span> 10h00 à 13h00 - 14h à 20h00</span>
            <br />
            <span> Le Samedi 10h00 - 20h00</span>
          </div>
          <br />
          <div>
            <h2>Boutique</h2>
            <span> 14 rue de La Beaune 93100 Montreuil, FRANCE</span>
          </div>
          <br />
          <div>
            <h2>Nous contacter</h2>
            <span> Phone: 01 49 99 00 00</span>
            <span> Email: springfield.custom@company.com</span>
          </div>
        {/* </ul> */}
      </S.FooterContent>
      <S.FooterCopyright>
        © 2023 Springfield Custom. Tous Droits Réservés.
      </S.FooterCopyright>
    </S.MainContainer>
  );
};

export default Footer;
