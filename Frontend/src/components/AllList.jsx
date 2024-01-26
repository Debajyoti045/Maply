import Spinner from "./Spinner";
import { usePlaces } from "../contexts/PlacesContext";
import List from "./List";
import { useEffect } from "react";

function AllList() {
  const { places, isLoading } = usePlaces();

  // console.log(searchedPlaces);

  if (isLoading) return <Spinner />;
  if (!places?.length) return <h2>No Places Available !!</h2>;
  return <List commonLocation={places} />;
}

export default AllList;
