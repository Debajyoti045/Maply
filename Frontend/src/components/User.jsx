import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./User.module.css";
import { useEffect } from "react";
import { usePlaces } from "../contexts/PlacesContext";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const { user, logout, isAdmin, setIsNotification } = useAuth();
  const navigate = useNavigate();
  const { fetchReqLocations } = usePlaces();

  function handleNotification() {
    fetchReqLocations();
    setIsNotification(true);
  }

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      {isAdmin && (
        <NavLink to="requestedLocations">
          <button
            type="button"
            className="btn btn-primary focus"
            onClick={handleNotification}
          >
            Notifications
          </button>
        </NavLink>
      )}

      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button
        type="button"
        className="btn btn-primary focus"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default User;
