import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FastPass - 難関企業の面接で、選ばれる力を就活早期から。",
  description: "AI面接練習と早期特別選考で、外資・メガベン・日系大手をはじめとする難関企業への就職を有利に進めよう",
  openGraph: {
    title: "FastPass - 難関企業の面接で、選ばれる力を就活早期から。",
    description: "AI面接練習と早期特別選考で、外資・メガベン・日系大手をはじめとする難関企業への就職を有利に進めよう",
    images: ["/FastPassOGP画像.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastPass - 難関企業の面接で、選ばれる力を就活早期から。",
    description: "AI面接練習と早期特別選考で、外資・メガベン・日系大手をはじめとする難関企業への就職を有利に進めよう",
    images: ["/FastPassOGP画像.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QC8V94HZCE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QC8V94HZCE');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u7sndhuqy8");
          `}
        </Script>
      </body>
    </html>
  );
}
