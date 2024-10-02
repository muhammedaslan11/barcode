import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Barcode Cosmetics - Professional Cosmetic Solutions" />
        <meta name="keywords" content="cosmetics, beauty, skincare, Barcode, professional, Hairdresser" />
        <meta name="author" content="Barcode Cosmetics" />
        <meta property="og:title" content="Barcode Cosmetics - Professional Cosmetic Solutions" />
        <meta property="og:description" content="Discover professional cosmetic products with Barcode Cosmetics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barcodecosmetics.com" />
        <meta property="og:image" content="../../public/medias/barcode-dark.png" />
        <meta name="twitter:card" content="../../public/medias/barcode-dark.png" />
        <meta name="twitter:title" content="Barcode Cosmetics - Professional Cosmetic Solutions" />
        <meta name="twitter:description" content="Discover professional cosmetic products with Barcode Cosmetics." />
        <meta name="twitter:image" content="../../public/medias/barcode-dark.png" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <title>Barcode Cosmetics</title>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
