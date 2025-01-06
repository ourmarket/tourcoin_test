import { Navbar_index } from "@/components/navbar";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";
import styles from "./privacyPolicies.module.css";

export default function PrivacyPolicies() {
  const t = useTranslations("profile");

  const translations = {
    connect: t("connect"),
  };

  return (
    <>
      <Navbar_index marquee={false} languageReload={true} />
      <div className={styles.container}>
        <h1 className={styles.title}>Políticas de privacidad</h1>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>1. Introducción</h2>
          <p>
            TourCoin es una plataforma innovadora que utiliza la tecnología
            blockchain para facilitar transacciones y ofrecer servicios
            relacionados con viajes y turismo. Respetamos la privacidad de
            nuestros usuarios y nos comprometemos a proteger sus datos
            personales. Esta política de privacidad describe cómo recopilamos,
            utilizamos, compartimos y protegemos la información que nos
            proporcionas.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>2. Datos que recopilamos</h2>
          <ul>
            <li>
              Información de registro: Nombre, correo electrónico, dirección de
              billetera, contraseña.
            </li>
            <li>
              Datos de uso: Historial de navegación, transacciones realizadas,
              interacción con la plataforma
            </li>
            <li>
              Datos de ubicación: Información sobre la ubicación geográfica del
              usuario (si se habilita).
            </li>
            <li>
              Información de cookies: Utilizamos cookies y tecnologías similares
              para recopilar información sobre cómo interactúas con nuestros
              servicios y para personalizar tu experiencia.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>3. Uso de los datos</h2>
          <ul>
            <li>
              Personalización: Utilizaremos tus datos para personalizar tu
              experiencia en la plataforma, mostrándote contenido relevante y
              ofertas personalizadas.
            </li>
            <li>
              Seguridad: Tus datos nos ayudan a verificar tu identidad y
              proteger tu cuenta
            </li>
            <li>
              Análisis: Analizamos los datos agregados para mejorar nuestros
              servicios y comprender mejor las necesidades de nuestros usuarios.
            </li>
            <li>
              Marketing: Podemos utilizar tus datos para enviarte comunicaciones
              de marketing, como boletines informativos y promociones, siempre y
              cuando hayas dado tu consentimiento.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>4. Compartir datos</h2>
          <p>Podemos compartir tus datos con:</p>
          <ul>
            <li>
              Personalización: Utilizaremos tus datos para personalizar tu
              experiencia en la plataforma, mostrándote contenido relevante y
              ofertas personalizadas.
            </li>
            <li>
              Seguridad: Tus datos nos ayudan a verificar tu identidad y
              proteger tu cuenta
            </li>
            <li>
              Análisis: Analizamos los datos agregados para mejorar nuestros
              servicios y comprender mejor las necesidades de nuestros usuarios.
            </li>
            <li>
              Marketing: Podemos utilizar tus datos para enviarte comunicaciones
              de marketing, como boletines informativos y promociones, siempre y
              cuando hayas dado tu consentimiento.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>5. Seguridad de los datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para
            proteger tus datos personales de acceso no autorizado, alteración,
            divulgación o destrucción. Sin embargo, ten en cuenta que ningún
            sistema de seguridad es completamente infalible
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>6. Derechos de los usuarios</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>
              Acceder a tus datos: Solicitar una copia de los datos que tenemos
              sobre ti.
            </li>
            <li>
              Rectificar tus datos: Corregir cualquier información inexacta o
              incompleta.
            </li>
            <li>
              Eliminar tus datos: Solicitar la eliminación de tus datos, sujeto
              a ciertas restricciones legales y operativas.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>7. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política de privacidad periódicamente. Te
            notificaremos cualquier cambio importante.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>8. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre esta política de privacidad, puedes
            contactarnos a través del correo info@tour-coin.com
          </p>
        </section>
        <section className={styles.section} style={{ borderBottom: "none" }}>
          <h2 className={styles.subtitle}>Importante:</h2>
          <ul>
            <li>
              Adaptación a las leyes locales: Consulta con un abogado
              especializado en protección de datos para asegurarte de que la
              política cumpla con todas las leyes aplicables en Argentina y
              Brasil.
            </li>
            <li>
              Traducción: Traduce la política a portugués para cumplir con los
              requisitos legales en Brasil.
            </li>
            <li>
              Revisión periódica: Revisa y actualiza la política de privacidad
              regularmente para reflejar cualquier cambio en tus prácticas o en
              la legislación.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}
