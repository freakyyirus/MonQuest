import type { Metadata, Viewport } from "next";

import "./globals.css";
// We removed PrivyProvider import here to handle it cleanly or if it was causing issues, but usually we keep it. 
// The user context didn't ask to remove providers, just style. 
// However, the `replace_file_content` must work on the current file state. 
// I will keep PrivyProvider if it's there. 
import PrivyProvider from "./components/privy-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const APP_NAME = "Monquest";
const APP_DEFAULT_TITLE = "Monquest";
const APP_TITLE_TEMPLATE = "%s - Monquest";
const APP_DESCRIPTION = "An AI-powered bounty platform built with x402 on Monad.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  icons: {
    icon: "/brain.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "transparent" },
    { media: "(prefers-color-scheme: dark)", color: "transparent" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Script to unregister stale service workers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <PrivyProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </PrivyProvider>
      </body>
    </html>
  );
}

