import Card from "./Card";
import style from "./Cards.module.css";

export default function Cards({ characters }) {
  return (
    <div className={style.container}>
      {characters.map((character) => {
        return (
          <Card
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            onClose={() => window.alert("Emulamos que se cierra la card")}
            image={character.image}
            key={character.id}
            id={character.id}
          />
        );
      })}
    </div>
  );
}
