import Item from "./Item";
import styles from "./List.module.css";
import Spinner from "./Spinner";
import { usePlaces } from "../contexts/PlacesContext";

function List({ commonLocation }) {
  const { isLoading } = usePlaces();
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.placeList}>
      {commonLocation.map((place) => (
        <Item key={place._id} currentPlace={place} />
      ))}
    </ul>
  );
}

export default List;
