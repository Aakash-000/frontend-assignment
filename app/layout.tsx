"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { AuthProvider } from '@/components/context/SearchContext';

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      <Navbar/>
      {children}
      </AuthProvider>
      </body>
    </html>
  )
}
