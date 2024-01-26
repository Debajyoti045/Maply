import { useNavigate } from "react-router-dom";
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
  const { user, logout, isAdmin, setReqNav, setIsNotification } = useAuth();
  const navigate = useNavigate();
  const { fetchReqLocations } = usePlaces();

  function handleNotification() {
    fetchReqLocations();
    setReqNav((curr) => !curr);
    setIsNotification((curr) => !curr);
  }

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      {isAdmin && (
        <button
          type="button"
          class="btn btn-primary focus"
          onClick={handleNotification}
        >
          Notifications
        </button>
      )}
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button type="button" class="btn btn-primary focus" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default User;
