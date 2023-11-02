import { styled } from "@mui/material/styles";


export const MainContainer = styled("div")`
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
    /* background-color: ${({ theme }) => theme.palette.colorVertFluo.main}; */
    
  }
`;

export const Grid = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  /* background-color: ${({ theme }) => theme.palette.colorVertFluo.main}; */
  grid-column: 1;
  grid-row: 1 / span 2;
`;

export const Grid1 = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
  grid-column: 1;
  grid-row: 1 / span 2;
`;

export const Grid2 = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
  grid-column: 1;
  grid-row: 1 / span 2;
`;

export const Card = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
`;


export const CardActionArea = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
`;


export const CardMedia = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
`;

export const CardContent = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
`;

export const Button = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
`;

export const Typography = styled("div")`
  padding-top: 20vh;
  padding-left: 10vw;
  background-color: ${({ theme }) => theme.palette.colorVertFluo.main};
`;