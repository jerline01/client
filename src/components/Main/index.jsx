import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const Main = () => {
  //const API = "http://localhost:8080";
  const API = "https://jerline-app.herokuapp.com";
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${API}/movielist`)
      .then((data) => data.json())
      .then((fts) => setMovies(fts));
  }, []);
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Movie Ticket Booking</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div>
        <ul className={styles.list}>
          {movies.map((fts) => (
            <Movies movie={fts} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function Movies({ movie }) {
  return (
    <div className={styles.movie_data}>
      <li className={styles.item}>
        <img src={movie.img} alt={movie.name} />
        <h2>{movie.name}</h2>
      </li>
    </div>
  );
}

export default Main;
