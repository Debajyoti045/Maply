import { usePlaces } from "../contexts/PlacesContext";
import { useTranslation } from "react-i18next";

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePlaces();
  const {t} = useTranslation();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder={t("search.search1")}
    />
  );
}

export default SearchPosts;
