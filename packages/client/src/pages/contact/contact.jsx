// import { Typography } from "@mui/material";
import FormContact from "../../compenents/forms/FormContact.jsx";
import VintageGaStation from "../../images/VintageGaStation.jpg";
import Map from "../../map/localisationMap.jsx";

//  import * as S from "../pages/Contact.styled";
import * as S from "./contact.styled";

const Contact = () => {
  return (
    <S.Container>
      <S.Img src={VintageGaStation} alt="contact" />
      <Map />
      <FormContact />
    </S.Container>
  );
};

export default Contact;
