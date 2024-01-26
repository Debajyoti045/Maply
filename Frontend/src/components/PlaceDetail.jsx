import styles from "./PlaceDetail.module.css";
import Spinner from "./Spinner";
import BackButton from "./BackButton";
import { usePlaces } from "../contexts/PlacesContext";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useState } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function PlaceDetail() {
  const latLng = useUrlPosition();
  const { isLoading, addPlace, requestedLocations } = usePlaces();
  const { isAdmin, isNotification } = useAuth();

  function getLocationByLatitude(latitude) {
    for (const location of requestedLocations) {
      if (location.latitude === latitude) {
        return location;
      }
    }
    // If not found
    return null;
  }
  const curP = getLocationByLatitude(latLng[0]);

  function handleAccept() {
    addPlace(curP.name, curP.latitude, curP.longitude, curP.type);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.place}>
      <div className={styles.row}>
        <h6>Place name</h6>
        {/* <h3>{curP.name}</h3> */}
      </div>
      <div className={styles.row}>
        <h6>Type</h6>
        {/* <h3>{curP.type}</h3> */}
      </div>

      <div className={styles.row}>
        {/* <h6>You went to {curP.name} on</h6> */}
        <p>{formatDate(Date.now() || null)}</p>
      </div>

      <div className={styles.buttons}>
        {isAdmin && isNotification && (
          <Button type="primary" onClick={handleAccept}>
            Accept
          </Button>
        )}
        <BackButton />
      </div>
    </div>
  );
}

export default PlaceDetail;

/*

import styles from "./PlaceDetail.module.css";
import Spinner from "./Spinner";
import BackButton from "./BackButton";
import { usePlaces } from "../contexts/PlacesContext";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useNavigate } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function PlaceDetail() {
  const navigate = useNavigate();
  const latLng = useUrlPosition();
  const { isLoading, addPlace, requestedLocations } = usePlaces();
  const { isAdmin } = useAuth();

  function getLocationByLatitude(latitude) {
    for (const location of requestedLocations) {
      if (location.latitude === latitude) {
        return location;
      }
    }
    // If not found
    return null;
  }
  const curP = getLocationByLatitude(latLng[0]);

  function handleAccept() {
    addPlace(curP.name, curP.latitude, curP.longitude, curP.type);
    navigate(-2);
  }

  // console.log(currentPlace);
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.place}>
      <div className={styles.row}>
        <h6>Place name</h6>
        <h3>{curP.name}</h3>
      </div>
      <div className={styles.row}>
        <h6>Type</h6>
        <h3>{curP.type}</h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {curP.name} on</h6>
        <p>{formatDate(Date.now() || null)}</p>
      </div>


      <div className={styles.buttons}>
        {isAdmin && (
          <Button type="primary" onClick={handleAccept}>
            Accept
          </Button>
        )}
        <BackButton />
      </div>
    </div>
  );
}

export default PlaceDetail;

*/
