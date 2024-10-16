import { Link } from "@/navigation";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Correo Electrónico
          </label>
          <input type="email" id="email" className={styles.input} required />

          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            required
          />

          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
        <p className={styles.footer}>
          ¿No tienes cuenta? <Link href="/auth/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}
