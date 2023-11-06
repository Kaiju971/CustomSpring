import { Typography } from "@mui/material";
import FormContact from "../../compenents/forms/FormContact.jsx";
import { APIKey } from "../../config.js";
import VintageGaStation from "../../images/VintageGaStation.jpg";

//  import * as S from "../pages/Contact.styled";
import * as S from "./contact.styled";

const Contact = () => {
  const APIUrl = `https://www.mapquestapi.com/staticmap/v5/map?locations=Toulouse,Fr&size=1100,300@2x&defaultMarker=marker-start-sm&key=${APIKey}`;

  return (
    <S.Container>
      <S.Img src={VintageGaStation} alt="contact" />
      <img src={APIUrl} width={1554} height={685} />
      <FormContact />
    </S.Container>
  );
};

export default Contact;
