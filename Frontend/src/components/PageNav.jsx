import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";

function PageNav() {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            {t("button.login")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={styles.ctaLink}>
            {t("button.signup")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
