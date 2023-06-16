import { useSelector } from "react-redux";
import Card from "./Card";
import style from "./Favorites.module.css";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.container}>
      {favorites.map((character) => {
        return (
          <Card
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            key={character.id}
            id={character.id}
            showCloseButton={false}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
