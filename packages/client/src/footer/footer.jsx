import * as S from "./footer.styled";
import Tele from "../logo/iconeTel.png";
import Mail from "../logo/Email.png";
import Localisation from "../logo/Location.png";

const Footer = () => {
  return (
    <S.MainContainer>
      <S.FooterContent>
        <S.FooterLinks>
          <ul className="contact-list">
            <span style={{ color: "white" }}>Nous Contacter:</span>

            <a href="/">
              <img
                src={Tele}
                alt="Téléphone"
                style={{
                  width: "32px",
                  height: "25px",
                  flexShrink: 0,
                  marginLeft: "20px",
                }}
              />
              <span style={{ color: "white" }}>Téléphone:</span>
            </a>

            <a href="/">
              <img
                src={Mail}
                alt="E-Mail"
                style={{
                  width: "32px",
                  height: "25px",
                  flexShrink: 0,
                  marginLeft: "20px",
                }}
              />
              <span style={{ color: "white", marginRight: "28%" }}>
                E-Mail:
              </span>
            </a>

            <a href="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Localisation}
                alt="Adresse"
                style={{
                  width: "32px",
                  height: "25px",
                  flexShrink: 0,
                  marginLeft: "29px",
                }}
              />
              <span style={{ color: "white", marginRight: "29%" }}>
                Adresse:
              </span>
            </a>
          </ul>
        </S.FooterLinks>
      </S.FooterContent>
      <S.FooterCopyright>
        © 2023 Springfield Custom. Tous Droits Réservés.
      </S.FooterCopyright>
    </S.MainContainer>
  );
};

export default Footer;
