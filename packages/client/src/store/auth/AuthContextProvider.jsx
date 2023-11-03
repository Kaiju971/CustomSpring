import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import authReducer, { defaultAuthState } from "./authReducer";

// Auth context
const authCtx = createContext({
  authState: defaultAuthState,
  globalLogInDispatch: () => {},
  globalLogOutDispatch: () => {},
});

export const AuthContextProvider = (props) => {
  const { children } = props;
  const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
  const navigate = useNavigate();

  // Check if user detail is persisted, mostly catering for refreshing of the browser
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      authDispatch({ type: "LOG_IN", payload: userData });
    }
  }, []);

  const globalLogInDispatch = useCallback(
    (props) => {
      const { authToken, email, nom, prenom, userId, id_role, role } = props;
      authDispatch({
        type: "LOG_IN",
        payload: {
          authToken,
          userId,
          nom,
          prenom,
          email,
          id_role,
          role,
        },
      });
      navigate("/produit");
    },
    [navigate]
  );

  const globalLogOutDispatch = useCallback(() => {
    authDispatch({ type: "LOG_OUT", payload: null });
    // console.log(authState);
    navigate("/accueil");
  }, [navigate]);

  // context values to be passed down to children
  const ctx = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
  };

  return <authCtx.Provider value={ctx}>{children}</authCtx.Provider>;
};

export default authCtx;
