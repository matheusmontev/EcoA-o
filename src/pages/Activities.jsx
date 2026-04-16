import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const activitiesData = [
  {
    id: 1,
    title: 'Contação de Histórias',
    tag: 'Lúdico',
    tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    desc: '"Narrativas ancestrais que semeiam a preservação do solo e das águas através da imaginação guiada."',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt7kTkHIy-l-CoiP5s8PIRwRYqjUEsqqiSXWGmjPBJGs8Xj-EVWeGc_W497nfkIXrJKLSETRI0Z-XHh51R2oedmILySB4vIgyQIKV_N3GkLb1kL3AkMuERCqr7_XkRtWZlxPP4i2qBm9GShAZZ3NYErcnHxEjrRI3VuwJgEQWFJzPbZxHQKV_7_-0d8qxvicw4uWZFbJr1Ys8qssUzGo6IIt67CUxDuanaZOACvrQv7Xzbm0yP0O9UHGeNl0f__zZMuFh5x6oMwpAg',
    infoLeftIcon: 'schedule',
    infoLeftText: '45 min',
    infoRightIcon: 'groups',
    infoRightText: 'Todas idades',
    layoutClass: 'md:col-span-8 flex-col md:flex-row',
    imgContainerClass: 'md:w-1/2',
    imgOverlayClass: 'bg-primary/10',
    contentContainerClass: 'md:w-1/2 flex flex-col justify-center'
  },
  {
    id: 2,
    title: 'Jogos Educativos',
    tag: 'Social',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    desc: 'Gamificação focada em sustentabilidade para aprender através do lúdico e do compartilhamento.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDB3RzawpiSBsezNFJWrjzLMdxQxuMKKA7wUIf-RE_H73WfjYJtLHIhdETGYeFgwZLWWjAoDfRouonzSm5EYnjkt7WZLBJttyUeOGr9HigbsJUZE2dOcIxJ0YP3xxNCU2xKVfSmsk8IrDtZuLhBLBy8WaeWVvoIi-bx7eM5BwuTFUnfkBvI9ZyOUugODs47Pg-0o42g4T1Z6k3tLDPNucnaoml_V8o4br-b8IVz614oYpPVVlqHlUaDMZMxmgc3iptVYByZBC-W7IO',
    isVertical: true,
    layoutClass: 'md:col-span-4 flex-col',
    imgContainerClass: 'h-72',
    contentContainerClass: ''
  },
  {
    id: 3,
    title: 'Produção Circular',
    tag: 'Oficina',
    tagClass: 'bg-primary-fixed text-on-primary-fixed',
    desc: 'Transformando o descartado em arte e utilitários, exercitando um novo olhar sobre o lixo.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTgHWBriW93jb-zOn4arz5aUxLeADbtfU6OYPxztxNsjq46z2akhe9V9ipoYtIQbft91Fxo0YkmzndyElZM3dHaoTq1MTyiF9xHIsodZkrjap1R6jmbCK_YBawS0dPAG_hBSISL42_5FG4yPuj4evsLjJa6GfifdqMQDGf0gPLKp86pvVbB4gZdf99x1mqMzmE-y5tpChXXQJy0mMxeG__QxmV-MPUy1tXaKVQh9UZktRVoApQ3YKssSeBk7MBlut80qgyc6Hs5a9V',
    isVertical: true,
    layoutClass: 'md:col-span-4 flex-col',
    imgContainerClass: 'h-72',
    contentContainerClass: ''
  },
  {
    id: 4,
    title: 'Ciclo de Plantio',
    tag: 'Terra',
    tagClass: 'bg-primary/10 text-primary',
    desc: '"Conexão visceral com a terra: semear o futuro através de flores polinizadoras e hortaliças orgânicas."',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8iaFyXml_cAHi-VIFuvgCMNi46haYWgyb9LwHdAY4DkAeSidvhuUWK9GKkP7irE_N4PARVuT-krc1YmTdLM3qwOsHGg-Vneqevpc34KF6FJ6p6g64AIWlJLInYDTzqJSO-X8FYXzmNpW8pjmqDWbPNOe87l4QtwxSAerN7DmgnPQCyPHQ9jo3s9soycYVkxn1E3a0fcu8_sgf2dRMnRe_lkdpDKSMuGyVmnCc3JwAHcvwx5NPDsn0WaMLfyoT3zYEEHvZQjZpYHuV',
    infoLeftIcon: 'calendar_month',
    infoLeftText: 'Sábados',
    infoRightIcon: 'location_on',
    infoRightText: 'Horta Comunitária',
    layoutClass: 'md:col-span-8 flex-col md:flex-row-reverse',
    imgContainerClass: 'md:w-1/2',
    imgOverlayClass: 'bg-tertiary/10',
    contentContainerClass: 'md:w-1/2 flex flex-col justify-center'
  }
];

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredActivities = activitiesData.filter(
    (activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header Section (Hero) */}
      <section className="relative pt-20 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-fixed/10 -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                Catálogo de Oficinas EcoAção
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight leading-[1.1] text-on-surface mb-8">
                Exploração <br /> 
                <span className="text-primary italic">Criativa</span> Ativa
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
                Descubra oficinas desenhadas para reconectar gerações com a sabedoria da terra e a preservação do meio ambiente através da prática constante.
              </p>
            </div>
            <div className="w-full lg:w-80">
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/40 group-focus-within:text-primary transition-colors">search</span>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="Buscar oficina..." 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Grid Catalog */}
      <section className="py-20 lg:py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((item) => (
                <article 
                  key={item.id} 
                  className={`${item.layoutClass} bg-surface border border-outline-variant/20 rounded-[2.5rem] shadow-ambient overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group`}
                >
                  <div className={`${item.imgContainerClass} ${item.isVertical ? '' : 'h-72 md:h-auto'} overflow-hidden relative`}>
                    {item.isVertical && (
                      <div className={`absolute top-6 right-6 z-10 ${item.tagClass} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg`}>
                        {item.tag}
                      </div>
                    )}
                    <img 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      src={item.img}
                    />
                    {!item.isVertical && (
                      <div className={`absolute inset-0 ${item.imgOverlayClass} group-hover:bg-transparent transition-colors`}></div>
                    )}
                  </div>
                  <div className={`${item.isVertical ? 'p-8 md:p-10' : 'p-8 md:p-12'} flex flex-col justify-center`}>
                    {!item.isVertical && (
                      <div className={`${item.tagClass} self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm`}>
                        {item.tag}
                      </div>
                    )}
                    <h3 className={`${item.isVertical ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors`}>
                      {item.title}
                    </h3>
                    <p className={`text-on-surface-variant ${item.isVertical ? 'text-sm md:text-base opacity-80 mb-6' : 'leading-relaxed text-sm md:text-base opacity-80 mb-8 font-light italic'}`}>
                      {item.desc}
                    </p>
                    
                    {item.isVertical ? (
                      <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/btn">
                        Saiba Mais
                        <span className="material-symbols-outlined text-base transition-transform group-hover/btn:translate-x-1">chevron_right</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-4 text-xs font-bold text-primary">
                        <span className="material-symbols-outlined text-base">{item.infoLeftIcon}</span> {item.infoLeftText}
                        <span className="material-symbols-outlined text-base ml-4">{item.infoRightIcon}</span> {item.infoRightText}
                      </div>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <div className="md:col-span-12 text-center py-20">
                <p className="text-on-surface-variant text-xl">Nenhuma oficina encontrada.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-primary text-on-primary rounded-[3rem] lg:rounded-[4rem] p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 lg:max-w-xl">
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 leading-tight tracking-tight">Junte-se ao Nosso <br /> Arquivo Vivo</h2>
              <p className="text-on-primary opacity-80 text-base md:text-lg leading-relaxed font-light mb-8 lg:mb-0">
                Convidamos famílias e crianças para semear novas histórias em nossa comunidade. Transforme sua rotina em impacto real.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Usando Link do react-router-dom para navegação suave */}
              <Link 
                to="/#contact" 
                className="bg-surface-container-lowest text-primary font-bold py-5 px-10 rounded-2xl shadow-xl hover:scale-105 transition-all text-lg text-center"
              >
                Participar
              </Link>
              <Link 
                to="/equipe" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-on-primary font-bold py-5 px-10 rounded-2xl hover:bg-white/20 transition-all text-lg text-center"
              >
                Conhecer Equipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
