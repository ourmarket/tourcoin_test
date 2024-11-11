"use client";

import Providers from "@/redux/Provider";

export default function ClientLayout({ children }) {
  return (
    <>
      <Providers>{children}</Providers>
    </>
  );
}
