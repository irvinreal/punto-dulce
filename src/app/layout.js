import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Punto Dulce',
  description: 'Reposteria fina',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
