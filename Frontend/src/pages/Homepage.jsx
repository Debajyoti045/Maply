import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css"

function HomePage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the NIT Agartala.
          <br />
          Maply will guide you at every step in this adventure.
        </h1>
        <h2>
           A very userFriendly Map.
        </h2>
        <Link to="/app" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
