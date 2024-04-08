import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HorizontalList.module.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type HorizontalListElement = {
  title: string;
  text: string;
  icon: IconDefinition;
};

type Props = {
  list: HorizontalListElement[];
};

export default function HorizontalList({ list }: Props) {
  return (
    <ul className={styles.HorizontalList}>
      {list.map(({ title, text, icon }, i) => {
        return (
          <li key={i}>
            <FontAwesomeIcon icon={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
}
