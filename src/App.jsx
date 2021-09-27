import { EcomerceGrid } from "./EcomerceGrid";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>E-comerce</h1>
      </header>

      <main>
        <EcomerceGrid />
      </main>
    </div>
  );
}
