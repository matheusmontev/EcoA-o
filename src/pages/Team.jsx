import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <main className="pt-20">
      {/* Hero Section: Editorial Layout */}
      <section className="relative w-full py-20 lg:py-32 px-6 md:px-8 overflow-hidden bg-surface-container-lowest">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              Nosso Coletivo
            </div>
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-7xl text-on-surface leading-[1.1] tracking-tight">
              As mãos por trás <br className="hidden md:block"/> do <span className="text-primary italic">projeto</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              O EcoAção é movido pela convicção de que a sustentabilidade começa na infância. Somos um coletivo multidisciplinar focado em cultivar um futuro mais verde.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <Link to="/metodologia" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                Nossa Metodologia
                <span className="material-symbols-outlined text-sm">north_east</span>
              </Link>
              <div className="flex -space-x-3 items-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-surface-container-high">
                    <img alt="Team member" className="w-full h-full object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`}/>
                  </div>
                ))}
                <span className="pl-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">+ Equipe</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/5] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 group border border-outline-variant/10">
              <img 
                alt="Environmental education" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8eQObElewd_wluqHF4izgoHLA8-jWFwJqopKdhRQ1kBNjzQgnLevyxZlnwC7OkCEakcH9_7Csgwiz6NOYlOuPo4Y0_8kGjU7Ou58IRgUe-RIBK-hcrKfiDUuKjl7gLB8jNlb2C1PAxcix2h3IgZ1y3-Ymr5sQblilnlt0OsOerdMTR-6VbFmJWhExeb_iyvAXlWfC_952IyNRUAM-0kschXUlAnV7X6IfSh91fI_l9mKT0rmCCxQdZeM9fws3X-5CWxUoyX9pWgVh"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Values: Asymmetric Layout */}
      <section className="py-20 lg:py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-8 relative order-2 lg:order-1">
            <div className="space-y-4 md:space-y-8">
              <div className="h-64 md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-ambient border border-outline-variant/5">
                <img alt="Nature play" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANwex-8hA7RACbY6oH78aFHP0cSp6-YoY26ItIu5t3M51amXPe8-VN4xhPcbXKBrHOTFd5OUfgDlwIyLzgCsJoZGT-XvPfZ3oEqH8mCLn0Rwog4tQGV4DcVz3wU4qUvKc3QocFm4InoBCNPRNdb5dwpml9adYuTYmefL5yoKD4Vjbn2ZWV6uojqwWBKnJOt6j9od4D9ty5xzG9uJcYzw_vee6zXR0BFx3pF_NZZnlFsEKllsxaKomCpASYil3i07WJFE8RXEJvAGLz"/>
              </div>
              <div className="bg-secondary/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-secondary/10">
                <h3 className="font-headline font-bold text-lg md:text-2xl mb-2 text-secondary">Responsabilidade</h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">Impactando comunidades através do conhecimento inclusivo.</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-8 pt-12 md:pt-20">
              <div className="bg-primary/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-primary/10">
                <h3 className="font-headline font-bold text-lg md:text-2xl mb-2 text-primary">Sustentabilidade</h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">Práticas reais que transformam o cotidiano em vida.</p>
              </div>
              <div className="h-64 md:h-[440px] rounded-[2.5rem] overflow-hidden shadow-ambient border border-outline-variant/5">
                <img alt="Eco tools" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8n34_pGcmxpTBBy0uXpp95aNVzThelXfzkZ7yi2rWI9beBNzxGVrZo-GmrsbnddYuUEqmIMyLRDtpjpyX9LjhRuQgXa6wGcopwP767bscRN-yQJz5_uTEQaWJndlDqJ2cJRWgRqN7uy9NvTofGavtSSj9blWraq8LACK3z9LmJE_9dOzKUylFM3n4vZN_Bvsaa2xyNAtrekIxAWaF5yP7b3V4mMll2-zetjZVpBRFJjpgCdT3DsrczbPITZBfvIyCOr5urGU3QD1G"/>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-10 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-headline font-extrabold text-3xl md:text-5xl text-on-surface leading-tight tracking-tight">Missão & Valores</h2>
            <div className="space-y-6 text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
              <p>
                Nossa jornada não é apenas sobre ensinar a reciclar, mas sobre reconectar o ser humano com o seu habitat natural desde os primeiros passos. Acreditamos na <strong className="text-primary font-bold">educação regenerativa</strong>.
              </p>
              <div className="p-8 md:p-10 bg-primary/5 rounded-[2.5rem] border-l-4 md:border-l-8 border-primary italic text-on-surface-variant text-base md:text-lg">
                "Atuamos com transparência, responsabilidade social e uma visão centrada no aluno, garantindo as descobertas."
              </div>
            </div>
            <Link to="/metodologia" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Descubra nossa visão completa
              <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Mural: Expansive Grid */}
      <section className="py-20 lg:py-32 px-6 md:px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-on-surface mb-6">Mural da Equipe</h2>
            <p className="text-lg md:text-xl text-on-surface-variant font-light max-w-2xl">Mentes brilhantes unidas conscientização ambiental das novas gerações.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-16">
            {/* Team members */}
            {[
              { name: 'Thais', role: 'Coordenação Geral', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcKjUx8RDdjap7j6KvsoOmugYxXfDg8nyIoMkP4oWX1mI7JM0bE8l8iPXzqQRzEse1imh8h-NT-L7ofZBus0ZEJHFLrPp6lZliqnpnvyVSBVvuH4jNUZEHioSfySyyFL_Hy5rDLxSLtPJusgEMiKgFvSPAjin1t3zt8qW9TWzBnKqkvt0TzLwiiCNPLujCjnFZ-8_Bj-voHGHWhHxGIyPMBc2dto3VLwXGLV-bTnz0axvGLwSEVfaZ_oKG4i2tR3aWYoGgRAG6fbZA' },
              { name: 'Isabela', role: 'Vice-Liderança', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnb0evXKJ44wfww5RzuHXvmS6nAJGa5P8XXNHldDajStz6Pgm6AcIcPhLgmc7StdAn93KIEQHXqBBFAE4NfsI-xWgXj6IrMdK_gP3TPzzOo8PSWzdzIWmJUABUcVNek5dz2eEiY_v1kDTb1zIq9Ln-AwMu-HdTAH12PELZBOBOLg-E_x4R3PC2Q1E69lv_d6cXDY7Wv2Ulg2T1QXGMoIbv5Fh-bnYde_D0GKwTJaK1iXVwZq17PmDir94TQtKDGvP3vXd7ehoz6MaG' },
              { name: 'Renata', role: 'Planejamento', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1aO0Bb3U1vHhd0Rjy8pW77iusH82Ti4QgTuEUbD-6uRQwRc5KWceWI1AQpNtD35daodzIrui2WjVCFPGHdPNmOkpwVLhrJr8LGjM2uCl53gkh0BdNC2Ckq59gaVMIVObi_OMfXwyDFphKKuFRvZBi3euCX1SwBwkJgZvFws87NP-yLR8kmvuD0fGkeG7gxfewwr8NBLpdvQm1HCGD2Sk22qqVIbXlkIa7nCXOINPjY16BkTPdpfmy59PouoqJoWF9zGLwyMIrimZc' },
              { name: 'Emilly', role: 'Sistemas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3uvaavLT25M8eyZkpS_UGz_Jl7y6AE9dW8Aj9vTbQY1jStZXigbcHk1WQhAXYw_hXye04rkP9F_fQcdME2v9rGYTjobBTbGoBawKPYad-Xu3JVfGDh5AvM5_yKBD3dsxeol4k2PStWHTVIDTdyCryGvy1oEIGGbYcffHdkyVZgHYHl3mgms9DRINCNJbIL4hj81raiW2_CmeBq28_ykWC072r4b-HkGoez2AVgT5yBlkbHjggd0-mC5ntpPBdOYGBoGamlctA33NM' }
            ].map((member, i) => (
              <div key={member.name} className={`group ${i % 2 !== 0 ? 'lg:pt-12' : ''}`}>
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-ambient bg-surface-container-low border border-outline-variant/5">
                  <img alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" src={member.img}/>
                </div>
                <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors text-center md:text-left">{member.name}</h3>
                <p className="text-on-surface-variant font-medium text-sm text-center md:text-left">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Teaser */}
      <section className="px-6 md:px-8 pb-32">
        <div className="max-w-7xl mx-auto bg-primary text-on-primary rounded-[2rem] lg:rounded-[4rem] p-10 md:p-24 overflow-hidden relative shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center md:text-left">
              <h2 className="font-headline font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight">Um compromisso com as gerações.</h2>
              <p className="text-on-primary-fixed text-lg md:text-xl opacity-80 leading-relaxed font-light">
                Nossa equipe trabalha incansavelmente para criar ferramentas que não apenas educam, mas inspiram mudanças reais.
              </p>
              <Link to="/metodologia" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
                Nossa História
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] md:border-[20px] border-white/10 flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-8xl md:text-[10rem] opacity-30">volunteer_activism</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </main>
  );
};

export default Team;
