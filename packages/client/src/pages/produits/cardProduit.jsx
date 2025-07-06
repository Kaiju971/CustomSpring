import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


import * as S from "./produit.styled";

export default function CardProduit({ element }) {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    if (element?.image) {
      setDataUrl(`data:image/jpeg;base64,${element.image}`);
    }
  }, [element]);
  return (
    <S.Grid>
      <Card sx={{ maxWidth: 345, backgroundColor: "colorVertPastel.main" }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={dataUrl} alt="moto" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element.titre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element.marque}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element.modele}
            </Typography>
            <ul>
              <li> Annee: {element?.annee}</li>
              <li> Prix: {element?.prix}</li>
              <li> Kilometrage: {element?.kilometrage}</li>
              <li>Puissance fiscale: {element?.cylindree}</li>
              <li> Puissance motor: {element?.puissance_moteur}</li>
              <li> Boite vitesse: {element?.boite_vitesse}</li>
            </ul>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Appeler
          </Button>
          <Button size="small" color="primary">
            Envoyer un message
          </Button>
        </CardActions>
      </Card>
    </S.Grid>
  );
}
