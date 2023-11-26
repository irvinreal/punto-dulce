import { Inter } from 'next/font/google'
import Header from '../components/Header/Header.jsx'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Punto Dulce',
  description: 'Pastelería, Repostería y Panadería'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
