import { useAuth } from "../contexts/AuthContext";
import { usePlaces } from "../contexts/PlacesContext";
import List from "./List";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";

function RequestPlaces() {
  const { requestedLocations, isLoading } = usePlaces();
  const { isAdmin } = useAuth();
  console.log(requestedLocations);
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;
  if (!requestedLocations?.length)
    return <h2 className="text-center">{t("requestplace.request")}</h2>;

  return isAdmin ? (
    <List commonLocation={requestedLocations} />
  ) : (
    <h1>{t("requestplace.location")}</h1>
  );
}

export default RequestPlaces;
