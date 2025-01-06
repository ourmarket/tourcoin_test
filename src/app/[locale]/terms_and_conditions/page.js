import { Navbar_index } from "@/components/navbar";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";
import styles from "./TermsAndConditions.module.css";

export default function TermsAndConditions() {
  const t = useTranslations("profile");

  return (
    <>
      <Navbar_index marquee={false} languageReload={true} />
      <div className={styles.container}>
        <h1 className={styles.title}>Términos y Condiciones</h1>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>1. Introducción</h2>
          <p>
            Bienvenido a TourCoin. Estos Términos y Condiciones regulan el uso
            de nuestros servicios, productos y la plataforma relacionada con la
            criptomoneda TourCoin (el Servicio). Al acceder y utilizar TourCoin,
            aceptas cumplir con estos términos. Si no estás de acuerdo con
            ellos, no deberías usar nuestros servicios.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>2. Definiciones</h2>
          <ul>
            <li>
              <strong>TourCoin:</strong> Es un token criptográfico utilizado
              como medio de pago en nuestra plataforma y en alianzas.
            </li>
            <li>
              <strong>Plataforma:</strong> Aplicaciones, sitio web y cualquier
              otro servicio digital donde se interactúa con TourCoin.
            </li>
            <li>
              <strong>Usuario:</strong> Toda persona que acceda, use o participe
              en los servicios de TourCoin.
            </li>
            <li>
              <strong>Alianzas:</strong> Establecimientos turísticos, comercios
              y servicios que aceptan TourCoin como medio de pago.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>3. Aceptación de los Términos</h2>
          <p>
            Al utilizar nuestra plataforma, confirmas que tienes 18 años o más,
            que cumples con todas las leyes locales aplicables y que aceptas
            estos términos y condiciones. Si TourCoin actualiza estos términos,
            se te notificará, y continuar utilizando la plataforma tras dichos
            cambios implicará tu aceptación.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>4. Uso del Servicio</h2>
          <p>
            TourCoin te permite realizar pagos en establecimientos afiliados que
            han aceptado TourCoin como forma de pago. También puedes utilizar el
            token para interactuar con nuestros productos, incluyendo staking y
            otros servicios adicionales. El uso indebido de la plataforma está
            prohibido, incluyendo la creación de múltiples cuentas con fines
            fraudulentos, o cualquier intento de hackeo o manipulación del
            sistema.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>5. Responsabilidad y Alianzas</h2>
          <p>
            TourCoin establece alianzas comerciales con terceros
            (establecimientos turísticos, comercios, etc.) que aceptan nuestro
            token como forma de pago. Sin embargo, TourCoin y su equipo no son
            responsables de ninguna actividad, evento o incidente que ocurra en
            estos establecimientos. Esto incluye, sin limitación, cualquier daño
            personal, lesiones, accidentes o mala prestación de servicios en los
            establecimientos aliados. TourCoin no garantiza la calidad o la
            seguridad de los servicios prestados por los aliados, y cualquier
            queja o disputa relacionada con dichos servicios debe ser gestionada
            directamente con el establecimiento correspondiente.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>6. Limitación de Responsabilidad</h2>
          <p>
            TourCoin no se responsabiliza por la pérdida de fondos o por el mal
            uso de tus credenciales de acceso (como contraseñas o claves
            privadas). Es responsabilidad del usuario mantener segura su
            información de acceso. En caso de pérdida de contraseñas, hackeos, o
            cualquier incidente relacionado con la seguridad de las cuentas,
            TourCoin no será responsable por pérdidas financieras ni otras
            consecuencias. Además, TourCoin no será responsable por
            fluctuaciones en el valor del token ni por la pérdida de dinero
            derivada de movimientos de mercado o transacciones con terceros
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>7. Sistema de Staking</h2>
          <p>
            TourCoin no se responsabiliza por la pérdida de fondos o por el mal
            uso de tus credenciales de acceso (como contraseñas o claves
            privadas). Es responsabilidad del usuario mantener segura su
            información de acceso. En caso de pérdida de contraseñas, hackeos, o
            cualquier incidente relacionado con la seguridad de las cuentas,
            TourCoin no será responsable por pérdidas financieras ni otras
            consecuencias. Además, TourCoin no será responsable por
            fluctuaciones en el valor del token ni por la pérdida de dinero
            derivada de movimientos de mercado o transacciones con terceros
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>8. Transacciones y Pagos</h2>
          <p>
            Los usuarios pueden realizar pagos en criptomonedas o moneda
            fiduciaria a través de la plataforma, dependiendo de la
            disponibilidad. Al utilizar TourCoin para realizar transacciones, el
            usuario acepta que:
          </p>
          <ul>
            <li>Las transacciones con criptomonedas son irreversibles.</li>
            <li>
              Los descuentos ofrecidos en las alianzas (como el 30% de descuento
              por pagar con TourCoin) están sujetos a las políticas de cada
              establecimiento.
            </li>
            <li>
              Las tarifas por uso de servicios de pago o publicidad son
              establecidas por TourCoin y pueden ser modificadas sin previo
              aviso.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>9. Seguridad y Privacidad</h2>
          <p>
            Nos tomamos en serio la seguridad de la plataforma y la privacidad
            de los usuarios. Sin embargo, no podemos garantizar una seguridad
            total contra hackeos o ataques. El usuario es responsable de
            proteger sus dispositivos, redes y contraseñas. Cualquier pérdida
            derivada de negligencia o falta de medidas de seguridad adecuadas
            por parte del usuario no será responsabilidad de TourCoin.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>10. Modificación de los Servicios</h2>
          <p>
            TourCoin se reserva el derecho de modificar o descontinuar
            cualquiera de los servicios ofrecidos en cualquier momento, sin
            previo aviso. Esto incluye actualizaciones del sistema de staking,
            alianzas comerciales, tarifas de publicidad o cualquier otra
            funcionalidad de la plataforma.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>11. Propiedad Intelectual</h2>
          <p>
            TourCoin se reserva el derecho de modificar o descontinuar
            cualquiera de los servicios ofrecidos en cualquier momento, sin
            previo aviso. Esto incluye actualizaciones del sistema de staking,
            alianzas comerciales, tarifas de publicidad o cualquier otra
            funcionalidad de la plataforma.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>12. Exclusión de Garantías</h2>
          <p>
            La plataforma TourCoin y sus servicios se proporcionan tal cual, sin
            garantías de ningún tipo, ya sean expresas o implícitas. No
            garantizamos que el servicio sea ininterrumpido, seguro o libre de
            errores. Tampoco garantizamos la estabilidad del valor de TourCoin
            ni el éxito financiero derivado de su uso.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>13. Resolución de Disputas</h2>
          <p>
            Cualquier disputa relacionada con el uso de TourCoin o la plataforma
            deberá ser resuelta mediante arbitraje en la jurisdicción
            correspondiente:
          </p>
          <ul>
            <li>
              Argentina: Para usuarios argentinos, cualquier disputa se regirá
              por las leyes de Argentina.
            </li>
            <li>
              Brasil: Para usuarios brasileños, cualquier disputa se regirá por
              las leyes de Brasil.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>14. Jurisdicción y Ley Aplicable</h2>
          <p>
            Estos términos se regirán y se interpretarán de acuerdo con las
            leyes de los países donde TourCoin tiene registro:
          </p>
          <ul>
            <li>
              Argentina: Los usuarios de Argentina están sujetos a las leyes
              locales y cualquier disputa será resuelta en tribunales de
              Argentina.
            </li>
            <li>
              Brasil: Los usuarios de Brasil están sujetos a las leyes locales y
              cualquier disputa será resuelta en tribunales de Brasil.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>15. Contacto</h2>
          <p>
            Si tienes dudas o necesitas más información sobre estos términos,
            puedes contactarnos a través de nuestros canales oficiales de
            atención al cliente.
          </p>
        </section>
        <section className={styles.section} style={{ borderBottom: "none" }}>
          <h2 className={styles.subtitle}>16. Renuncia a Indemnizaciones</h2>
          <p>
            Al aceptar estos Términos y Condiciones, el usuario renuncia
            expresamente a cualquier derecho a solicitar indemnización,
            compensación o cualquier tipo de reclamación económica o de otro
            tipo hacia TourCoin, sus fundadores, empleados, aliados comerciales
            o cualquier entidad relacionada, por:
          </p>
          <ul>
            <li>El uso de la plataforma TourCoin</li>
            <li>La adquisición o transacción con el token TourCoin</li>
            <li>
              La interacción con alianzas comerciales o el uso de productos y
              servicios relacionados con TourCoin.
            </li>
            <li>
              Cualquier daño o perjuicio directo o indirecto derivado del uso de
              la plataforma o de la participación en actividades de staking,
              incluyendo fluctuaciones en el valor del token, hackeos, pérdida
              de contraseñas, o fallos técnicos de la plataforma.
            </li>
          </ul>
          <p>
            El usuario entiende y acepta que el uso de TourCoin y sus servicios
            se realiza bajo su propio riesgo, y que no tiene derecho a reclamar
            compensación alguna a TourCoin, sus afiliados o terceras partes.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
