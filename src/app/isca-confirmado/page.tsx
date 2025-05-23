'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function IscaConfirmadoPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-white/5 backdrop-blur-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <g stroke="white" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="128" y1="128" x2="256" y2="256" />
                  <line x1="256" y1="256" x2="384" y2="128" />
                  <line x1="256" y1="256" x2="128" y2="384" />
                  <line x1="256" y1="256" x2="384" y2="384" />
                  <line x1="256" y1="128" x2="256" y2="384" />
                </g>
              </svg>
              <span className="text-xl tracking-[-0.03em] font-satoshi">KRX</span>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/careers"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="hidden sm:inline">CAREERS</span>
                <span className="sm:hidden text-xs">JOBS</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="min-h-screen flex flex-col">
          {/* Success Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-8 relative -mt-20">
              <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/5 mb-4">
                <svg
                  className="h-6 w-6 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-satoshi tracking-[-0.03em] leading-tight">
                <span className="text-white/90 relative inline-block group">
                  Lista Confirmada
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/20 group-hover:w-full transition-all duration-700" />
                </span>
              </h1>
              
              <p className="text-lg text-zinc-400 font-euclidCircularB tracking-[-0.04em] max-w-md mx-auto">
                Parabéns! Em breve você receberá a lista dos 33 aplicativos de IA essenciais no seu e-mail.
              </p>

              {/* Back Button */}
              <div className="pt-4">
                <Link
                  href="/"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-euclidCircularB tracking-[-0.04em] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} className="relative z-10 text-white/70 group-hover:-translate-x-1 transition-transform" />
                  <span className="relative z-10 text-white/90">VOLTAR</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Made by KRX */}
          <footer className="pb-8 text-center">
            <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
              made by <span className="text-zinc-500">krx</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
} 