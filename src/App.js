import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <div className={style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <Cards characters={characters} />
    </div>
  );
}

export default App;
