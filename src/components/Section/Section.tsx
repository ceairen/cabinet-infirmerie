import { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  centered?: boolean;
  children: ReactNode;
};

export default function Section({ centered, children }: Props) {
  return (
    <section
      className={`${styles.Section} ${
        centered !== undefined && centered === true ? styles["Centered"] : null
      }`}
    >
      {children}
    </section>
  );
}
