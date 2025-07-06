import { styled } from "@mui/material/styles";


export const ContainerMain = styled("div")({
  display: "block",
  backgroundColor: "green",
  backgroundSize: "cover",
  backgroundPosition: "center",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  width: "100%",
  height: "575px",
  marginTop: "-1vh",
  "@media (max-width: 750px)": {
    display: "block",
    width: "100%",
  },
  "@media (max-width: 390px)": {
    width: "100%",
  },
});

export const InfoContainer = styled("div")({
  display: "block",
  backgroundColor: "white",
  width: "45%",
  padding: ".5rem",
});
