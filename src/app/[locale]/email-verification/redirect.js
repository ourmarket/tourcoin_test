"use client";
import { useRouter } from "@/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

      if (isMobile) {
        // Obtener el código desde la URL
        const { code } = router.query;
        const deepLink = `tourcoin://auth/register/step4?code=${code}`;

        // Redirigir a la app móvil
        window.location.href = deepLink;
      } else {
        // Mostrar 404 en desktop
        router.replace("/404");
      }
    }
  }, [router]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Redirigiendo a la aplicación...</h2>
      <p>
        Si no eres redirigido automáticamente, asegúrate de tener la app
        instalada.
      </p>
    </div>
  );
}
