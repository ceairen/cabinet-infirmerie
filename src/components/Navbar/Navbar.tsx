import { MouseEventHandler, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

enum AppNavSections {
  accueil = "Accueil",
  presentation = "Présentation",
  nosinfirmiers = "Nos infirmiers",
  notrecabinet = "Notre cabinet",
  contact = "Contact",
}

export default function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/") {
      setActive((active) => "accueil");
    } else {
      setActive((active) => pathname.split("/")[1]);
    }
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement> | undefined) {
    if (!e) return;
    e.preventDefault();
    /*
    const { currentTarget } = e;
    const href = currentTarget.getAttribute("data-href");
    if (!href) return;
    setActive((active) => href);
    navigate(href);
    */
  }

  return (
    <nav className={styles.Nav}>
      <ul>
        {Object.entries(AppNavSections).map(([k, v], i) => {
          return (
            <li key={i} className={`${active === k ? styles.Active : null}`}>
              <a onClick={handleClick} data-href={k} href={k}>
                {v}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
