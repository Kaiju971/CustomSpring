import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  color: ${({ theme }) => theme.palette.colorVertFluo.main};
  border: 1px solid #000;
  background-color: ${({ theme }) => theme.palette.colorVert.main};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  /* margin-top: 50%; */
  text-align: center;
  padding-bottom: 1rem;
`;

export const FooterContent = styled("div")`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
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
