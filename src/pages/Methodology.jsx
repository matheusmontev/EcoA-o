import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Methodology = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error', ''

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      await addDoc(collection(db, 'newsletter'), {
        email,
        timestamp: new Date()
      });
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
    }
  };

  const steps = [
    { id: '01', title: 'Diagnóstico', desc: 'Levantamento profundo de hábitos e escuta ativa da comunidade para entender as dores e potenciais locais.', color: 'bg-primary-fixed text-on-primary-fixed', tag: 'Análise' },
    { id: '02', title: 'Planejamento', desc: 'Organização de oficinas colaborativas onde cada voz é ouvida, desenhando soluções em conjunto.', color: 'bg-secondary-fixed text-on-secondary-fixed', tag: 'Estratégia' },
    { id: '03', title: 'Execução', desc: 'Vivências lúdicas e práticas. O fazer que ensina, transforma e gera conexão imediata com o ambiente.', color: 'bg-tertiary-fixed text-on-tertiary-fixed', tag: 'Ação' },
    { id: '04', title: 'Mostra Cultural', desc: 'Celebração e exposição de resultados para toda a comunidade, validando o aprendizado coletivo.', color: 'bg-primary-fixed text-on-primary-fixed', tag: 'Impacto' },
    { id: '05', title: 'Avaliação', desc: 'Ciclo de feedback contínuo para fortalecer futuras iniciativas e garantir a sustentabilidade do projeto.', color: 'bg-surface-variant text-on-surface-variant', tag: 'Evolução' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden bg-surface">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-6 origin-top-left z-0"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                Nosso Manifesto Educativo
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-extrabold tracking-tight leading-[1.05] text-on-surface mb-8">
                O Nosso <br /> 
                <span className="text-primary italic">Ciclo Vivo</span>
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
                Uma abordagem participativa e interdisciplinar que transforma o aprendizado em um ecossistema de crescimento constante e consciência plena.
              </p>
              <button 
                onClick={() => document.getElementById('fluxo').scrollIntoView({behavior: 'smooth'})} 
                className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
              >
                Explorar Jornada
                <span className="material-symbols-outlined font-bold">arrow_downward</span>
              </button>
            </div>
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border-[32px] border-primary/10 rounded-full"></div>
                <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[120px] text-primary/20">eco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo da Descoberta Section */}
      <section id="fluxo" className="bg-surface-container-low py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 lg:mb-32">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface tracking-tight mb-8 leading-tight">
                O <span className="text-primary">Fluxo</span> da Descoberta
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                Nossa jornada não é uma lição isolada, mas uma espiral de evolução contínua adaptada à realidade de cada participante.
              </p>
            </div>
            <div className="hidden lg:block">
              <span className="text-9xl font-headline font-black text-on-surface/5 select-none uppercase tracking-widest">MÉTODO</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-surface-container-lowest p-10 rounded-[2.5rem] border border-outline-variant/20 shadow-ambient hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center font-bold text-xl mb-8 group-hover:rotate-12 transition-transform shadow-lg`}>
                  {step.id}
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-10 opacity-80 flex-grow font-light">
                  {step.desc}
                </p>
                <div className="pt-6 border-t border-outline-variant/10">
                  <span className="px-3 py-1 rounded-full bg-outline-variant/20 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                    {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiradores Section */}
      <section className="bg-surface py-20 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-stretch">
            {/* Paulo Freire */}
            <div className="flex flex-col p-10 md:p-14 bg-surface-container-low rounded-[3rem] border border-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-10">format_quote</span>
              <blockquote className="text-2xl md:text-4xl font-headline italic font-bold text-on-surface leading-tight mb-12 flex-grow">
                "Educação não transforma o mundo. <br />
                <span className="text-primary">Educação muda pessoas.</span> <br />
                Pessoas transformam o mundo."
              </blockquote>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary-fixed shadow-xl">
                  <img className="w-full h-full object-cover grayscale" alt="Paulo Freire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3bctlu3Pp3LLOAitrRble3mnP5veUJ7vE9OeqJWiTtxHmoPuh6X7ppzng6BLUYef5Xn7GSa7n54_Cwdg5Vym0t9iOlW_U1goiTopefSmA3-Y9sgvAfLYLQyrFeSOWgrhfUOAZvgHSkIxKLylJqMO7qXcjlq1mxsgDvlnOizwbSHqxKVFHmeH6cYKJ37-8_0NvlaMJcXunJhl5hc28k9qZht0YUCFehJcHSz4cm0mDvv4lcc4HcefelWTyTI2BhHgl4ONdpD0j5SmZ"/>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">Paulo Freire</h4>
                  <p className="text-[11px] text-primary uppercase tracking-[0.2em] font-bold">Patrono da Educação Brasileira</p>
                </div>
              </div>
            </div>

            {/* Moacir Gadotti */}
            <div className="flex flex-col p-10 md:p-14 bg-surface-container-low rounded-[3rem] border border-secondary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-secondary mb-10">format_quote</span>
              <blockquote className="text-2xl md:text-4xl font-headline italic font-bold text-on-surface leading-tight mb-12 flex-grow">
                "A sustentabilidade é um <br />
                <span className="text-secondary font-black">novo paradigma</span> <br />
                de civilização."
              </blockquote>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-secondary-fixed shadow-xl">
                  <img className="w-full h-full object-cover grayscale" alt="Moacir Gadotti" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIhzBdE3_MRnZyeEFCE8RaiWdrwH094CK7uS7hTGsqBjdfAv1Fwkqh5mjztnB57GltqcG91P140DVMdwEp7yOc4Ll90dRFgDhMzdxxGVUBhd4xka3sb5E_Yg2yI6TOFKB-SK0hwozmZO7j5P2PsN3bTLBKZxl2Ds70vWoBs1VV7TGRGw-r4__TQ4tdZrU9yP6zyta-WNnrn6VVu--cPmByejkM3JEdj-OMmbxR5k3cxOWOmOio14OOc6HEhCYDKNSSn9_1B9p2nHNt"/>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">Moacir Gadotti</h4>
                  <p className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">Educador e Ecopedagogo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-surface pb-20 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-primary text-on-primary rounded-[3rem] lg:rounded-[5rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 tracking-tight">Cultive essa ideia <br /> conosco.</h2>
              <p className="text-base md:text-xl opacity-80 leading-relaxed font-light mb-12 max-w-lg">Receba atualizações sobre projetos que estão florescendo em comunidades locais.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl" onSubmit={handleSubscribe}>
                <input 
                  className="px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 w-full outline-none focus:bg-white/20 transition-all font-medium" 
                  placeholder="Seu melhor e-mail" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="px-10 py-5 bg-surface text-primary rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-2xl disabled:opacity-50"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : 'Participar'}
                </button>
              </form>
              {status === 'success' && <p className="mt-4 text-sm font-bold text-tertiary-fixed">Email cadastrado com sucesso!</p>}
              {status === 'error' && <p className="mt-4 text-sm font-bold text-error">Erro ao cadastrar. Tente novamente.</p>}
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary-fixed/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Methodology;
