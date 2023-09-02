"use client"
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

import Hero from "../components/Hero";
import Products from "../components/Products";

export default function Home() {

  const queryClient = new QueryClient()

  return (
    <main className="relative">
    <QueryClientProvider client={queryClient}>
    <Hero/>
    <Products searchTerm=""/>
    </QueryClientProvider>
    </main>
  )
}
