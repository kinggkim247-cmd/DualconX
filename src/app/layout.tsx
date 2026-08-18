import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { DualconXGrid } from "@/components/DualconXGrid";

export const metadata: Metadata = {
  title: 'DualconX Forensics | Expert Crypto & Digital Asset Recovery',
  description: 'Professional forensic recovery services for lost or stolen cryptocurrency and digital assets. Trusted worldwide with a 94% success rate.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - AW-18141846129 */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18141846129" 
          strategy="afterInteractive" 
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18141846129');
          `}
        </Script>

        {/* Google Tag Manager - GTM-TJ56BMBX */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJ56BMBX');
          `}
        </Script>
        {/* End Google Tag Manager */}
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary-foreground">
        {/* Google Tag Manager (noscript) - Fallback for every page */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ56BMBX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* Evidence Grid Background — fixed, full-viewport, behind all content */}
        <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
          <DualconXGrid className="w-full h-full opacity-100" />
        </div>

        <div className="relative z-10">
          {children}
        </div>
        
        <Toaster />

        {/* Tawk.to Live Support - Applied to every page */}
        <Script id="tawk-setup" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          `}
        </Script>
        <Script 
          id="tawk-to" 
          src="https://embed.tawk.to/69dc8db265fbbc1c34b46a20/1jm2oj0sg"
          strategy="afterInteractive"
          crossOrigin="*"
        />
      </body>
    </html>
  );
}
