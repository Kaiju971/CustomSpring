import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useSnackbar } from "notistack";
import axios from "../../axios";
import AuthContext from "../../store/auth/AuthContextProvider";
import Inscription from "../inscription/inscription";

import * as S from "./admin.styled";

const AdminAPIKey = "";

const Admin = () => {
  const { authState } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const [userdata, setUserdata] = useState([]);
  const [disabledId, setDisabledId] = useState("");
  const [editedData, setEditedData] = useState({});
  const [user, setUser] = useState({
    id: 0,
    nom: "",
    prenom: "",
    email: "",
    password: "",
    role: "",
    id_role: 0,
  });
  const [userId, setUserId] = useState(0);

  const onInputChange = (event, itemId) => {
    setUser({
      ...user,
      [event.target?.name]: event.target?.value,
    });

    setEditedData((prevData) => ({
      ...prevData,
      [itemId]: {
        ...prevData[itemId],
        [event.target?.name]: event.target?.value,
      },
    }));
  };

  const fetchGet = async () => {
    const headers = {
      "x-access-token": authState.authToken,
    };
    await axios
      .get(`users`, { headers })
      .then((response) => {
        setUserdata(response.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchGet();
  }, []);

  const fetchDelete = async (id) => {
    const requete = {
      params: {
        id: id,
      },
      headers: {
        "x-access-token": authState.authToken,
      },
    };
    await axios
      .delete(`delete`, requete)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (id) => {
    fetchDelete(id);
  };

  const fetchPut = async (id) => {
    const params = {
      data: user,
      id: id,
    };
    const headers = {
      "x-access-token": authState.authToken,
    };
    await axios
      .put("update", params, { headers })
      .then((response) => setUserId(response.data.results[0].id))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (userId)
      enqueueSnackbar("L'utilisateur est modifié avec succès", {
        variant: "success",
      });
  }, [userId]);

  const handlePut = (id) => {
    if (disabledId === "") setDisabledId(id);
    else {
      if (Object.keys(editedData).length) {
        setUser({
          ...user,
          email: editedData[id].email,
        });
        fetchPut(id);
      } else
        enqueueSnackbar("Aucun changement effectué", {
          variant: "info",
        });
      setDisabledId("");
    }
  };

  return (
    <S.MainContainer>
      <Typography variant="h3">Admin page</Typography>
      <br />
      <Inscription />

      <br />
      <br />
      <S.GridContainer>
        <div>№</div>
        <div>Role</div>
        <div>Nom</div>
        <div>Prénom</div>
        <div>Email</div>
        <div>Modifier</div>
        <div>Delete</div>
      </S.GridContainer>
      {userdata.map((item, index) => (
        <S.GridContainer key={item.id}>
          <div>{index + 1}</div>
          <S.TextFieldContainer>
            <TextField
              variant="standard"
              type="text"
              fullWidth
              name="role"
              value={editedData[item.id]?.role || item?.role}
              disabled={disabledId === item?.id.toString() ? false : true}
              onChange={(e) => onInputChange(e, item?.id)}
            />
          </S.TextFieldContainer>
          <S.TextFieldContainer>
            <TextField
              variant="standard"
              type="text"
              fullWidth
              name="nom"
              value={editedData[item.id]?.nom || item?.nom}
              disabled={disabledId === item?.id.toString() ? false : true}
              onChange={(e) => onInputChange(e, item?.id)}
            />
          </S.TextFieldContainer>
          <S.TextFieldContainer>
            <TextField
              variant="standard"
              type="text"
              fullWidth
              name="prenom"
              value={editedData[item.id]?.prenom || item?.prenom}
              disabled={disabledId === item?.id.toString() ? false : true}
              onChange={(e) => onInputChange(e, item?.id)}
            />
          </S.TextFieldContainer>
          <S.TextFieldContainer>
            <TextField
              variant="standard"
              type="text"
              fullWidth
              name="email"
              value={editedData[item.id]?.email || item?.email}
              disabled={disabledId === item?.id.toString() ? false : true}
              onChange={(e) => onInputChange(e, item?.id)}
            />
          </S.TextFieldContainer>

          <div>
            <Button onClick={() => handlePut(item?.id.toString())}>
              Modifier
            </Button>
          </div>
          <div>
            <Button onClick={() => handleDelete(item?.id)}>DELETE</Button>
          </div>
        </S.GridContainer>
      ))}
    </S.MainContainer>
  );
};

export default Admin;
