"use client";
import styles from "./languageChanger.module.css";

export default function LanguageChangerReload({ language }) {
  const handleChange = (e) => {
    const newLocale = e.target.value;

    // Obtener la ruta actual
    const currentPathname =
      typeof window !== "undefined" ? window.location.pathname : "";

    // Construir la nueva URL con el nuevo idioma
    const newUrl = `/${newLocale}${currentPathname.replace(/^\/[a-z]{2}/, "")}`;

    // Actualizar la URL y recargar la página
    window.location.href = newUrl;
  };

  return (
    <select
      className={styles.select}
      onChange={handleChange}
      defaultValue={language}
    >
      <option value="selecciona">{language}</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="pt">Português</option>
    </select>
  );
}
