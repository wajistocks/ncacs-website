import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FloatingDonate from "./components/FloatingDonate";

export const metadata = {
  metadataBase: new URL("https://ncacs.org"),
  title: {
    default: "NCACS — Ngemba Cultural Association of Colorado Springs",
    template: "%s | NCACS",
  },
  description:
    "Ngemba Cultural Association of Colorado Springs (NCACS) — a proud African cultural organization fostering unity, networking, and collective growth. Established 2025, Colorado Springs, Colorado.",
  keywords: [
    "NCACS",
    "Ngemba",
    "Cultural Association",
    "Colorado Springs",
    "Cameroon",
    "Bamenda",
    "African Community",
    "Bafut",
    "Mankon",
    "Ngemba Heritage",
  ],
  openGraph: {
    title: "NCACS — Ngemba Cultural Association of Colorado Springs",
    description:
      "Fostering Unity and Strength Through Social Engagement, Networking, and Collective Growth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NCACS — Ngemba Cultural Association of Colorado Springs",
    description:
      "Fostering Unity and Strength Through Social Engagement, Networking, and Collective Growth.",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <FloatingDonate />
        <Footer />
      </body>
    </html>
  );
}
