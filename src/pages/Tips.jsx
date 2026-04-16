import React from 'react';
import { Link } from 'react-router-dom';

const Tips = () => {
  const tips = [
    { 
      tag: "Reciclagem", 
      title: "Cores que Curam", 
      desc: "Como organizar uma central de triagem lúdica em casa usando as cores do projeto para facilitar o descarte correto.", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXIFeZIiS7KGRPqIlJD7Olq6mzBqI0mYG0BQKeOCujsRcWLffwO0amVqHPks3bzsL1zYNeET40HTHPThNumgt2C6qlRrqF5Eba_X6WyWhU6M4Yd9gsYNPKDijh-wLY8pPGsX8csXnQha9p_bZ7qesY7mf1nk-4LDpUZi7Ke6-5Qu0y4-I5U4uQG7EX39uxrrB0cnzkdSR_lVE2_sKtKOeLzUVPJCNyyISy745tykf6yXcw_QUwJmeRHFLI_pfXNHJ0tKS-c2NzdaMM",
      color: "bg-primary-fixed text-on-primary-fixed"
    },
    { 
      tag: "Horta", 
      title: "Meu Primeiro Brotinho", 
      desc: "Dicas de como plantar sementes de tomate e alface em potes de iogurte reutilizados, educando através do ciclo da vida.", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX_9PFpn3ZgWvCmI6nQ7XuEzE73Kk_9cephhOxmn6JUShRKQwxFVMpx__t1VWma7RRpbufQE05zAMd2NbHsw9xGNJA_m2D4_sKHPjIWhtIeZLk5CG5urWZcKL4yDVeEZHUxuzinQ7f0vde7XjfKOH8V0wZd1iqtGBs2DBbmz7ODNM_LcyhmvT1iWX-6QLYXl_plscZLi8mir8K6CR3EGQHs4P0pdCIy-3HWMNoR6uPLV26aU88LVZRCY_3g1AGMBNvGeBmZezyHPh7",
      color: "bg-secondary-fixed text-on-secondary-fixed"
    },
    { 
      tag: "Compostagem", 
      title: "Ouro para Plantas", 
      desc: "Transformando sobras de frutas em adubo natural sem cheiro, ensinando sobre a circularidade da natureza.", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDclLp1ORxwRn_PAbwOwfuEep2HmoIny6_NmaOERQsqN9A2UeK6v3pW1ujPTByvKqntspnahW24NA7BokCL2nYxGlZx9go8maya01LS51XUC4sZ-xaZdq8VEd1QJS16XXFhYr-pSH28bZR-iKlvT2DIy4Dbel-W3-l01tQyXsnQnQ4EMzz1EA5HarKo1NGh1kzAkGSEuafR42VK-ghSesxMK5BazW5AEpmxZThdrHNmwUjBywWMdAmvpYnlUoRK0Kq70Ti8tuLeKT91",
      color: "bg-tertiary-fixed text-on-tertiary-fixed"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed/10 -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                Guia Prático EcoAção
              </span>
              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-on-surface">
                Educação <br /> 
                <span className="text-primary italic">Inspirada</span> em Casa
              </h1>
              <p className="text-base md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
                Transformando o cotidiano em uma jornada de consumo consciente e conexão profunda com o meio ambiente através de pequenos gestos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/metodologia" 
                  className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  Começar Jornada
                  <span className="material-symbols-outlined text-sm">rocket_launch</span>
                </Link>
                <Link 
                  to="/atividades" 
                  className="bg-surface-container-lowest text-primary px-8 py-4 rounded-2xl font-bold shadow-sm border border-outline-variant/30 hover:bg-surface-container-low transition-all"
                >
                  Ver Atividades
                </Link>
              </div>
            </div>
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-4 bg-tertiary-fixed/20 rounded-[3rem] blur-2xl"></div>
              <img 
                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover" 
                alt="Books and nature" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTqJoz7xCYyL-1eyfpFHgN3tmF50_kSOtxCqDRulkj7KDuc-cPsIl91KVXQVEyjsQ-VKCW0Si-XaKFANFgue0cNIQJ7FWYqYJJC5NjqbMuv8TYL25uNd-LQz3ZjpXBXgwfEYQ4jUuqZ-_AKWdHidgvpcPvER9eFB75XL_CvHF0eZ-ICVKD8fpqZTVhZJp86HSRG43RnFQDHqIyK67uUf3I9yafRS5p8RUzNMplMrVhKgDo-YdM7_DJqykLKL4R_lv69tqRQP_VMk4v"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
                Arquivo Vivo de <span className="text-secondary">Conciência</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg">
                Ideias práticas e lúdicas para transformar o aprendizado ambiental em uma diversão diária para toda a família.
              </p>
            </div>
            <div className="flex items-center gap-3 text-primary bg-primary/5 px-6 py-3 rounded-2xl border border-primary/10">
              <span className="font-bold text-xs uppercase tracking-widest">Inovação Social</span>
              <span className="material-symbols-outlined font-bold">auto_awesome</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-surface border border-outline-variant/20 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <span className={`absolute top-6 left-6 z-20 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg ${tip.color}`}>
                    {tip.tag}
                  </span>
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={tip.title} 
                    src={tip.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-8 flex-grow opacity-80">
                    {tip.desc}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                    Ver Guia Completo 
                    <span className="material-symbols-outlined text-base transition-transform group-hover/btn:translate-x-2">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogia Section */}
      <section className="py-20 lg:py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-surface-container-low rounded-[3rem] lg:rounded-[4rem] p-8 md:p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
                  Nossas Inspirações
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-10 leading-tight">
                  A Pedagogia da <span className="text-primary italic">Esperança</span>
                </h2>
                
                <blockquote className="relative mb-12">
                  <span className="material-symbols-outlined text-6xl text-primary/10 absolute -top-8 -left-8 select-none">format_quote</span>
                  <p className="text-xl md:text-2xl text-on-surface font-medium italic leading-relaxed border-l-4 border-primary pl-8 py-2">
                    "Educar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção."
                  </p>
                </blockquote>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-fixed">
                        <img className="w-full h-full object-cover grayscale" alt="Paulo Freire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjWmKTsSS_vIX1pMAKO2hMQwGWgMx4QxQqe_Qb53tsjJmeo7Lu6Q_WTUk5jZOHMgdb8aiFGV0ckAnvrR6KE_xf34koLQKWrF13y46wr3U0gHOLQi37thLMclwuxnpY_LXa31wuuLnoMX94koez96JMMCt2oDpuiU24OkVhlCvBGzJZNTH1Qv9Q_jdwOuqmSoEnA7oiCWqn1TGnANV2I3tXCt2Ijq7f-H03PNbrSAviSgHIuV_BXryzVeCuuM0ovStHfYzNnjj6BRil"/>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface">Paulo Freire</h4>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Patrono da Educação</p>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed italic opacity-80">Foco na autonomia e no diálogo como ferramentas de libertação e cuidado.</p>
                  </div>
                  <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-fixed">
                        <img className="w-full h-full object-cover grayscale" alt="Moacir Gadotti" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABU5mBOivfkPB9-Z9xyd_G9UFDthK_SyJtKhxomuGmX0bY_2913UQ73W2UVxKDlyiJS8FSWlp0dOwcgutq6Knh7YZTbFgUP-Rcxfm8MyY2-qp2ziIz7kPN6_0qptWDp7Qfxn4EWGHnBQ5Zo3Vx-y28jlDJM6INI3wtiICqaqeWJbq8joQRM1eUjmHTqqsMKHSBkssPuRKasK8R1C09BNfLcyLryE2qBKre8M0P3xORkYesIn6QEZWk-qTm9vIaIs1fiHKD0sxaDOqP"/>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface">Moacir Gadotti</h4>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Eco-pedagogia</p>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed italic opacity-80">A pedagogia da Terra voltada para a sustentabilidade e ressignificação.</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5">
                <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                  <img 
                    className="w-full h-[400px] lg:h-[650px] object-cover" 
                    alt="Education in nature" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiACP0eeuPqF7oQOz_jvB3pkSZ_xsYaE23HHczmbRhoa_Jxk_1FV--DjpfZhPEnonhOA4cm9PoFdwcsurWH9rE8W-gkIJlv4bgFONlWy1FT86Dt4SxgaFcQ2eDr6X2LlC0-iQYsDBgI2N3nJATkCZwmbOec_A-b-yiyto5TG3bOytDjW8bbNzSZwYWlRcE9pprzETA1icvVZbeW-w2IFXQX8XloxEBsczfnwtVVUMqkWoDrNqxCRfHBD08eFcHgFowUXbgdEPhn_tw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-10">
                    <p className="text-white text-2xl font-headline font-bold leading-tight">Cada descoberta é uma semente plantada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tips;
