import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  const metrics = [
    { label: 'Hábito', value: '94%', icon: 'energy_savings_leaf', color: 'bg-primary-container text-on-primary-container' },
    { label: 'Cidadãos', value: '12k+', icon: 'groups', color: 'bg-primary text-on-primary', shift: true },
    { label: 'Consciência', value: '87%', icon: 'psychology', color: 'bg-secondary-container text-on-secondary-container' },
    { label: 'Circular', value: '2.4t', icon: 'eco', color: 'bg-tertiary-fixed text-on-tertiary-fixed', shiftY: true }
  ];

  return (
    <>
      {/* Hero Section: Impacto e Arte */}
      <section className="relative pt-20 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-[10px] tracking-widest uppercase border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Relatório de Impacto Comunitário
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tight text-on-surface leading-[0.95]">
                Impacto <br /> 
                <span className="text-primary italic">e Arte.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Transformando consciência em legado. Através da educação circular, o Lar Fabiano de Cristo redefine o futuro da sustentabilidade social com arte e presença transformadora.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link to="/atividades" className="w-full sm:w-auto px-10 py-5 bg-primary text-on-primary font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all text-center">
                  Explorar Atividades
                </Link>
                <Link className="px-10 py-5 font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 group" to="/metodologia">
                  Nossa história 
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
                </Link>
              </div>
            </div>
            
            {/* Impact Cards Grid */}
            <div className="lg:w-2/5 grid grid-cols-2 gap-4 md:gap-6">
              {metrics.map((m, i) => (
                <div 
                  key={i} 
                  className={`${m.color} p-6 md:p-10 rounded-[2.5rem] shadow-ambient transition-all duration-500 hover:scale-105 hover:rotate-2 group
                    ${m.shift ? 'lg:translate-y-12' : ''} 
                    ${m.shiftY ? 'lg:translate-y-6' : ''}`}
                >
                  <span className="material-symbols-outlined text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{m.icon}</span>
                  <div className="text-4xl md:text-5xl font-headline font-black mb-1">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-black opacity-70">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria do Amanhã */}
      <section className="bg-surface-container-low py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div id="mural" className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-6 leading-tight">
                Galeria do <span className="text-secondary">Amanhã</span>
              </h3>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed opacity-80 font-light italic">
                "Fragmentos das oficinas de ressignificação e arte circular, onde o descarte se torna expressão viva da comunidade."
              </p>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-all hover:scale-110 active:scale-90">
                <span className="material-symbols-outlined text-primary">west</span>
              </button>
              <button className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:bg-primary-container hover:text-on-primary-container transition-all hover:scale-110 active:scale-90">
                <span className="material-symbols-outlined font-black">east</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group relative overflow-hidden rounded-[3rem] shadow-2xl h-[400px] md:h-[650px] border-4 border-surface shadow-black/10">
              <img 
                alt="Workshop photo" 
                className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmKI9w5PNjBKnAhjDwjptWE8PZBqLgdqQOQaPNFnRgI2cWlXFNHHGuDx0UWsMxI9S9_tYy32ScseSjd3lw-NfTMvjp2jDslnvqLLlIi4-QmoJYyD1Ha8fVnTy46851JYk-_UOZf5Xs7Mi7bnVoP5KRYFUY0kY3I7BafB8T8Fu5_5tBrlG6zmr-h4qKHWewTC2ltxZsZDMIkBRAt_sMYmp1KhTDC_vSw6C9iihmPWWw-iWarfQSc7CDaTkR9OkU1-42TingETXLYqwD"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-14 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-primary-fixed font-black text-[10px] uppercase tracking-[0.3em] mb-3">Intercâmbio Geracional</span>
                <h4 className="text-white text-3xl md:text-5xl font-headline font-bold leading-none">Oficina de Criação <br /> Coletiva Unificada</h4>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="relative bg-secondary-fixed text-on-secondary-fixed rounded-[3rem] p-10 flex-1 flex flex-col justify-center text-center shadow-xl border border-white/10 group">
                <span className="material-symbols-outlined text-on-secondary-fixed text-6xl mb-8 block mx-auto opacity-20 group-hover:rotate-12 transition-transform">format_quote</span>
                <p className="text-xl md:text-2xl font-bold italic leading-relaxed">
                  "Aqui eu aprendi que nada termina, tudo se transforma em memória e novas cores."
                </p>
                <div className="mt-8 text-[10px] uppercase tracking-widest font-black opacity-60">— Vivência 2024</div>
              </div>
              <div className="group relative overflow-hidden rounded-[3rem] shadow-xl h-[280px] border-4 border-surface">
                <img 
                  alt="Recycling art" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:rotate-2 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyyoZ7w2K-Px7sZCgCpCrqB3kqEOevgTnzOg_wptbSVhiEa90Kpc1yVyFpdmJwH5KjVvjG7vLPA9uxwX6yOHLHlSRa84r3lfjfKK5_-dphRdjpi5Udd7yM3RuJIDj_juUCNgz3TJhHXx_rmFndkjNd5WO4nkp-Fj-pstS6AxOsxwkHGHh2ip1nf3RvK6_xuXbYU6h-o7IAqshn4IrZ2DUBkzZQe8lKW_qrCT3ET2KUIRHcsh4ZLpb4wkhEKJBrCpguf2YffFio8doy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-40 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px]"></div>
              <div className="bg-surface-container-lowest p-10 md:p-16 rounded-[4rem] border border-outline-variant/30 shadow-2xl relative z-10 group">
                <span className="material-symbols-outlined text-primary text-9xl opacity-5 absolute -top-8 -left-8 group-hover:scale-110 transition-transform">format_quote</span>
                <div className="space-y-10 relative">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-on-surface italic">
                    "O projeto trouxe cor para os meus dias. Ver as crianças aprendendo a cuidar da terra me faz acreditar que deixarei um mundo melhor."
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-6 pt-10 border-t border-outline-variant/10">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">
                      <img 
                        alt="Dona Maria" 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCFEi8C_7ExCprfgT6F_4KsQwr8HyryfgAFJdNDkixLe6yWhdRRo1EkAAVUCmf5w7K3RPWupAHVmdQhCfucdvJ0BIr8RCZiYKR-7uTxxoC7exhHupMlpoTYkC0dzU3o4uZKlaSVyHWfgZ2TiIR2OlUKeuTkVBwTUEAp3blRQ-Wo89NYAtpK3BL6XGnxttrcUZKDwo0iGGC6mi7U9y11HpDs89lVw8Qp35EX8fxQnOA8Om7c4i_qV8x_hJZTTqQw4k3Y9VQNCxv3-Gg"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-headline font-black text-primary">Dona Maria</div>
                      <div className="text-on-surface-variant text-sm font-bold opacity-60 uppercase tracking-widest">Educadora de Ciclos • 74 anos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex items-start gap-10 group">
                <div className="text-6xl md:text-8xl font-headline font-black text-outline-variant/20 group-hover:text-primary transition-colors duration-500">01</div>
                <div>
                  <h5 className="text-2xl font-headline font-black text-on-surface mb-3 tracking-tight">Vozes do Futuro</h5>
                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-80">
                    "Eu não sabia que plástico virava brinquedo. Agora eu guardo tudo e ensino minha mãe." — <strong className="text-primary font-black">Enzo, 8 anos</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-10 group">
                <div className="text-6xl md:text-8xl font-headline font-black text-outline-variant/20 group-hover:text-secondary transition-colors duration-500">02</div>
                <div>
                  <h5 className="text-2xl font-headline font-black text-on-surface mb-3 tracking-tight">Conexão Humana</h5>
                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-80">
                    A metodologia do Living Archive foca na escuta ativa e no registro emocional das descobertas sustentáveis em cada comunidade.
                  </p>
                </div>
              </div>
              <Link to="/equipe" className="inline-flex items-center gap-4 text-primary font-black text-lg hover:gap-6 transition-all group/link pt-4">
                Conhecer a Equipe
                <span className="material-symbols-outlined font-black transition-transform group-hover/link:translate-x-1">east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Immersive Banner */}
      <section className="px-6 md:px-8 pb-20 lg:pb-40">
        <div className="max-w-7xl mx-auto rounded-[3rem] lg:rounded-[5rem] bg-surface-container-high relative overflow-hidden px-8 py-20 md:py-32 text-center shadow-ambient transition-all hover:shadow-2xl hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter">
              Pronto para semear sua <br /> 
              <span className="text-primary italic">própria narrativa?</span>
            </h2>
            <p className="text-on-surface-variant text-lg md:text-2xl font-light opacity-80 max-w-2xl mx-auto">
              Acessamos novas dimensões de impacto através da consciência ambiental coletiva e da arte participativa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <button 
                onClick={() => document.getElementById('mural').scrollIntoView({behavior: 'smooth'})} 
                className="px-12 py-6 bg-primary text-on-primary font-black rounded-[2rem] shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl"
              >
                Ver Galeria Viva
              </button>
              <Link 
                to="/metodologia" 
                className="px-12 py-6 bg-surface border-2 border-primary/20 text-on-surface font-black rounded-[2rem] text-xl hover:bg-primary/5 transition-all text-center flex items-center justify-center gap-3"
              >
                Metodologia
                <span className="material-symbols-outlined font-black">menu_book</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
