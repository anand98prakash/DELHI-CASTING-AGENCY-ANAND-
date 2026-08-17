// import { Cormorant_Garamond, Inter, Cinzel } from "next/font/google";
// import type { Metadata } from "next";
// import { Cormorant_Garamond, Inter } from "next/font/google";
// import "./globals.css";
// import { Analytics } from "@/components/analytics";
// import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

// const cinzel = Cinzel({
//   variable: "--font-cinzel",
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   display: "swap",
// });

// const cormorant = Cormorant_Garamond({
//   variable: "--font-cormorant",
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   style: ["normal", "italic"],
//   display: "swap",
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Way to Bollywood | Delhi Casting Agency",
//   description:
//     "Become a verified member of Delhi Casting Agency and get access to real, verified casting calls across Bollywood, OTT, TV, fashion and brand campaigns.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
//       <body className="min-h-screen">
//         <Analytics />
//         <SmoothScrollProvider>{children}</SmoothScrollProvider>
//       </body>
//     </html>
//   );
// }

//==========================================================

// import type { Metadata } from "next";
// import { Cormorant_Garamond, Inter, Cinzel } from "next/font/google";
// import "./globals.css";
// import { Analytics } from "@/components/analytics";
// import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

// /* ✅ Fonts */
// const cinzel = Cinzel({
//   variable: "--font-cinzel",
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   display: "swap",
// });

// const cormorant = Cormorant_Garamond({
//   variable: "--font-cormorant",
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   style: ["normal", "italic"],
//   display: "swap",
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   display: "swap",
// });

// /* ✅ Metadata */
// export const metadata: Metadata = {
//   title: "Way to Bollywood | Delhi Casting Agency",
//   description:
//     "Become a verified member of Delhi Casting Agency and get access to real, verified casting calls across Bollywood, OTT, TV, fashion and brand campaigns.",
// };

// /* ✅ Layout */
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={`${cormorant.variable} ${inter.variable} ${cinzel.variable}`}
//     >
//       <body>
//         <SmoothScrollProvider>
//           {children}
//           <Analytics />
//         </SmoothScrollProvider>
//       </body>
//     </html>
//   );
// }
//======================================================================

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Cinzel } from "next/font/google";

import "./globals.css";

import { Analytics } from "@/components/analytics";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Way to Bollywood | Delhi Casting Agency",
  description:
    "Become a verified member of Delhi Casting Agency and get access to real, verified casting calls across Bollywood, OTT, TV, fashion and brand campaigns.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${cinzel.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          {/* Global Navbar */}
          <Navbar />

          {/* Page Content */}
          <main>{children}</main>

          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}