import { usePlaces } from "../contexts/PlacesContext";
import List from "./List";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";

function Departments() {
  const { places, isLoading } = usePlaces();
  const {t} = useTranslation();
  const departments = places.filter((place) => {
    return place.type === "department";
  });

  if (isLoading) return <Spinner />;
  if (!departments?.length)
    return <h2 className="text-center">{t("department.dep")}</h2>;

  return <List commonLocation={departments} />;
}

export default Departments;
