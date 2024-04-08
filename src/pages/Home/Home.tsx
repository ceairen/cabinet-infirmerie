import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import HorizontalList, {
  HorizontalListElement,
} from "../../components/HorizontalList/HorizontalList";
import Section from "../../components/Section/Section";
import styles from "./Home.module.css";
import {
  faCalendar,
  faHeartPulse,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Separator from "../../components/Separator/Separator";
import TeamList from "../../components/TeamList/TeamList";

export default function Home() {
  function resolveServicesList(): HorizontalListElement[] {
    return [
      {
        title: "7 jours sur 7",
        text: "Nous sommes joignables tous les jours de l'année, de 6h30 à 20h.",
        icon: faCalendar,
      },
      {
        title: "A domicile",
        text: "Nous nous déplaçons à votre domicile pour tous types de soins.",
        icon: faHeartPulse,
      },
      {
        title: "Au cabinet",
        text: "Nous vous accueillons également à notre cabinet, sur rendez-vous.",
        icon: faHouse,
      },
    ];
  }

  return (
    <>
      <Section centered={true}>
        <h2>Cabinet d'infirmerie XXX</h2>
        <p>Nous joindre: 06.00.00.00.00</p>
      </Section>
      <Separator />
      <Section>
        <HorizontalList list={resolveServicesList()} />
      </Section>
      <Separator />
      <Section centered={true}>
        <h2>Notre équipe</h2>
        <TeamList />
      </Section>
    </>
  );
}
