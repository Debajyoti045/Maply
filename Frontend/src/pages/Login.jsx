import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";

export default function Login() {
  const navigate = useNavigate();
  // PRE-FILL FOR DEV PURPOSES
  const { loginAdmin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const [userType, setUserType] = useState("user");
  
  
  function handleSubmit(e) {
    
    e.preventDefault();
    
    if (email && password) {
      if (userType === "admin") {
        loginAdmin(email, password);
      } else {
        login(email, password);
      }
    }
  }

  useEffect(
    function () {
      
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
    );
    
    const { t } = useTranslation();
    return (
    
    <main className={styles.login}>
      <div>
        <PageNav />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          className={"form-select"}
          aria-label="Default select example"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="user">{t("login_page.user")}</option>
          <option value="admin">{t("login_page.admin")}</option>
        </select>
        <div className={styles.row}>
          <label htmlFor="email">{t("login_page.email")}</label>
          <input
            type="email"
            id="email"
            placeholder={t("login_page.emailPlaceholder")}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password"> {t("login_page.password")}</label>
          <input
            type="password"
            id="password"
            minLength={7}
            placeholder={t("login_page.passwordPlaceholder")}
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">{t("login_page.login")}</Button>
        </div>
      </form>
    </main>
  );
}
