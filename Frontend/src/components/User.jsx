import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./User.module.css";
import { usePlaces } from "../contexts/PlacesContext";
import { useTranslation } from "react-i18next";

function User() {
  const {
    user,
    logout,
    isAdmin,
    setIsNotification,
    sidebarOpen,
    setSidebarOpen,
  } = useAuth();
  const navigate = useNavigate();
  const { fetchReqLocations } = usePlaces();
  function handleNotification() {
    fetchReqLocations();
    setIsNotification(true);
    setSidebarOpen(true);
  }

  function handleClick() {
    logout();
    navigate("/");
  }
  const { t } = useTranslation();

  return (
    <div
      className={styles.user}
      style={{ display: !sidebarOpen ? "block" : "none" }}
    >
      {isAdmin && (
        <NavLink to="requestedLocations">
          <button
            type="button"
            className="btn btn-primary focus"
            onClick={handleNotification}
          >
             {t("user.notifications")}
          </button>
        </NavLink>
      )}

      <img src={user?.imageUrl} alt={user?.name} />
      <span>{t("user.welcome")} {user?.name}</span>
      <button
        type="button"
        className="btn btn-primary focus"
        onClick={handleClick}
      >
        {t("user.logout")}
      </button>
    </div>
  );
}

export default User;
