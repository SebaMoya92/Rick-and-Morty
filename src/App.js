import React from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";

function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(true); // Nuevo estado para mostrar u ocultar el título

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // ! CREDENCIALES FAKE
  const username = "hello@mail.com";
  const password = "Mypass123";

  // ! EVENT HANDLERS
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
      setShowTitle(false); // Ocultar el título al avanzar a la siguiente sección
    } else {
      alert("Credenciales incorrectas");
    }
  }

  // ! RENDER

  return (
    <div className={style.container}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <div className={style.app}>
        <div className={style.nav}></div>
      </div>
      {showTitle && ( // Mostrar el título si showTitle es verdadero
        <h1 className={style.title}>RICK & MORTY</h1>
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
