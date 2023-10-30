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
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
`;

export const Texts = styled("div")`
  text-align: center;
  margin-left: 20rem;
  margin-right: 20rem;

  .img-error {
    width: 100px;
    height: 50px;
    background-color: yellowgreen;
    text-transform: uppercase;
    color: red;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 1000;
    mix-blend-mode: difference;
  }
`;
