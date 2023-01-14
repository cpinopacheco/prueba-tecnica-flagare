import logo from "../../assets/img/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-2">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className={styles.rectangle}></div>
          <div className={styles.rectangle}></div>
          <div className={styles.rectangle}></div>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item m-2 m-lg-3 fs-5">
              <a
                className="nav-link active text-white text-center"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown fs-5">
              <a
                className="nav-link dropdown-toggle text-white text-center m-2 m-lg-3"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    enlace 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    enlace 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    enlace 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item m-2 m-lg-3 ">
              <a className="nav-link text-white text-center fs-5" href="#">
                Proyectos
              </a>
            </li>
            <li className="nav-item m-2 m-lg-3">
              <a className="nav-link text-white text-center fs-5" href="#">
                Contáctenos
              </a>
            </li>
            <button className="btn btn-primary text-white text-uppercase m-2 m-lg-3">
              Ingresar
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
