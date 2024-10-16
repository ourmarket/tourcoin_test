"use client";
import styles from "./languageChanger.module.css";
import { useRouter, usePathname } from "../../navigation";

export default function LanguageChanger({ language }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select className={styles.select} onChange={handleChange}>
      <option value="selecciona">{language}</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="pt">Português</option>
    </select>
  );
}
