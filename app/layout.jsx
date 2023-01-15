import './globals.css'
import { createBrowserSupabaseClient, createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import Header from './Header'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-gradient-to-br from-gray-800 via-black to-gray-700 w-screen h-screen">

        <Header />
        {children}
      </body>
    </html>
  )
}