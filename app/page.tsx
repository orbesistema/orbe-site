import { ArrowRight, BarChart3, Boxes, BriefcaseBusiness, Check, CircleDollarSign, Layers3, ShieldCheck, UsersRound } from "lucide-react";

const modules=[
  {icon:CircleDollarSign,title:"Financeiro",text:"Contas a pagar e receber, conciliação e visão clara dos resultados."},
  {icon:BriefcaseBusiness,title:"Vendas & Serviços",text:"Orçamentos, vendas, ordens de serviço e acompanhamento comercial."},
  {icon:Boxes,title:"Estoque",text:"Catálogo, insumos, entradas, movimentações e sugestão de compras."},
  {icon:UsersRound,title:"Clientes",text:"CRM 360° para centralizar relacionamento, histórico e informações importantes."},
  {icon:BarChart3,title:"Relatórios",text:"Indicadores para acompanhar financeiro, vendas, estoque e clientes."},
  {icon:Layers3,title:"Gestão integrada",text:"Os principais processos da empresa conectados em um só lugar."}
];

export default function Home(){
 return <main className="orbeLanding">
  <nav className="landingNav">
   <a href="/" className="landingBrand">ORBE</a>
   <div className="landingNavLinks">
    <a href="#recursos">Recursos</a><a href="#porque">Por que ORBE</a>
    <a className="landingLogin" href="#contato">Solicitar demonstração <ArrowRight size={16}/></a>
   </div>
  </nav>

  <section className="landingHero">
   <div className="landingGlow glowA"/><div className="landingGlow glowB"/>
   <div className="landingHeroCopy">
    <span className="landingEyebrow">GESTÃO EMPRESARIAL EM UM SÓ LUGAR</span>
    <h1>Tudo gira em torno do <em>seu negócio.</em></h1>
    <p>Financeiro, vendas, estoque, clientes e operação conectados em uma plataforma simples, organizada e pronta para acompanhar o crescimento da sua empresa.</p>
    <div className="landingActions">
     <a className="landingPrimary" href="#recursos">Conhecer a ORBE <ArrowRight size={18}/></a>
     <a className="landingSecondary" href="#contato">Quero conhecer</a>
    </div>
    <div className="landingTrust">
     <span><Check size={15}/> Gestão centralizada</span>
     <span><Check size={15}/> Acesso online</span>
     <span><Check size={15}/> Dados organizados</span>
    </div>
   </div>

   <div className="landingPreview">
    <div className="previewTop"><div><i/><i/><i/></div><span>ORBE • VISÃO GERAL</span></div>
    <div className="previewBody">
     <aside><b>ORBE</b><span className="active">Visão Geral</span><span>Financeiro</span><span>Vendas</span><span>Estoque</span><span>Clientes</span><span>Relatórios</span></aside>
     <section>
      <div className="previewTitle"><div><small>PAINEL DE GESTÃO</small><strong>Visão geral da empresa</strong></div><ShieldCheck size={24}/></div>
      <div className="previewStats"><article><small>Faturamento</small><strong>R$ 48.320</strong></article><article><small>Recebimentos</small><strong>R$ 36.740</strong></article><article><small>Clientes</small><strong>128</strong></article></div>
      <div className="previewChart"><span style={{height:"46%"}}/><span style={{height:"72%"}}/><span style={{height:"58%"}}/><span style={{height:"83%"}}/><span style={{height:"68%"}}/><span style={{height:"94%"}}/><span style={{height:"76%"}}/></div>
     </section>
    </div>
   </div>
  </section>

  <section className="landingStrip"><span>FINANCEIRO</span><i/><span>VENDAS</span><i/><span>ESTOQUE</span><i/><span>CLIENTES</span><i/><span>OPERAÇÃO</span><i/><span>RELATÓRIOS</span></section>

  <section className="landingSection" id="recursos">
   <div className="sectionIntro"><span>RECURSOS</span><h2>Uma plataforma para organizar a operação de ponta a ponta.</h2><p>A ORBE reúne as áreas mais importantes da empresa para reduzir controles espalhados e dar mais clareza ao dia a dia.</p></div>
   <div className="moduleGrid">{modules.map(({icon:Icon,title,text})=><article key={title}><div><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>

  <section className="whySection" id="porque">
   <div className="whyPanel">
    <div><span>POR QUE ORBE</span><h2>Menos ferramentas soltas. Mais visão do negócio.</h2><p>Tenha informações importantes centralizadas para acompanhar sua empresa com mais organização e clareza.</p></div>
    <ul><li><Check size={18}/> Informações centralizadas</li><li><Check size={18}/> Rotina mais organizada</li><li><Check size={18}/> Visão integrada da operação</li><li><Check size={18}/> Estrutura preparada para crescer</li></ul>
   </div>
  </section>

  <section className="landingCta" id="contato">
   <div><span>ORBE</span><h2>Seu negócio merece uma gestão à altura.</h2><p>A ORBE está preparando uma experiência completa para empresas que querem mais controle da operação.</p></div>
   <a href="mailto:contato@orbe.com.br">Falar com a ORBE <ArrowRight size={18}/></a>
  </section>

  <footer className="landingFooter"><b>ORBE</b><p>Tudo gira em torno do seu negócio.</p><span>© 2026 ORBE. Todos os direitos reservados.</span></footer>
 </main>
}
