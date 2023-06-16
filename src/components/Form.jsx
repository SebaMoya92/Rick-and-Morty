import { useState } from "react";
import validation from "./validation-form";
import style from "./Form.module.css";

function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  }

  function submitHandler(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={style.loginBox}>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div className={style.userBox}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <p>{errors.username}</p>
        </div>
        <div className={style.userBox}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p>{errors.password}</p>
        </div>

        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Form;
