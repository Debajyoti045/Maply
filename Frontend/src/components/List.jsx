import Item from "./Item";
import styles from "./List.module.css";
import Spinner from "./Spinner";
import { usePlaces } from "../contexts/PlacesContext";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";

function List({ commonLocation }) {
  const { isNotification } = useAuth();
  const { isLoading } = usePlaces();
  const {t} = useTranslation();
  if (isLoading) return <Spinner />;

  return (
    <>
      {isNotification && <h1>{t("list.h")}</h1>}
      <hr></hr>
      <ul className={styles.placeList}>
        {commonLocation.map((place) => (
          <Item key={place._id} currentPlace={place} />
        ))}
      </ul>
    </>
  );
}

export default List;
