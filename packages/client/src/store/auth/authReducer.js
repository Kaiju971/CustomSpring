import { Reducer } from "react";

export const defaultAuthState = {
  isLoggedIn: false,
};

const authReducer = (state, action) => {
  // user successfully authenticated
  if (action.type === "LOG_IN") {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return {
      ...state,
      isLoggedIn: true,
      authToken: action.payload.authToken,
      userId: action.payload.userId,
      nom: action.payload.nom,
      prenom: action.payload.prenom,
      email: action.payload.email,
      id_role: action.payload.id_role,
      role: action.payload.role,
    };
  }

  // log out user
  if (action.type === "LOG_OUT") {
    localStorage.removeItem("user");
    return defaultAuthState;
  }

  return defaultAuthState;
};

export default authReducer;
