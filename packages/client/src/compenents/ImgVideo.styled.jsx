import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const MainContainer = styled("div")`
  .image {
    position: relative;
    height: 100vh;
    width: 100%;
    padding: 2rem;
    align-content:center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
  }

  .content span.img-txt-strip {
    background-color: #00ff80;
    text-transform: uppercase;
    color: #f5a300;
    margin-top: 10rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;

    @media (max-width: 750px) {
      font-size: 2vh;
      letter-spacing: 30px;
      margin-bottom: 20rem;
      white-space: nowrap;
    }
  }
  /* .content .img-txt-plateau {
    background-color: #b4f573;
    text-transform: uppercase;
    color: #de9a5a;
    padding-top: 10rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
    @media (max-width: 750px) {
      font-size: 1vh;
      letter-spacing: 20px;
      margin-bottom: 20rem;
      white-space: nowrap;
      margin-left: 50rem;
      margin-right: 50rem;
    }
  } */

  .content span.img-txt-yoga {
    background-color: #6e00ec;
    text-transform: uppercase;
    color: #de9a5a;
    padding-top: 10rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }

  .content span.img-txt-detente {
    background-color: #259400;
    text-transform: uppercase;
    color: #382a1e;
    padding-top: 10rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;

  video {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    width: 100vw;
  }

  .content {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: relative; */
    height: 100vh;
    width: 100%;
  }

  .content .img-txt-video {
    background-color: #3a7300;
    text-transform: uppercase;
    color: #ffe600;
    padding: 2rem;
    margin-top: 5rem;
    font-size: 5vh;
    /* letter-spacing: 50px; */
    z-index: 100;
    mix-blend-mode: color-dodge;

    @media (max-width: 750px) {
      /* width: 30vw;
      height: 30%; */
      font-size: 2vh;
      letter-spacing: 30px;
      margin-bottom: 20rem;
    }
  }
`;
export const Texts = styled("div")`
  text-align: center;
  margin-left: 20rem;
  margin-right: 20rem;

  .button {
    color: ${({ theme }) => theme.palette.colorVertFluo.main};
    background-color: ${({ theme }) => theme.palette.colorVertFoncé1.main};
    border: 15px;
    height: 5vh;
    width: 10vw;
  }

  @media (max-width: 750px) {
    font-size: 1vh;
    margin-left: 2rem;
    margin-right: 2rem;
    /* letter-spacing: 30px;
    margin-bottom: 20rem; */
  }
`;

export const Title = styled("div")`
  background-color: #b4f573;
  text-transform: uppercase;
  color: #de9a5a;
  padding: 1rem;
  font-size: 1.5rem;
  letter-spacing: 30px;
  z-index: 100;
  mix-blend-mode: difference;
`;

export const ButOne = styled(Button)`
  width: 4vw;
  cursor: pointer;
`;
