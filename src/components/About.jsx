import React from "react";
import style from "./About.module.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.content}>
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Mi nombre es Sebastián Moya y tengo 31 años. Soy un
            apasionado de la programación y me encanta crear proyectos
            innovadores. Estoy en constante aprendizaje y desarrollo de
            habilidades para seguir creciendo en el campo de la programación.
          </p>
          <p>
            Este proyecto es el resultado de mi pasión por la programación. Aquí
            podrás encontrar información sobre los personajes de la serie Rick &
            Morty, agregar tus favoritos y explorar detalles interesantes sobre
            cada uno de ellos.
          </p>
          <p>
            Espero que disfrutes navegando por la aplicación y descubriendo más
            sobre el universo de Rick & Morty. ¡Gracias por visitar mi proyecto!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
