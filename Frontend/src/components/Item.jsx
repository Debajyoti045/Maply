import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function Item({ currentPlace }) {
  const { name, date, latitude, longitude, _id } = currentPlace;
  const isAdmin = true;

  function handleDelete(e) {
    e.preventDefault();
    // deleteCity(id);
  }

  // console.log(city);

  return (
    <li>
      <Link
        className={`${styles.placeItem} ${
          currentPlace._id === _id ? styles["placeItem--active"] : ""
        }`}
        to={`${_id}?lat=${latitude}&lng=${longitude}`}
      >
        <h3 className={styles.name}>{name}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        {isAdmin && (
          <button className={styles.deleteBtn} onClick={handleDelete}>
            x
          </button>
        )}
      </Link>
    </li>
  );
}

export default Item;
