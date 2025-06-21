import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aakansha Singh - Full Stack Developer",
  description:
    "Computer Science student and Full Stack Developer specializing in React.js and modern web technologies.",
  keywords: "Aakansha Singh, Full Stack Developer, React.js, JavaScript, Web Developer, Computer Science",
  authors: [{ name: "Aakansha Singh" }],
  openGraph: {
    title: "Aakansha Singh - Full Stack Developer",
    description:
      "Computer Science student and Full Stack Developer specializing in React.js and modern web technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
