import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HeaderStyle from "./Header.module.css";
import LoginStyle from "../pages/LoginPage.module.css";
const Header = ({ active, handelActive, setSearchValue, setCurrentPage }) => {
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        active == "open" && handelActive("");
      }}
      className={HeaderStyle.headerStyle}
    >
      <div className={HeaderStyle.logoAndSearch}>
        <NavLink
          to="/"
          className={
            location.pathname == "/"
              ? HeaderStyle.logoSelected
              : HeaderStyle.logo
          }
        >
          Beef King
        </NavLink>
        <div className={HeaderStyle.searchComp}>
          <label
            htmlFor="search"
            style={{
              backgroundColor: "rgb(23, 23, 23)",
              height: "27px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              style={{
                color: "rgb(202, 233, 248)",
                cursor: "pointer",
              }}
              className="fa-thin fa-magnifying-glass"
            ></i>
          </label>
          <input
            maxLength="20"
            type="text"
            id="search"
            onKeyUp={(e) => {
              navigate("/menu");
              setSearchValue(e.target.value.trim());
              setCurrentPage(1);
            }}
            className={HeaderStyle.searchBar}
          />
        </div>
      </div>

      <div
        onClick={() => {
          handelActive("open");
        }}
        className={HeaderStyle.bMenu}
      >
        <i className="fa-solid fa-bars" />
      </div>

      <div
        className={
          active == "open" ? HeaderStyle.active : HeaderStyle.notActive
        }
        style={{
          position: "fixed",
          height: "100vh",
          width: "200px",
          border: "1px solid white",
          right: "0px",
          top: "-16px",
          transitionDuration: "2s",
        }}
      >
        <ul className={HeaderStyle.ulInBMenu}>
          <li className={HeaderStyle.BK}>BK</li>
          <li>
            <NavLink
              onClick={() => {
                handelActive("");
              }}
              to="/menu"
              className={
                location.pathname == "/menu"
                  ? HeaderStyle.itemSelected
                  : HeaderStyle.item
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                handelActive("");
              }}
              to="/cart"
              className={
                location.pathname == "/cart"
                  ? HeaderStyle.itemSelected
                  : HeaderStyle.item
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                handelActive("");
              }}
              to="/about"
              className={
                location.pathname == "/about"
                  ? HeaderStyle.itemSelected
                  : HeaderStyle.item
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                handelActive("");
              }}
              to="/login"
              className={
                location.pathname == "/login"
                  ? HeaderStyle.itemSelected
                  : HeaderStyle.item
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className={HeaderStyle.ul}>
        <li>
          <NavLink
            to="/menu"
            className={
              location.pathname == "/menu"
                ? HeaderStyle.itemSelected
                : HeaderStyle.item
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={
              location.pathname == "/cart"
                ? HeaderStyle.itemSelected
                : HeaderStyle.item
            }
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={
              location.pathname == "/about"
                ? HeaderStyle.itemSelected
                : HeaderStyle.item
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              handelActive("");
            }}
            to="/login"
            className={
              location.pathname == "/login"
                ? HeaderStyle.itemSelected
                : HeaderStyle.item
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
