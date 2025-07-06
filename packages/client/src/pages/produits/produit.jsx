import { Grid } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import CardProduit from "./cardProduit";
import axios from "../../axios";

import * as S from "./produit.styled";

export default function Produits({ element }) {
  const [produitdata, setProduitdata] = useState([]);

  const fetchGet = async () => {
    await axios
      .get(`products`)
      .then((response) => {
        setProduitdata(response.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <Grid container spacing={4}>
      {produitdata.map((item, index) => (
        <Grid item xs={4}>
          <CardProduit key={index} element={item} />
        </Grid>
      ))}
    </Grid>
  );
}
