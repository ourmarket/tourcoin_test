"use client";

import Providers from "@/redux/Provider";
import { Whatsapp } from "@/components/whatsapp";

export default function ClientLayout({ children }) {
  return (
    <>
      <div>
        <Whatsapp />
      </div>
      <Providers>{children}</Providers>
    </>
  );
}
