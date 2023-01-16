import './globals.css'
import { createBrowserSupabaseClient, createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import Header from './Header'
import Footer from './Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-gradient-to-br from-gray-800 via-black to-gray-700 w-screen h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}