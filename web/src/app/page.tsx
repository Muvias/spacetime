import Image from 'next/image';

import { User } from 'lucide-react';

import logo from '../assets/logo.svg';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Esquerda */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10">
        {/* usuário / login */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='w-5 h-5 text-gray-500' />
          </div>

          <p className='text-sm leading-snug max-w-[140px]'>
            <span className='underline'>Crie sua conta</span> e salve suas memórias!
          </p>
        </a>

        <div className="absolute h-[288px] w-[526px] right-0 top-1/2 bg-blue-700 opacity-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-full" />
        <div className="absolute w-2 right-2 top-0 bottom-0 bg-stripes" />

        {/* conteúdo */}
        <div className='space-y-5'>
          <Image src={logo} alt='Logo Spacetime' />

          <div className='max-w-[420px] space-y-1'>
            <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <a className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors' href="">CADASTRAR LEMBRANçA</a>
        </div>

        {/* copyright */}
        <div className='text-sm leading-relaxed text-gray-200'>Projeto desenvolvido na NLW da Rocketseat</div>
      </div>

      {/* Direita */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center w-[360px]">
          <p className="text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50 transition-colors">
              criar agora
            </a>!
          </p>
        </div>
      </div>

    </main>
  );
}
