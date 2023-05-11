import React from "react";
import style from "./Card.module.css";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
}) {
  return (
    <div className={style.contain}>
      <button className={style.buttonClose} onClick={onClose}>
        X
      </button>
      <img src={image} alt="" />
      <h2>Name: {name}</h2>
      <h2>Status: {status} </h2>
      <h2>Species: {species} </h2>
      <h2>Gender: {gender} </h2>
      <h2>Origin: {origin} </h2>
    </div>
  );
}
