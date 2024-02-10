import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css"

function HomePage() {
  return (
    <div>
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
      
      <footer className={styles.footer}>

        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/ankit-kum/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          
        </div>
        <div className={styles.footerBottom}>
          <p>
             Copyright &copy;2024 Maply.  Designed by{" "}
            <span className={styles.designer}>Ankit Kumar</span>
            <span className={styles.designer}>Vidya Sagar</span>
            <span className={styles.designer}>Debajyoti Das</span>

          </p>
        </div>
      </footer>

      
    </main>
    </div>
  );
}

export default HomePage;
