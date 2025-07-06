import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useContext } from "react";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router";
import Logo from "../logo/Motorcycle-logo.gif";
import FormConnexion from "../compenents/forms/FormConnexion";
import AuthContext from "../store/auth/AuthContextProvider";

import * as S from "./topbar.styled";

const menuItemsArray = [
  "accueil",
  "inscription",
  "produit",
  "apropos",
  "contact",
  "admin",
];

const drawerWidth = "20%";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const { authState } = useContext(AuthContext);

  const isSelected = (item) =>
    pathname.includes(item) || (pathname === "/" && item === "accueil");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigateItem = (item) => {
    if (item === "accueil") navigate("/");
    else navigate(item);
  };

  const showError = (error) => {
    enqueueSnackbar("Utilisateur inconnu", {
      variant: "error",
    });
    console.error(error);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        background: "#64cb2cf7",
        height: { sm: "200vh", md: "200vh" },
      }}
    >
      <S.CloseIconStyle>
        <Typography variant="h5" color="#077c36" className="close">
          Close
        </Typography>
        <CloseIcon
          onClick={handleDrawerToggle}
          sx={{ fontSize: "4rem", color: "#077c36", cursor: "pointer" }}
        />
      </S.CloseIconStyle>

      <S.Form>
        <FormConnexion />
        <S.Inscrivez>
          Vous n’avez pas encore de compte!
          <u
            onClick={() => {
              handleDrawerToggle();
              navigate("/inscription");
            }}
          >
            Inscrivrez-vous ici!
          </u>
        </S.Inscrivez>
      </S.Form>

      <Divider />
      <Typography
        onClick={() => navigate("/")}
        variant="h1"
        sx={{ my: 2, color: "#092e09" }}
      >
        Springfield Custom
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {menuItemsArray.map((item, index) => (
          <ListItem key={item}>
            <ListItemButton
              selected={isSelected(item)}
              onClick={handleDrawerToggle}
              sx={{
                textAlign: "center",
                color: index > 1 ? "colorWhite.main" : "colorVertFoncé1.main",
              }}
            >
              <ListItemText
                primary={item}
                onClick={() => {
                  navigateItem(item);
                }}
                primaryTypographyProps={{
                  fontSize: index > 1 ? "30px" : "30px",
                  textTransform: "capitalize",
                  lineHeight: "normal",
                  fontWeight: "400",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <S.Container>
      <Box
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#1e4630",
          },
          display: "flex",
        }}
      >
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "#64cb2cf7",
              background: "transparent",
            }}
          >
            <IconButton
              id="iconbutton"
              color="red"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <S.LogoText>
              <S.Img
                src={Logo}
                alt="Logo"
                style={{ width: "70px", height: "66px", marginRight: "60px" }}
              />
              <Typography
                variant="h1"
                onClick={() => navigate("/")}
                sx={{
                  my: 2,
                  opacity: 0.8,
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  cursor: "pointer",
                  color: "#64cb2cf7",
                }}
              >
                Springfield Custom
              </Typography>
            </S.LogoText>
            <List sx={{ display: { xs: "none", sm: "flex" } }}>
              {menuItemsArray.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    selected={isSelected(item)}
                    onClick={() => navigate(item)}
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      display:
                        item === "admin" &&
                        (!authState.isLoggedIn || authState.role === "visiteur")
                          ? "none"
                          : "block",
                      "&.Mui-selected": {
                        color: item === "inscription" ? "white" : "#daca3bff",
                        backgroundColor:
                          item === "inscription" ? "#daca3bff" : "transparent",
                        borderRadius: item === "inscription" ? "10px" : "0",
                        boxShadow:
                          item === "inscription"
                            ? " 0px 4px 4px #2e4f44 "
                            : "transparent",
                      },
                    }}
                  >
                    {item === "apropos" ? "à propos" : item}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <ClickAwayListener
              mouseEvent="onMouseDown"
              touchEvent="onTouchStart"
              onClickAway={() => mobileOpen && handleDrawerToggle()}
            >
              <Drawer
                anchor="left"
                variant="temporary"
                open={mobileOpen}
                onClose={(_, reason) => reason === "backdropClick"}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: { sm: "100%", md: drawerWidth },
                  },
                }}
              >
                {drawer}
              </Drawer>
            </ClickAwayListener>
          </Toolbar>
        </AppBar>
      </Box>
    </S.Container>
  );
}
