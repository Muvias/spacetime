import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

import { cookies } from 'next/headers';

import { Copyright } from '@/components/Copyright';
import { EmptyMemories } from '@/components/EmptyMemories';
import { Hero } from '@/components/Hero';
import { SignIn } from '@/components/SignIn';
import { Profile } from '@/components/Profile';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.Js, TailwindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>

        <main className="grid grid-cols-2 min-h-screen">
          {/* Esquerda */}
          <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10">
            {isAuthenticated ? <Profile /> : <SignIn />}

            <div className="absolute h-[288px] w-[526px] right-0 top-1/2 bg-blue-700 opacity-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-full" />
            <div className="absolute w-2 right-2 top-0 bottom-0 bg-stripes" />

            <Hero />

            <Copyright />
          </div>

          {/* Direita */}
          <div className="flex flex-col max-h-screen overflow-y-scroll">
            {children}
          </div>
        </main>
        
      </body>
    </html>
  )
}
