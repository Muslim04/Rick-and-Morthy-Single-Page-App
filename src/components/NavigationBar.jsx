import React from "react";
import RickAndMortyLogo from "../assets/rick&morty.svg";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={RickAndMortyLogo}
            alt="Logo"
            width="60"
            height="52"
            className="d-inline-block"
          />
        </a>

        <span className="fw-bold fs-5 mx-auto text-white">
          The Rick and Morty API
        </span>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavigationBar;
