import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/20 to-surface z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30" 
          alt="lush green sustainable garden" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9oM0smHHk51IDBEE80cIkqMc76x12-9UWCS-3mh4YrbsfThT97ZuhbFidx1eO33hohdIQsL6McD_3Vs2F1Bd97UkghUt6sfxIBB-cUVPHUlFsDFLHFjpYknv-w_uhT9Bzxtxsgk3P4AsHT1vIWpxHm8PzwnrdglJJPATjYuqtDt8M4NaWC9S-oSmIOyQ3HI8xsHOVO4aHRnOoCoypNOqgkNkthZ2Ph1hntOuOyzN61DtIIn7SVBOR7nKKyv2dZ4oKZYYYydaX2xP3"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-20">
        <div className="text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Educação Sustentável
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline leading-[1.1] text-on-surface mb-8 tracking-tight">
            Plantando o Futuro no <br className="hidden md:block"/>
            <span className="text-primary italic">Lar Fabiano de Cristo</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            Transformando a consciência ambiental de crianças e jovens através de práticas educativas inovadoras e conexão direta com a natureza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => navigate('/metodologia')}
              className="hero-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Conhecer Projeto
            </button>
            <button 
              onClick={() => navigate('/resultados')}
              className="bg-surface-container-lowest text-primary px-8 py-4 rounded-2xl font-bold shadow-sm border border-outline-variant/30 hover:bg-surface-container-low transition-all"
            >
              Nossas Metas
            </button>
          </div>
        </div>
        <div className="relative group hidden sm:block">
          <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-colors"></div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 lg:rotate-2 lg:translate-x-4 transition-transform group-hover:rotate-0">
            <img 
              className="w-full h-[400px] lg:h-[550px] object-cover" 
              alt="hands of a child holding a sprout" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAracemNejRUKy41Zgms9j2QVb01wavqtuZVUzx1TZVUIZc6GWmCd8ljT95eLF3msQ0IvUttYkCmgGG8dG6DTi1Q2XsqGOJPhcSkflHLpyAPRDPD4Fhoaij-DwAXjYjJ6EaBMesPjcC4bDWKO-_ZezaUc80xvGhCV21F9NH-v5tFA-g9d5xsrUZ-AxemMncZlDMKyd0ef_9AuEbvPKI3iKLvhmbCezuRXdePK8LCr_YoJ_uLfYohurlULYAW-vdj3DAnbpDFy3eOryA"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-[260px] border border-white/20 z-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary font-bold">volunteer_activism</span>
              <p className="text-primary font-bold text-3xl tracking-tighter">200+</p>
            </div>
            <p className="text-[10px] md:text-xs text-on-surface-variant font-semibold uppercase tracking-wider">Crianças impactadas mensalmente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

