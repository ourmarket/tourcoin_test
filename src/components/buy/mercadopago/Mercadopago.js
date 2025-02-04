"use client";
/* import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("TEST-e83cdee9-0718-47e4-a05f-45a0cf0729d5");

const Mercadopago = () => {
  const [amount, setAmount] = useState(1000); // ARS en centavos (ej: 1000 = $10.00)
  const [description, setDescription] = useState("Compra de tokens");

  return (
    <div>
      <h1>Comprar Tokens</h1>
      <div>
        <label>
          Monto (en centavos de ARS):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Descripción:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>

      <Wallet
        initialization={{
          preferenceId: "<PREFERENCE_ID>",
          redirectMode: "blank",
        }}
        customization={{ texts: { valueProp: "smart_option" } }}
      />
    </div>
  );
};

export default Mercadopago; */
// frontend/pages/checkout.js
import { useState } from "react";
import axios from "axios";
import Script from "next/script";
import styles from "./mercadopago.module.css";

export default function Checkout() {
  const [amount, setAmount] = useState(1000); // ARS en centavos (ej: 1000 = $10.00)
  const [description, setDescription] = useState("Compra de tokens");

  const initializeMercadoPago = async () => {
    if (!window.MercadoPago) {
      console.error("MercadoPago SDK no cargado");
      return;
    }

    const mp = new window.MercadoPago(
      process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY,
      {
        locale: "es-AR",
      }
    );

    try {
      // Obtener preferencia desde el backend
      const response = await axios.post(
        "http://localhost:3040/api/locks/create-preference",
        {
          amount,
          description,
        }
      );

      // Inicializar checkout
      mp.checkout({
        preference: {
          id: response.data.id,
        },
        autoOpen: true, // Abre el modal automáticamente
      });
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
  };

  return (
    <div className={styles.main}>
      <Script src="https://sdk.mercadopago.com/js/v2" />

      <h1>Comprar Tokens</h1>
      <div>
        <label>
          Monto (en centavos de ARS):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Descripción:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button onClick={initializeMercadoPago}>Pagar con MercadoPago</button>
    </div>
  );
}
