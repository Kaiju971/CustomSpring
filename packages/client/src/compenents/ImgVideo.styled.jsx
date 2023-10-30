import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  .image {
    position: relative;
    height: 100vh;
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
    background-color: #ff0000;
    text-transform: uppercase;
    color: black;
    padding: 1rem;
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
  .content .img-txt-plateau {
    /* background-color: #b4f573;
    text-transform: uppercase;
    color: #de9a5a;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference; */
    /* @media (max-width: 750px) {
      font-size: 1vh;
      letter-spacing: 20px;
      margin-bottom: 20rem;
      white-space: nowrap;
      margin-left: 50rem;
      margin-right: 50rem;
    } */
  }

  .content span.img-txt-yoga {
    background-color: #66a3fd;
    text-transform: uppercase;
    color: #de9a5a;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }

  .content span.img-txt-detente {
    background-color: #66a3fd;
    text-transform: uppercase;
    color: #de9a5a;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;

  video {
    position: relative;
    width: 100vw;
  }

  .content {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
  }

  .content .img-txt-video {
    background-color: goldenrod;
    text-transform: uppercase;
    color: red;
    padding: 1rem;
    font-size: 5vh;
    letter-spacing: 50px;
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
