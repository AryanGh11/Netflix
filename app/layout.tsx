import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My app',
  description: 'God',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href={"/ssr"}>SSR</Link>
          <Link href={"/csr"}>CSR</Link>
          <Link href={"/"}>Home</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
