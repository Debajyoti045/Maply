import { usePlaces } from "../contexts/PlacesContext";
import List from "./List";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";

function Others() {
  const { places, isLoading } = usePlaces();
  const {t} = useTranslation();
  const others = places.filter((place) => {
    return place.type === "others";
  });

  if (isLoading) return <Spinner />;
  if (!others?.length) return <h2 className="text-center">{t("others.oth")}</h2>;

  return <List commonLocation={others} />;
}

export default Others;
