import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
import localFont from 'next/font/local';

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Strentor",
  description: "Your Personal Transformation Journey",
}

const satoshi = localFont({
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/satoshi.ttf',
    },
  ],
  variable: '--font-satoshi',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased bg-gradient-to-r from-[#F31818]/10 via-[#00D115]/10 to-[#0D97FF]/10`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 