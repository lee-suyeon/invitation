import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import MainSection from "./sections/MainSection";
import IntroSection from "./sections/IntroSection";

export default function Home() {
  return (
    <div>
      <MainSection />
      <IntroSection />
    </div>
  );
}
