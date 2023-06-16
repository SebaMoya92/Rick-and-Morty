import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
  addFavorite,
  removeFavorite,
  myFavorites,
  showCloseButton = true,
}) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        origin,
        onClose,
        image,
        addFavorite,
        removeFavorite,
      });
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.contain}>
      {showCloseButton && (
        <button className={style.buttonClose} onClick={() => onClose(id)}>
          X
        </button>
      )}
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <h2 className={style.name}> {name}</h2>

      <img src={image} alt="" />
      <h2>Status: {status} </h2>
      <h2>Species: {species} </h2>
      <h2>Gender: {gender} </h2>
      <h2>Origin: {origin} </h2>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
