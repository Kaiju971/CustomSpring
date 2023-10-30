import { styled } from "@mui/material/styles";

export const BackGroundGradientMain = styled("div")`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.colorMaroonFonce.main} 13.54%,
    ${({ theme }) => theme.palette.colorOrange087.main} 57.29%,
    ${({ theme }) => theme.palette.colorBrown.main} 100%
  );
`;

export const BackGroundGradientLogo = styled("div")`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.colorOrange04624.main} 43.23%,
    ${({ theme }) => theme.palette.colorWhite.main} 100%
  );
`;

export const BackGroundGradientInscription = styled("div")`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.colorBrown.main} 0%,
    ${({ theme }) => theme.palette.colorOrange04624.main} 50%,
    ${({ theme }) => theme.palette.colorRed.main} 100%
  );
  border-radius: 20px;
  border: solid 1px;
  box-shadow: 0px 0px 1px 0px;
`;
