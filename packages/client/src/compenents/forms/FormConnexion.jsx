import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, FormGroup } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Validate, ValidationGroup } from "mui-validate";
import useApi from "../../hooks/api/useApi";
import AuthContext from "../../store/auth/AuthContextProvider";
import { useSnackbar } from "notistack";

import * as S from "../../header/topbar.styled";

const FormConnexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [authData, setAuthData] = useState();
  const { request, setError, error } = useApi();
  const { globalLogInDispatch, globalLogOutDispatch, authState } =
    useContext(AuthContext);
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  useEffect(() => {
    if (authData && "success" in authData) {
      globalLogInDispatch({
        authToken: authData.user.auth_token,
        userId: authData.user.user_id,
        email: authData.user.email,
        nom: authData.user.nom,
        prenom: authData.user.prenom,
        id_role: authData.user.id_role,
        role: authData.user.role,
      });
    }
  }, [authData, globalLogInDispatch]);

  const authHandler = async (event) => {
    event.preventDefault();
    if (authState.isLoggedIn) {
      globalLogOutDispatch();
    } else {
      try {
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              email: user.email,
              password: user.password,
            },
          }),
        };

        const endpoint = "login";

        await request(endpoint, params, setAuthData);
      } catch (error) {
        setError(error.message || error);
      }
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  }); // information form

  const { email, password } = user;

  // useEffect(() => {
  //   if (isInscrit) setUserPrenom(userCourantPrenom);
  // }, [userIdCourant]);

  const onInputChange = (event) => {
    setUser({ ...user, [event.target?.name]: event.target?.value });
  };

  const showError = (error) => {
    enqueueSnackbar("Utilisateur inconnu", {
      variant: "error",
    });
    console.error(error);
  };

  return (
    <S.CContainer>
      <Box sx={{ width: "70%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={12} md={6} sx={{ ml: 1 }}></Grid>
          <Grid xs={12} md={6}>
            <S.Item>
              <ValidationGroup>
                <>
                  <S.FormContainer>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          m: 1,
                          width: { sm: "30vw", md: "25vw", lg: "15vw" },
                          borderRadius: "10px",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <S.FlexContainer>
                        <S.InputContainer isinscrit={authState.isLoggedIn}>
                          <Validate
                            name="email"
                            regex={[
                              /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              <Typography variant="body2" color="secondary">
                                "Votre email n'est pas valide"
                              </Typography>,
                            ]}
                            after={(result) => setValidationEmail(result)}
                          >
                            <TextField
                              required
                              id="Email"
                              label="Email"
                              name="email"
                              value={email}
                              placeholder="Entrez votre Email"
                              color="secondary"
                              fullWidth
                              onChange={(event) => onInputChange(event)}
                              sx={{
                                backgroundColor: " grey",
                                boxShadow: " 0px 8px 8px #566573  inset",
                                width: { sm: "30vw", md: "25vw", lg: "15vw" },
                              }}
                            />
                          </Validate>
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                            }}
                          >
                            <FormControl
                              sx={{
                                m: 1,
                                width: { sm: "30vw", md: "25vw", lg: "15vw" },
                                borderRadius: "10px",
                              }}
                              variant="outlined"
                            >
                              <FormGroup>
                                <InputLabel
                                  htmlFor="outlined-adornment-password"
                                  color="secondary"
                                >
                                  Mot de passe
                                </InputLabel>
                              </FormGroup>
                              <FormGroup>
                                <OutlinedInput
                                  id="outlined-adornment-password"
                                  type={showPassword ? "text" : "password"}
                                  color="secondary"
                                  fullWidth
                                  autoComplete="new-password"
                                  name="password"
                                  value={password}
                                  onChange={(event) => onInputChange(event)}
                                  sx={{
                                    backgroundColor: " grey",
                                    boxShadow: " 0px 8px 8px #566573  inset",
                                    borderRadius: "10px",
                                    width: {
                                      sm: "30vw",
                                      md: "25vw",
                                      lg: "15vw",
                                    },
                                  }}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <FormGroup>
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {showPassword ? (
                                            <VisibilityOff />
                                          ) : (
                                            <Visibility />
                                          )}
                                        </IconButton>
                                      </FormGroup>
                                    </InputAdornment>
                                  }
                                  label="Password"
                                />
                              </FormGroup>
                            </FormControl>
                          </Box>
                        </S.InputContainer>
                        <S.Prenom isinscrit={authState.isLoggedIn}>
                          {authState.isLoggedIn ? authState.role : ""}
                        </S.Prenom>
                        <S.ButtonLogin
                          isinscrit={authState.isLoggedIn}
                          variant="contained"
                          size="medium"
                          onClick={authHandler}
                        >
                          {authState.isLoggedIn ? "LOG OUT" : "LOG IN"}
                        </S.ButtonLogin>
                      </S.FlexContainer>
                    </Box>
                  </S.FormContainer>
                </>
              </ValidationGroup>
            </S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.CContainer>
  );
};

export default FormConnexion;
