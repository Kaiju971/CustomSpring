import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  color: red;
  border: 1px solid #000;
  background: linear-gradient(
    180deg,
    rgba(155, 37, 37, 0) 0%,
    rgba(220, 80, 2, 0.46) 29.17%,
    #be0000 92.71%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  color: white; /* Couleur du texte */
  /* margin-top: 90%; */
  text-align: center;
`;

export const FooterContent = styled("div")`
  text-align: center;
  font-family: Wallpoet;
`;

export const FooterLogo = styled("div")`
  /* Ajoutez vos styles pour le logo du footer ici */
  display: flex;
  width: 222px;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  line-height: normal;
`;

export const FooterLinks = styled("div")`
  /* Ajoutez vos styles pour les liens du footer ici */
  display: flex;
  width: 222px;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  line-height: normal;
`;

export const FooterSocialMedia = styled("div")`
  /* Ajoutez vos styles pour les icônes ou liens des médias sociaux du footer ici */
`;

export const FooterCopyright = styled("div")`
  /* Ajoutez vos styles pour le texte de copyright du footer ici */
`;

export const ContactList = styled("ul")`
  list-style-type: none; /* Supprimer les puces de liste */
  padding: 0; /* Supprimer le padding par défaut de la liste */
`;

export const ContactListItem = styled("li")`
  margin-bottom: 10px; /* Espacement entre les éléments de la liste */
`;
