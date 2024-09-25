import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import Header from "./components/Header/page";
import SideMenu from "./components/SideMenu/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </div>
  );
}
