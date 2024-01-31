import { useState } from "react";
import styles from "./SignUp.module.css";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { createUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email && password && name) {
      console.log(name);
      const res = await createUser(name, email, password);
      if (res.error) {
        alert(res.error);
        setEmail("");
        setName("");
        setPassword("");
      } else {
        alert("User created Successfully!");
        navigate("/login");
      }
    }
  }
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="name"> {t("signup_page.name")}</label>
          <input
            type="name"
            id="name"
            placeholder={t("signup_page.namePlaceholder")}
            minLength={3}
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email"> {t("signup_page.email")}</label>
          <input
            type="email"
            id="email"
            required
            placeholder={t("signup_page.emailPlaceholder")}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password"> {t("signup_page.password")}</label>
          <input
            type="password"
            id="password"
            required
            minLength={7}
            placeholder={t("signup_page.passwordPlaceholder")}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary"> {t("signup_page.signup")}</Button>
        </div>
      </form>
    </main>
  );
}

export default SignUp;
