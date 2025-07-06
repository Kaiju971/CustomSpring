import React, { useEffect } from "react";
import {
  Circle,
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import * as S from "./localisationMap.styled";
import "./leafletMap.css";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [48.7848, 2.48626];
  const center = [48.856614, 2.3522219];
  const defaultCenter = [48.784, 2.486];

  // Fonction pour définir le centre de la carte
  const SetViewOnClick = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(defaultCenter, 13);
    }, [map]);

    return null;
  };

  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };

  // L.icon pour définir une icône personnalisée
  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/5074/5074338.png",
    iconSize: [38, 38],
  });

  return (
    <S.ContainerMain>
      {/* @ts-ignore */}
      <MapContainer scrollWheelZoom={false}>
        <SetViewOnClick />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* @ts-ignore */}
        <Marker position={position} icon={customIcon}>
          <Popup>
            129 quai de la pie <br />
            Saint-maures
          </Popup>
        </Marker>
        <LayerGroup>
          {/* @ts-ignore */}
          <Circle
            center={center}
            pathOptions={fillBlueOptions}
            radius={15000}
          />
          {/* @ts-ignore */}
          <Circle
            radius={5000}
            center={center}
            pathOptions={fillRedOptions}
            stroke={false}
          />
        </LayerGroup>
      </MapContainer>
    </S.ContainerMain>
  );
};

export default MapComponent;
