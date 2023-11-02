import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import moto from "../../images/1-300x171.jpg";

import * as S from "./produit.styled";



export default function MultiActionAreaCard() {
  return (

    
    <S.Grid>
      <S.Grid1>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="240" image={moto} alt="katana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Katana
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
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
      </S.Grid1>
      <S.Grid2>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="240" image={moto} alt="katana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Katana
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
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
      </S.Grid2>
    </S.Grid>
  );
}
