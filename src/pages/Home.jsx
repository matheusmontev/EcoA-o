import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Presentation Section */}
      <section className="py-20 lg:py-32 bg-surface" id="project">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl bg-surface-container-low p-4 md:p-8">
                <img 
                  className="w-full h-full object-cover rounded-2xl" 
                  alt="sustainable organic vegetable garden" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3MAqUKMuAbbWmuYz6cry1aP4WC60WprUPjAFXld0YxpgDXLHlbDJR0xV1u64kX2TiwhHs8JdVKaaRd4KZYx8_m1Inp20TBHg4gstjEC3Px4g1eEBTRLbaOvyw2FC3mi_rqJkntitcttq1IhXrD6QDsc1h5vGgZVhOjl7oHcSNsN882VNea1QCqSfp4HdXLzWDw23Nke5TOGD3oes7vZXsithU-FgEmHfyrZZZwNKQ1G5t7ADjgcgFIoUR2o0-ozSsFBMhZRm3tLOj"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-8 text-on-surface tracking-tight leading-tight">O Projeto & <br className="md:hidden"/> Lar Fabiano de Cristo</h2>
              <div className="space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed">
                <p>
                  O projeto <span className="font-bold text-primary">Consciência Ambiental na Infância</span> nasce da união entre o propósito educativo do Lar Fabiano de Cristo e a visão inovadora do Team EcoAção. Nossa missão é integrar a sustentabilidade ao cotidiano institucional, tornando-a um pilar fundamental no desenvolvimento humano.
                </p>
                <p>
                  Atuamos diretamente no Lar Fabiano de Cristo, um espaço dedicado à promoção da cidadania e assistência social, onde transformamos espaços ociosos em laboratórios vivos de aprendizado sobre reciclagem, hortas orgânicas e preservação hídrica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Bento Grid */}
      <section className="py-32 bg-surface-container-low" id="objectives">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold font-headline mb-4 text-on-surface">Nossos Objetivos Claros</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Diretrizes que guiam cada ação do Team EcoAção para um futuro mais verde e consciente.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
              <h3 className="text-xl font-bold font-headline mb-4">Educação Ativa</h3>
              <p className="text-on-surface-variant leading-relaxed">Desenvolver oficinas práticas que ensinam sobre o ciclo da vida e a importância da biodiversidade local.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>water_drop</span>
              <h3 className="text-xl font-bold font-headline mb-4">Gestão de Recursos</h3>
              <p className="text-on-surface-variant leading-relaxed">Implementar sistemas de captação de água da chuva e compostagem para resíduos orgânicos da instituição.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-4xl text-tertiary-container mb-6" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
              <h3 className="text-xl font-bold font-headline mb-4">Engajamento Familiar</h3>
              <p className="text-on-surface-variant leading-relaxed">Levar o conhecimento sustentável para além dos muros do Lar, atingindo as famílias e a comunidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Asymmetric Section */}
      <section className="py-32 bg-surface overflow-hidden" id="methodology">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-extrabold font-headline mb-8 text-on-surface">Metodologia Living Archive</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">01</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 font-headline">Observação Participativa</h4>
                    <p className="text-on-surface-variant">Crianças exploram o ambiente identificando desafios ambientais reais em sua comunidade.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">02</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 font-headline">Intervenção Criativa</h4>
                    <p className="text-on-surface-variant">Criação conjunta de soluções, desde brinquedos reciclados até o plantio de mudas nativas.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">03</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 font-headline">Monitoramento Coletivo</h4>
                    <p className="text-on-surface-variant">Acompanhamento dos resultados e celebração das conquistas sustentáveis do grupo.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="bg-primary-container/10 absolute -inset-10 rounded-full blur-3xl"></div>
              <img 
                className="relative z-10 rounded-3xl shadow-2xl w-full" 
                alt="diverse group collaborating" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf8M2kvO1rsxCv95SfmnkfKzhWajUaJmalXv5DytgoIhCzlNsw58dMLloiX1yNxE8Dkt7TjLTJu0jgtjDxT16MaVYifXJ8K2lqeSajSxizMkCx-2uCtmqcva51oOcehkNmgii5IUUiBDZCRFMm4WJRRN-5oRJssZ4oqlSyfHvqV7kEtJ4syvvvrVBKqU-UOzBHwDEIFMkjDNwOMbfC4aVV-ZpCXPicWEVAhEMZrat4bTuYzFbuVQnIrJ-2ar1EWbqaQ-_sPsSTjVgr"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Workshops */}
      <section className="py-32 bg-surface-container-low" id="activities">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-extrabold font-headline text-on-surface">Atividades & Workshops</h2>
              <p className="text-on-surface-variant mt-4">Ações práticas que transformam teoria em mudança real.</p>
            </div>
            <Link to="/atividades" className="text-primary font-bold flex items-center gap-2 hover:underline">
              Ver Calendário <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm group">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="child planting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiACP0eeuPqF7oQOz_jvB3pkSZ_xsYaE23HHczmbRhoa_Jxk_1FV--DjpfZhPEnonhOA4cm9PoFdwcsurWH9rE8W-gkIJlv4bgFONlWy1FT86Dt4SxgaFcQ2eDr6X2LlC0-iQYsDBgI2N3nJATkCZwmbOec_A-b-yiyto5TG3bOytDjW8bbNzSZwYWlRcE9pprzETA1icvVZbeW-w2IFXQX8XloxEBsczfnwtVVUMqkWoDrNqxCRfHBD08eFcHgFowUXbgdEPhn_tw"/>
                <span className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold">Horta</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold font-headline mb-4">Horta Vertical Comunitária</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Oficina de plantio em garrafas PET e recipientes reutilizados para cultivo de ervas e hortaliças.</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">calendar_today</span> Sábados Alternados
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm group">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="recycled materials" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHggeottgD5wqmPOMBmRWvMld3a-zTR3gW2T2M1FIb2xNGgkvB4z3Vbiz-dqAu6Utr7r5xfhWeOuO_J0bQn20iw9YM7-__CWNAWsTyDlz-dXIVIM9Pn7E4AHcVUqLFkFeXaaPBTqd_ceD07IyYUBTSja_De-UYEGJ25NbLnmUIE5ye40OJmwhZya0jbLpiEG55W6gTUmGz1l1Bn_HSzc5RbQbSZjLiTBQen4MfYYhlYDglCyWPQEED-tIPUI_CJvxYQzS0xP10nDYJ"/>
                <span className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold">Reciclagem</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold font-headline mb-4">Arte com Descarte</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Transformando o que seria lixo em arte e utilitários, ensinando sobre economia circular de forma lúdica.</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">calendar_today</span> Quartas-feiras
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm group">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="science experiment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5q_kaN5gycf3HMiCsDbWxf7TeSDCBUaElSSCHYx6ikhWcF1fJvKuqAQgT5xesmz7XKo9bwd_7KEX4LWEceG_uxo0gmXs5GwomkVngFEwGaSDgOTqz9JJDRTd-FmAvboKhxMJicUsBJPUFdAh-i3xVbHz8ulaEr1tAcBz1arEQKn9n3eoVe8T6PU8NN9wB26j-n1BQq-xBHWY47cJTOd2pepMdWp2tJO-GZSbZpjk9PMzqf1bEbe3T3Nc8MhAnfiqvGIXKVCw5Mskp"/>
                <span className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold">Ciência</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold font-headline mb-4">Eco-Cientistas Mirins</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Experimentos simples para entender a filtragem da água, erosão do solo e poluição atmosférica.</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">calendar_today</span> Mensal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20 lg:py-32 bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-8 leading-tight">Impacto & <br/> Resultados Esperados</h2>
              <p className="text-primary-fixed/80 text-base md:text-lg leading-relaxed mb-12">Nossa meta não é apenas ensinar, mas formar cidadãos que vejam o meio ambiente como extensão de si mesmos.</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div className="group">
                  <p className="text-4xl md:text-5xl font-extrabold text-tertiary-fixed mb-2 group-hover:scale-110 transition-transform origin-left">90%</p>
                  <p className="text-xs md:text-sm font-medium text-primary-fixed/60 uppercase tracking-wider">Engajamento dos alunos</p>
                </div>
                <div className="group">
                  <p className="text-4xl md:text-5xl font-extrabold text-tertiary-fixed mb-2 group-hover:scale-110 transition-transform origin-left">40%</p>
                  <p className="text-xs md:text-sm font-medium text-primary-fixed/60 uppercase tracking-wider">Redução de resíduos</p>
                </div>
                <div className="group">
                  <p className="text-4xl md:text-5xl font-extrabold text-tertiary-fixed mb-2 group-hover:scale-110 transition-transform origin-left">150</p>
                  <p className="text-xs md:text-sm font-medium text-primary-fixed/60 uppercase tracking-wider">Mudas anuais</p>
                </div>
                <div className="group">
                  <p className="text-4xl md:text-5xl font-extrabold text-tertiary-fixed mb-2 group-hover:scale-110 transition-transform origin-left">∞</p>
                  <p className="text-xs md:text-sm font-medium text-primary-fixed/60 uppercase tracking-wider">Consciência multiplicada</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl">
              <h4 className="text-xl font-bold mb-8 font-headline text-tertiary-fixed">Cidadania e Sustentabilidade</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-tertiary-fixed group-hover:scale-125 transition-transform">check_circle</span>
                  <span className="text-sm md:text-base opacity-90">Melhoria na percepção crítica sobre consumo e descarte.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-tertiary-fixed group-hover:scale-125 transition-transform">check_circle</span>
                  <span className="text-sm md:text-base opacity-90">Fortalecimento do vínculo comunitário e senso de pertencimento.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-tertiary-fixed group-hover:scale-125 transition-transform">check_circle</span>
                  <span className="text-sm md:text-base opacity-90">Adoção de hábitos saudáveis através da horta escolar.</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-tertiary-fixed group-hover:scale-125 transition-transform">check_circle</span>
                  <span className="text-sm md:text-base opacity-90">Capacitação para multiplicação de técnicas em casa.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-surface" id="team">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold font-headline mb-4 text-on-surface">Equipe EcoAção</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Especialistas apaixonados por educação e meio ambiente trabalhando juntos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary-fixed">
                <img className="w-full h-full object-cover" alt="Ricardo Silva" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9cBv-5wviidM9unLr-xRwNlbMrrTGkuzlTNfWEKrwiZDawbV1sHUeXz0CDH2KLxbHNrrdry1D1TK1P0QB7l65pq_j4mo3hI0CJetHyVp4fWx0W8Zn1DN6nHJyacHKgobOve66YH4_IAgpWFwyZU-coqOfpAQD7zRSukasYdZ97xiCTVdsMr1UY-5HyGbHnfECdGOTPGU6ldSOfBQ2QRsnZPpUuW3oAOOSNRwY169AB0stmsnfXiWtIckQ1I417uKHEN9wnGB_wk_l"/>
              </div>
              <h4 className="font-bold text-lg font-headline">Ricardo Silva</h4>
              <p className="text-primary text-sm font-semibold mb-2">Coordenador de Projetos</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary-fixed">
                <img className="w-full h-full object-cover" alt="Ana Paula" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwvq96Wy45AGS4L_TfSUeB9NsuNMihOSQAzu2d1py3qOdV2xmt-HgSOON1-wLJQOmHluKTnc7PKDZ7jfS5n5cfGy077p7kpgBL2IcenmlySS9vxSrJG84rFELb2NmU7HuZSsPR5xya4m4ZDy9Jw3Vt89GUBHiwKqIY6xdjXr97N6CcTALXi6tRUfhXjKFgqO_T7QIPIPZr5PyIfolZlLOi3guJBcKpgFQgLzfvoDMjDtx7YgZDQDKNIYC4L7KXKFLparqQU2VEwVjo"/>
              </div>
              <h4 className="font-bold text-lg font-headline">Ana Paula</h4>
              <p className="text-primary text-sm font-semibold mb-2">Psicopedagoga</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary-fixed">
                <img className="w-full h-full object-cover" alt="Marcos Oliveira" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHFFN0S6bsR6YJzdKSiZWw-opxgEvQ6S_dnsI6I-es4EWU8dqpqq9u5HOSvl25slhUlHzKZNdRaMGWEyH-yFIPfLBttp7gFjtvXm5mYdU-fC78w8yYIBoqOSLsqtBGswacuca_YUpXB9qLFeLuPFxrzbMq8vtyzgLGg4tHjFhCUuZ8skVLXGSkSN58AHAJufXgCDu17i2xPS9TV5MDnaeb_rZNL0Kv61PB4E9F7Wyc9kUHapgEITBPHo1o8DOJa1I3eQ5W_9I_V10B"/>
              </div>
              <h4 className="font-bold text-lg font-headline">Marcos Oliveira</h4>
              <p className="text-primary text-sm font-semibold mb-2">Biólogo Educador</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary-fixed">
                <img className="w-full h-full object-cover" alt="Julia Costa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Fpn_ZR4C76DPGMqqsLxAnikAXmZ7bC5wNhEbCTRyK0CfZVeYKLS9vvH8fZqydoa9gTgz5JEULc9PlnrBGqPa2-xzct7uj3Ob9vfhl-mcS2Io83FyMicliA0MB1kUAQuVYkItjM5jfBPHQqQWTNFFqNTuH9Kf-Lce4QDsTy33BMen81eISkJ1PRWoonGnSKVVOOpg9og5VtkcBAJAjrFTnGfSoauF6FoCE00WzR2UdgyhTw_42mlR0-CSkaGSXj1PS3NmWbF5jRKn"/>
              </div>
              <h4 className="font-bold text-lg font-headline">Julia Costa</h4>
              <p className="text-primary text-sm font-semibold mb-2">Gestora Social</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-surface-container-low" id="contact">
        <div id="cadastro" className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-surface-container-lowest rounded-[2.5rem] lg:rounded-[4rem] shadow-xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-20">
              <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-8 text-on-surface">Vamos Conversar?</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-on-surface-variant">Nome Completo</label>
                    <input className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" type="text" placeholder="Seu nome"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-on-surface-variant">Email</label>
                    <input className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" type="email" placeholder="email@exemplo.com"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-on-surface-variant">Mensagem</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" rows="4" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full hero-gradient text-white font-bold py-5 rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-lg">
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div className="bg-[#052216] p-8 md:p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-bold mb-10 font-headline text-tertiary-fixed">Informações de Contato</h4>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed p-2 bg-white/5 rounded-xl">location_on</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed/40 mb-1">Endereço</p>
                      <p className="text-sm md:text-base text-primary-fixed/80">R. Itabaiana, 160 - Meier, Rio de Janeiro - RJ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed p-2 bg-white/5 rounded-xl">mail</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed/40 mb-1">Email</p>
                      <p className="text-sm md:text-base text-primary-fixed/80">contato@ecoacao.org.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed p-2 bg-white/5 rounded-xl">call</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed/40 mb-1">Telefone</p>
                      <p className="text-sm md:text-base text-primary-fixed/80">+55 (21) 3255-0000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-12 relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-fixed/30 mb-6">Conecte-se conosco</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/5 group">
                    <span className="material-symbols-outlined text-primary-fixed/60 group-hover:text-tertiary-fixed transition-colors">public</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/5 group">
                    <span className="material-symbols-outlined text-primary-fixed/60 group-hover:text-tertiary-fixed transition-colors">share</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/5 group">
                    <span className="material-symbols-outlined text-primary-fixed/60 group-hover:text-tertiary-fixed transition-colors">favorite</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


