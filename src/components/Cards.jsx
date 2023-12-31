import React from "react";
import Card from "./Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.length > 0 ? (
        characters.map((character) => (
          <Card
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            onClose={onClose}
            image={character.image}
            key={character.id}
            id={character.id}
          />
        ))
      ) : (
        <div className={style.greenBox}>No hay personajes</div>
      )}
    </div>
  );
}
