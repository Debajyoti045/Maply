import Spinner from "./Spinner";
import { usePlaces } from "../contexts/PlacesContext";
import List from "./List";
import { useTranslation } from "react-i18next";

function AllList() {
  const { places, isLoading } = usePlaces();
  const { t } = useTranslation();
  if (isLoading) return <Spinner />;
  if (!places?.length) return <h2>{t("alllist.h")}</h2>;
  return <List commonLocation={places} />;
}

export default AllList;
