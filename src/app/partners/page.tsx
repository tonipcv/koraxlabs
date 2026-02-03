'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Globe } from 'lucide-react';
import { useLanguage } from '@/app/components/LanguageProvider';

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    instagram: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validação básica
    if (!formData.name || !formData.email || !formData.whatsapp) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      setLoading(false);
      return;
    }

    try {
      // Envio para a API
      const response = await fetch('/api/partners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Processando a resposta
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar o formulário');
      }
      
      // Se tudo der certo, mostrar mensagem de sucesso
      setSuccess(true);
      
      // Limpar o formulário
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        instagram: '',
      });
    } catch (err: any) {
      console.error('Erro ao enviar dados:', err);
      setError(err.message || 'Ocorreu um erro ao enviar seus dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      {/* Navbar */}
      <nav className="fixed w-full top-0 border-b border-white/5 backdrop-blur-md z-40 transition-all duration-300">
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

      <div className="max-w-7xl mx-auto px-6 relative">
        <main className="pt-32 pb-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="absolute inset-0 bg-white/[0.02] blur-3xl -z-10" />
            <h1 className="text-5xl sm:text-6xl font-satoshi tracking-[-0.03em] leading-tight mb-6">
              <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                EARN BETWEEN $2,000 AND $20,000+ PER MONTH
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-satoshi tracking-[-0.03em] leading-tight mb-6">
              <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                WORKING AS A CLOSER
              </span>
            </h2>
            <p className="text-lg text-zinc-400 font-euclidCircularB tracking-[-0.04em] max-w-2xl mx-auto">
              Join our team of closers and unlock your earning potential. Fill out the form below to get started.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            {success ? (
              <div className="bg-white/5 border border-white/10 p-12 text-center rounded-sm">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <Check size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-satoshi tracking-[-0.03em] mb-4">
                  <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                    Registration Successful!
                  </span>
                </h3>
                <p className="text-zinc-400 mb-8">
                  Thank you for your interest! Our team will contact you soon with the next steps.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB transition-all duration-300"
                >
                  <span>Register Again</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="text-2xl font-satoshi tracking-[-0.03em] mb-6 text-center">
                  <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                    Apply as a Closer
                  </span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400 mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400 mb-2">
                      WhatsApp* (with country/area code)
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="+1 555 555 5555"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="instagram" className="block text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-400 mb-2">
                      Instagram (without @)
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="your.profile"
                      disabled={loading}
                    />
                  </div>
                  
                  {error && (
                    <p className="text-sm text-red-400 mt-2">{error}</p>
                  )}
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className={`w-full px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-euclidCircularB tracking-[-0.04em] transition-all duration-300 flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <span>APPLY AS CLOSER</span>
                          <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-xs text-zinc-500 font-euclidCircularB tracking-[-0.04em] text-center pt-4">
                    Your data is secure and will not be shared with third parties.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-satoshi tracking-[-0.03em] mb-10 text-center">
              <span className="bg-gradient-to-r from-white/95 to-white/60 text-transparent bg-clip-text">
                Why become a Closer?
              </span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <h4 className="text-xl font-satoshi tracking-[-0.03em] mb-4 text-white/90">
                  High Earnings
                </h4>
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em]">
                  Earning potential between $2,000 and $20,000+ per month with attractive commissions.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <h4 className="text-xl font-satoshi tracking-[-0.03em] mb-4 text-white/90">
                  Flexibility
                </h4>
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em]">
                  Work from anywhere, with flexible hours and autonomy to manage your schedule.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <h4 className="text-xl font-satoshi tracking-[-0.03em] mb-4 text-white/90">
                  Complete Training
                </h4>
                <p className="text-zinc-400 font-euclidCircularB tracking-[-0.04em]">
                  Receive specialized training and ongoing support to maximize your results.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Made by KRX */}
        <footer className="pb-8 text-center">
          <p className="text-sm font-euclidCircularB tracking-[-0.04em] text-zinc-600">
            {t('home.madeBy')} <span className="text-zinc-500">krx</span>
          </p>
        </footer>
      </div>
    </div>
  );
} 