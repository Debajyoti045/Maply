import { useNavigate, useParams } from "react-router-dom";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MarkerClusterGroup from "react-leaflet-cluster";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
  Polyline,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { usePlaces } from "../contexts/PlacesContext";
import { useAuth } from "../contexts/AuthContext";

function Map() {
  const { places } = usePlaces();
  const [mapPostion, setMapPosition] = useState([
    23.841112178011606, 91.42143033325355,
  ]);
  const [mapLat, mapLng] = useUrlPosition();
  const [showPolyLine, setShowPolyLine] = useState(false);
  const [flag, setFlag] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [destination, setDestination] = useState(null);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const {
    presentLocationIcon,
    pinLocationIcon,
    pinLocation,
    hostelLocationIcon,
    restaurantLocationIcon,
    playgroundLocationIcon,
    departmentLocationIcon,
    otherLocationIcon,
    pinDeleteByUser,
  } = usePlaces();
  const { isAdmin } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (userLocation && destination) {
        try {
          const response = await axios.get(
            `https://router.project-osrm.org/route/v1/driving/${userLocation[1]},${userLocation[0]};${destination[1]},${destination[0]}?steps=true&geometries=geojson`
          );
          console.log(response);
          console.log(
            "Route Coordinates:",
            response.data.routes[0].geometry.coordinates
          );
          setRoute(response.data.routes[0].geometry.coordinates);
        } catch (error) {
          console.error("Error fetching route:", error);
        }
      }
    };

    fetchData();
  }, [userLocation, destination]);

  useEffect(
    function () {
      if (mapLat || mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  function handleDestination(e) {
    setShowPolyLine(false);
    setDestination([e.latlng.lat, e.latlng.lng]);
  }

  function handleCurrentLocation() {
    getPosition();
    setShowPolyLine(true);
    setUserLocation([geolocationPosition.lat, geolocationPosition.lng]);
  }

  function getMarkerIcon(type) {
    switch (type) {
      case "hostel":
        return hostelLocationIcon;
      case "restaurant":
        return restaurantLocationIcon;
      case "playground":
        return playgroundLocationIcon;
      case "department":
        return departmentLocationIcon;
      default:
        return otherLocationIcon;
    }
  }

  function handlePinDelete(oneLoc) {
    pinDeleteByUser(oneLoc.latitude, oneLoc.longitude);
  }

  return (
    <div className={`${styles.mapContainer}`}>
      <Button
        type="position"
        onClick={() => {
          getPosition();
          setFlag(true);
        }}
      >
        {isLoadingPosition ? "Loading..." : "Use Your Position"}
      </Button>
      <MapContainer
        center={mapPostion}
        zoom={16}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <Marker icon={presentLocationIcon} position={mapPostion}></Marker>

        {route && showPolyLine && (
          <Polyline
            positions={route.map((coord) => [coord[1], coord[0]])}
            color="blue"
          />
        )}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!isAdmin &&
          pinLocation?.map((oneLoc, i) => {
            return (
              <Marker
                key={i}
                icon={pinLocationIcon}
                position={[oneLoc.latitude, oneLoc.longitude]}
              >
                <Tooltip>
                  <span>{oneLoc.name}</span>
                </Tooltip>
                <Popup>
                  <div>
                    <div>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => handlePinDelete(oneLoc)}
                      ></i>
                      <span style={{ color: "yellow" }} className="mx-3">
                        {oneLoc.name}
                      </span>
                    </div>
                    <span>{oneLoc.message}</span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        {flag && geolocationPosition && (
          <Marker
            icon={presentLocationIcon}
            position={geolocationPosition}
          ></Marker>
        )}
        {places?.map((place) => {
          const icon =
            place.latitude !== mapPostion[0]
              ? getMarkerIcon(place.type)
              : presentLocationIcon;
          return (
            <Marker
              icon={icon}
              position={[place.latitude, place.longitude]}
              key={place._id}
              eventHandlers={{
                click: (e) => {
                  handleDestination(e);
                },
              }}
            >
              <Tooltip>
                <span>{place.name}</span>
              </Tooltip>
              <Popup>
                <div>
                  <img
                    src="https://i.ytimg.com/vi/iCLoSqlTmyM/maxresdefault.jpg"
                    alt="Image"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <span>{place.name}</span>
                  <Button type="primary" onClick={handleCurrentLocation}>
                    &#8680;
                  </Button>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <ChangeCenter position={mapPostion} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const Map = useMap();
  Map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
