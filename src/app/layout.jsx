import Footer from "@/layouts/Footer/Footer";
import Navbar from "@/layouts/Navbar/Navbar";
import "@/styles/globals.scss";
import "@/styles/reset.scss";
import LenisProvider from "@/utils/LenisProvider";

export const metadata = {
  title: "Cooderz",
  description: "Cooderz: Launch better now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="rating" content="general" />
        <meta name="rating" content="5" />
        <meta name="revisit" content="3" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords"
          content="Cooderz, Neiro, Ponke, Ovpp, Sol, Solana, Crypto, Studio, Development, Launch, Cooderz Launch, Cooderz Sol" />
        <meta property="og:site_name" content="cooderz.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cooderz" />
        <meta property="og:image" content="https://www.cooderz.tech/favicon/logo.svg" />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <meta name="thumbnail" content="https://www.cooderz.tech/favicon/logo.svg" />
        <meta property="og:url" content="https://www.cooderz.tech/" />
        <meta property="og:description"
          content="Cooderz: Launch better now." />
        <meta name="twitter:url" content="https://www.cooderz.tech/" />
        <meta name="twitter:title" content="Cooderz" />
        <meta name="twitter:description"
          content="Cooderz: Launch better now." />
        <meta name="twitter:image" content="https://www.cooderz.tech/favicon/logo.svg" />
        <meta name="apple-mobile-web-app-title" content="Cooderz" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <link rel="shortcut icon" href="/favicon/logo.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/logo.svg" />

        {/* Inlyne Script */}
        <script src="https://app.inlyne.ai/scripts/preview.js" async></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
      </head>

      <body>
        <Navbar />

        <LenisProvider>
          {children}
        </LenisProvider>

        <Footer />
      </body>
    </html>
  );
}
