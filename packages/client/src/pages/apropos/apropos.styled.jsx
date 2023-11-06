import { styled } from "@mui/material/styles";
import Stunt from "../../images/apropos.jpg";

export const MainContainer = styled("div")`
  /* margin-bottom: 15rem; */
  /* background-image: url(${Stunt});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 100vh; */
`;

export const Container = styled("div")`
  background-image: url(${Stunt});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  text-align: center;

  video {
    margin-top: 7%;
    width: 50vw;
    height: 80vh;
  }
`;

export const GridContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25% 25% 25% 25%;
  width: 100vw;
  grid-gap: 1%;
  z-index: 10;
  justify-items: center;
  align-items: center;
  padding-bottom: 5%;
  padding-top: 3%;
`;

export const Grid1 = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const Grid2Gr = styled("div")`
  width: 50vw;
  grid-column: 2 / span 2;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-self: center stretch;
`;

export const Grid3Gr = styled("div")`
  grid-column: 1 / span 2;
  grid-row: 3 / span 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const TextContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
  padding-top: 2%;
  padding-bottom: 5%;
  padding-left: 5%;
`;

export const Flex2 = styled("div")`
  display: flex;
  justify-content: space-around;
`;
