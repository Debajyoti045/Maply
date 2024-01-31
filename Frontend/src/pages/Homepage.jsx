import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          {t("home.banner_text_1")}
          <br />
          {t("home.banner_text_2")}
        </h1>
        <h2>{t("home.sub_text_1")}</h2>
        <Link to="/app" className="cta">
          {t("home.start_tracking")}
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
