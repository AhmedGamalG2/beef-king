import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginStyle from "./LoginPage.module.css";
const Reg = () => {
  ////Location
  let location = useLocation();
  let toLogin = { ...location, pathname: "/login" };
  ////State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  ///Handelers
  const handelSubmit = () => {
    let x = { name: "", password: "" };
    name.trim() == ""
      ? (x.name = "name is nessesary")
      : name.length < 6
      ? (x.name = "must be more than 5 characters")
      : (x.name = "");
    email.trim() == ""
      ? (x.email = "email is nessesary")
      : email.length < 6
      ? (x.email = "must be more than 5 characters")
      : (x.email = "");
    password == ""
      ? (x.password = "password is nessesary")
      : password.length < 6
      ? (x.password = "must be more than 5 characters")
      : (x.password = "");
    setErrors(x);
  };

  return (
    <div className={LoginStyle.cont}>
      <div className={LoginStyle.subCont}>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <label
            htmlFor="name"
            style={{ color: "rgb(158 158 158 )", cursor: "pointer" }}
          >
            User name
          </label>
          <input
            maxLength="20"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="name"
            className={LoginStyle.element}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <label
            htmlFor="email"
            style={{ color: "rgb(158 158 158 )", cursor: "pointer" }}
          >
            Email
          </label>
          <input
            maxLength="50"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className={LoginStyle.element}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <label
            htmlFor="password"
            style={{ color: "rgb(158 158 158 )", cursor: "pointer" }}
          >
            Password
          </label>
          <input
            maxLength="20"
            value={password}
            onChange={(e) => {
              e.target.value != " " && setPassword(e.target.value);
            }}
            id="password"
            className={LoginStyle.element}
            type="password"
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>

        <button onClick={() => handelSubmit()} className={LoginStyle.btn}>
          Submit
        </button>
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            columnGap: "3px",
            color: "rgb(158 158 158 )",
          }}
        >
          <div>Already have account ?</div>
          <Link
            to={toLogin}
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reg;
