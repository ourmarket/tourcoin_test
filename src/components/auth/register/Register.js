"use client";
import { Link } from "@/navigation";
import styles from "./Register.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Register() {
  const [countries, setCountries] = useState([]);

  // Fetch countries from the API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedCountries = response.data
          .map((country) => country.name.common)
          .sort();
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Registrarse</h1>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input type="text" id="name" className={styles.input} required />
          <label htmlFor="lastName" className={styles.label}>
            Apellido
          </label>
          <input type="text" id="lastName" className={styles.input} required />

          <label htmlFor="country" className={styles.label}>
            País
          </label>
          <select id="country" className={styles.input} required>
            <option value="">Selecciona un país</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>

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
          <label htmlFor="rePassword" className={styles.label}>
            Repite la Contraseña
          </label>
          <input
            type="password"
            id="rePassword"
            className={styles.input}
            required
          />

          <button type="submit" className={styles.button}>
            Registrarse
          </button>
        </form>
        <p className={styles.footer}>
          ¿Ya tienes cuenta? <Link href="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
}
