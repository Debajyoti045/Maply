import { usePlaces } from "../contexts/PlacesContext";
import List from "./List";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";

function Hostels() {
  const { places, isLoading } = usePlaces();
  const {t} = useTranslation();
  const hostels = places.filter((place) => {
    return place.type === "hostel";
  });

  if (isLoading) return <Spinner />;
  if (!hostels?.length) return <h2 className="text-center">{t("hostels.hos")}</h2>;

  return <List commonLocation={hostels} />;
}

export default Hostels;
