import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navbar'

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage_grotesque.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
