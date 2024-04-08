import { useEffect, useState } from "react";
import styles from "./TeamList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

type TeamListElement = {
  firstName: string;
  lastName: string;
  description: string;
};

export default function TeamList() {
  const [teamList, setTeamList] = useState<TeamListElement[] | null>(null);

  function resolveTeamList(): TeamListElement[] {
    return [
      {
        firstName: "Marc",
        lastName: "Marco",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        firstName: "Gisèle",
        lastName: "Mars",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
    ];
  }

  useEffect(() => {
    setTeamList((teamList) => resolveTeamList());
  }, []);

  return teamList ? (
    <ul className={styles.TeamList}>
      {teamList.map(({ firstName, lastName, description }, i) => {
        return (
          <li key={i}>
            <span>
              <FontAwesomeIcon icon={faUserAstronaut} />
            </span>
            <label>
              {firstName} {lastName}
            </label>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <label>Chargement...</label>
  );
}
