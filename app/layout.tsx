import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/GetCurrentUser";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sims',
  description: 'Sim app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const currentUser =  await getCurrentUser()
  return (
    <html lang="en">
      <body className={inter.className}>
      <ClientOnly>
          <ToasterProvider/>
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
      </ClientOnly>
      {children}
      </body>
    </html>
  )
}
