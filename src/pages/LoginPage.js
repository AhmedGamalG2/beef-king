import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginStyle from "./LoginPage.module.css";
const Login = () => {
  let location = useLocation();
  let toReg = { ...location, pathname: "/reg" };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handelSubmit = () => {
    let x = { name: "", password: "" };
    name.trim() == ""
      ? (x.name = "name is nessesary")
      : name.length < 6
      ? (x.name = "must be more than 5 characters")
      : (x.name = "");
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
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <label
            htmlFor="name"
            style={{ color: "rgb(158 158 158 ) ", cursor: "pointer" }}
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
          Login
        </button>
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            columnGap: "3px",
          }}
        >
          <div style={{ color: "rgb(158 158 158 )" }}>
            Dont have an account ?
          </div>
          <Link
            to={toReg}
            style={{
              color: "blue",

              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
