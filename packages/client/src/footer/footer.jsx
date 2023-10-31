import * as S from "./footer.styled";


const Footer = () => {
  return (
    <S.MainContainer>
      <S.FooterContent>
        <ul className="contact-list">
          <h2>Notre Boutique</h2>

          <div>
            <h3>Nos horaires</h3>
            <span> du Mardi au Vendredi</span>

            <br />
            <span> 10h00 à 13h00 - 14h à 20h00</span>
            <br />

            <span> Le Samedi 10h00 - 20h00</span>
          </div>
          <br />

          <div>
            <h3>Boutique</h3>

            <span> 14 rue de La Beaune 93100 Montreuil, FRANCE</span>
          </div>
          <br />

          <div>
            <h3>Nous contacter</h3>

            <span> Phone: 01 49 99 00 00</span>
            <span> Email: springfield.custom@company.com</span>
          </div>
        </ul>
      </S.FooterContent>
      <S.FooterCopyright>
        © 2023 Springfield Custom. Tous Droits Réservés.
      </S.FooterCopyright>
    </S.MainContainer>
  );
};

export default Footer;
