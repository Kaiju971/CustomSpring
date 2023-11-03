import React from "react";
import * as S from "./MapQuest.styled";

export default function MapQuest() {
  L.mapquest.key = "IPG4EFsiRL1oUzIs63ccsZZEyj1qpqQG";

  // 'map' refers to a <div> element with the ID map
  // L.mapquest.map("map", {
  //   center: [37.7749, -122.4194],
  //   layers: L.mapquest.tileLayer("map"),
  //   zoom: 12,
  // });

  return (
    <S.Container>
      {L.mapquest.map("map", {
        center: [37.7749, -122.4194],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12,
      })}
    </S.Container>
  );
}

// L.mapquest.key = "IPG4EFsiRL1oUzIs63ccsZZEyj1qpqQG";

// // 'map' refers to a <div> element with the ID map
// L.mapquest.map("map", {
//   center: [37.7749, -122.4194],
//   layers: L.mapquest.tileLayer("map"),
//   zoom: 12,
// });
