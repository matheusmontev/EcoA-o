import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-emerald-50 w-full rounded-t-3xl mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-12 py-16">
        <div className="space-y-6">
          <div className="text-lg font-extrabold text-white font-headline">Consciência Ambiental</div>
          <p className="text-emerald-100/70 text-sm leading-relaxed">
            Promovendo a transformação social através da educação ambiental e do amor à natureza no Lar Fabiano de Cristo.
          </p>
        </div>
        <div className="space-y-6">
          <h5 className="font-headline text-xs uppercase tracking-widest font-bold">Acesso Rápido</h5>
          <ul className="space-y-4 font-headline text-xs uppercase tracking-widest">
            <li><Link className="text-emerald-100/70 hover:text-white transition-all hover:translate-x-1 inline-block" to="/">Início</Link></li>
            <li><Link className="text-emerald-100/70 hover:text-white transition-all hover:translate-x-1 inline-block" to="/metodologia">Metodologia</Link></li>
            <li><Link className="text-emerald-100/70 hover:text-white transition-all hover:translate-x-1 inline-block" to="/atividades">Atividades</Link></li>
            <li><Link className="text-emerald-100/70 hover:text-white transition-all hover:translate-x-1 inline-block" to="/equipe">Equipe</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-headline text-xs uppercase tracking-widest font-bold">Newsletter</h5>
          <p className="text-emerald-100/70 text-sm">Receba atualizações sobre nossas oficinas e conquistas.</p>
          <div className="flex gap-2">
            <input className="bg-white/10 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-tertiary-fixed w-full" placeholder="Seu email" type="email" />
            <button className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-lg font-bold text-sm">OK</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-headline text-emerald-100/40">
        <p>© 2024 CONSCIÊNCIA AMBIENTAL NA INFÂNCIA. PRESERVANDO O FUTURO ATRAVÉS DA EDUCAÇÃO.</p>
        <p>DESENVOLVIDO POR EQUIPE ECOAÇÃO</p>
      </div>
    </footer>
  );
};

export default Footer;

