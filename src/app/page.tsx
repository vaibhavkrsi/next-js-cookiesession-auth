import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <p>This Page is visible to everyone.</p>
    </div>
  );
}
