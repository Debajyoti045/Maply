import { usePlaces } from "../contexts/PlacesContext";
import List from "./List";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";


function Restaurants() {
  const { places, isLoading } = usePlaces();
  const { t } = useTranslation();
  const restaurants = places.filter((place) => {
    return place.type === "restaurant";
  });

  if (isLoading) return <Spinner />;
  if (!restaurants?.length) return <h2>{t("restaurants.restaurant")}</h2>;

  return <List commonLocation={restaurants} />;
}

export default Restaurants;
