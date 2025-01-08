import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientLayout from "./ClientLayout";
import { headers } from "next/headers";
import Web3ModalProvider from "@/context/Web3ModalProvider_new";

const inter = Inter({ subsets: ["latin"] });

async function fetchTitle() {
  const res = await fetch(
    "https://api.dexscreener.com/latest/dex/tokens/0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A",
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  if (data.pairs) {
    return `$${data?.pairs[0]?.priceUsd}`;
  } else {
    return "";
  }
}

export async function generateMetadata() {
  const price = await fetchTitle();

  return {
    title: `TRC ${price} - Your Guide to Travel and Cryptocurrency`,
    description:
      "Explore the world of travel and cryptocurrency with TourCoin. Learn about blockchain-powered travel solutions, discover new destinations, and earn rewards.",
    icons: {
      icon: "/icon.png",
    },
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const cookies = headers().get("cookie");
  return (
    <html lang={locale}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZWLLXWXD0"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2ZWLLXWXD0');
          `}
        </Script>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
          async
        />
      </head>

      <body className={inter.className}>
        <ClientLayout>
          <Web3ModalProvider>{children}</Web3ModalProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
