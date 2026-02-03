'use client'

import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/app/components/LanguageProvider'
import NewsletterForm from '@/app/components/NewsletterForm'

export default function NewsletterPage() {
  const { t, language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full border-b border-white/5 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
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
            </Link>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{language === 'pt' ? 'PT' : 'EN'}</span>
              </button>
              <Link
                href="/blog"
                className="text-sm tracking-[-0.04em] font-euclidCircularB text-zinc-400 hover:text-white transition-colors"
              >
                <span className="sm:inline">{t('nav.blog')}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Newsletter Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight mb-6">
              <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                {t('blog.newsletter')}
              </span>
            </h1>
            
            <p className="text-white/80 text-lg mb-2">
              Stay updated with the latest news on AI.
            </p>
            
            <p className="text-zinc-400">
              Subscribe to receive tips, tools, and insights about the world of Artificial Intelligence.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Made by KRX */}
      <footer className="pb-8 text-center">
        <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
          {t('home.madeBy')} <span className="text-zinc-500">krx</span>
        </p>
      </footer>
    </div>
  )
} 