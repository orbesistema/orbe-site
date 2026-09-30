import {
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  Layers3,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";

const modules=[
  {icon:CircleDollarSign,title:"Financeiro",text:"Contas a pagar e receber, conciliação, fluxo de caixa e visão dos resultados."},
  {icon:BriefcaseBusiness,title:"Vendas & Serviços",text:"Orçamentos, vendas, ordens de serviço e acompanhamento comercial."},
  {icon:Boxes,title:"Estoque",text:"Catálogo, insumos, entradas, movimentações e apoio à reposição."},
  {icon:UsersRound,title:"Clientes",text:"CRM 360° para histórico, relacionamento e informações importantes."},
  {icon:BarChart3,title:"Relatórios",text:"Indicadores para acompanhar as áreas do negócio com mais contexto."},
  {icon:Layers3,title:"Gestão integrada",text:"Processos conectados para reduzir controles soltos e retrabalho."}
];

const flow=[
  {n:"01",title:"Centralize",text:"Reúna as áreas mais importantes em um único ambiente."},
  {n:"02",title:"Acompanhe",text:"Veja o que está acontecendo sem depender de várias ferramentas."},
  {n:"03",title:"Decida",text:"Tenha mais contexto para agir com clareza no dia a dia."}
];

export default function Home(){
 return <main className="orbeLanding">
  <header className="siteHeader">
   <a href="#topo" className="brand">ORBE<span>●</span></a>
   <nav>
    <a href="#produto">Produto</a>
    <a href="#recursos">Recursos</a>
    <a href="#como-funciona">Como funciona</a>
    <a className="headerCta" href="#contato">Conhecer a ORBE <ArrowRight size={15}/></a>
   </nav>
  </header>

  <section className="heroV3" id="topo">
   <div className="heroGrid"/>
   <div className="heroOrb heroOrbA"/><div className="heroOrb heroOrbB"/>
   <div className="heroCopy">
    <span className="heroTag"><Sparkles size={14}/> GESTÃO EMPRESARIAL CONECTADA</span>
    <h1>Mais visão.<br/>Menos <em>ruído.</em></h1>
    <p>A ORBE conecta financeiro, vendas, estoque, clientes e operação para sua empresa funcionar com mais organização, clareza e controle.</p>
    <div className="heroActions">
     <a className="primaryBtn" href="#produto">Conhecer a ORBE <ArrowRight size={18}/></a>
     <a className="ghostBtn" href="#recursos">Ver recursos</a>
    </div>
    <div className="heroProof">
      <span><Check size={14}/> Uma visão da empresa</span>
      <span><Check size={14}/> Menos controles paralelos</span>
      <span><Check size={14}/> Rotina mais organizada</span>
    </div>
   </div>

   <div className="productStage">
    <div className="stageGlow"/>
    <div className="dashboardWindow">
      <div className="dashTop"><div className="dots"><i/><i/><i/></div><span>ORBE • VISÃO GERAL</span><ShieldCheck size={18}/></div>
      <div className="dashBody">
        <aside>
          <b>ORBE</b>
          <span className="active">Visão Geral</span>
          <span>Financeiro</span><span>Vendas</span><span>Estoque</span><span>Clientes</span><span>Relatórios</span>
        </aside>
        <section>
          <div className="dashTitle"><div><small>PAINEL DE GESTÃO</small><strong>Visão geral da empresa</strong></div><div className="statusPill">Atualizado agora</div></div>
          <div className="dashCards">
            <article><small>FATURAMENTO</small><strong>R$ 48.320</strong><span>este mês</span></article>
            <article><small>RECEBIMENTOS</small><strong>R$ 36.740</strong><span>confirmados</span></article>
            <article><small>CLIENTES</small><strong>128</strong><span>ativos</span></article>
          </div>
          <div className="dashLower">
            <div className="chartCard">
              <div className="chartHead"><span>Desempenho</span><small>últimos períodos</small></div>
              <div className="bars"><i style={{height:"38%"}}/><i style={{height:"58%"}}/><i style={{height:"48%"}}/><i style={{height:"75%"}}/><i style={{height:"64%"}}/><i style={{height:"90%"}}/><i style={{height:"72%"}}/></div>
            </div>
            <div className="activityCard">
              <small>ATIVIDADE</small>
              <p><i/> Pagamento recebido <b>R$ 1.280</b></p>
              <p><i/> OS criada <b>#0284</b></p>
              <p><i/> Estoque atualizado <b>+24</b></p>
            </div>
          </div>
        </section>
      </div>
    </div>
   </div>
  </section>

  <section className="signalStrip">
    <span>FINANCEIRO</span><i/><span>VENDAS</span><i/><span>ESTOQUE</span><i/><span>CLIENTES</span><i/><span>OPERAÇÃO</span><i/><span>RELATÓRIOS</span>
  </section>

  <section className="productStory" id="produto">
    <div className="storyLead">
      <span>UMA OPERAÇÃO, UMA VISÃO</span>
      <h2>Chega de gerir a empresa em pedaços.</h2>
      <p>Quando cada área vive em uma ferramenta diferente, informação se perde, decisões atrasam e o retrabalho cresce. A ORBE reúne o que importa em uma experiência única.</p>
    </div>
    <div className="storyPanel">
      <div className="storyVisual">
        <Workflow size={34}/>
        <strong>Financeiro</strong><i/><strong>Vendas</strong><i/><strong>Estoque</strong><i/><strong>Clientes</strong>
      </div>
      <div className="storyCopy">
        <span>MENOS FRAGMENTAÇÃO</span>
        <h3>As áreas conversam entre si.</h3>
        <p>Você acompanha a empresa de forma integrada, sem precisar montar o quebra-cabeça toda vez que quer entender o que está acontecendo.</p>
      </div>
    </div>
  </section>

  <section className="resources" id="recursos">
    <div className="sectionHead">
      <span>RECURSOS</span>
      <h2>Uma base completa para a sua gestão.</h2>
      <p>Os principais processos da empresa reunidos em uma plataforma feita para simplificar o dia a dia.</p>
    </div>
    <div className="resourceGrid">
      {modules.map(({icon:Icon,title,text})=><article key={title}><div className="iconWrap"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><span className="cardLine"/></article>)}
    </div>
  </section>

  <section className="how" id="como-funciona">
    <div className="sectionHead darkHead">
      <span>COMO FUNCIONA</span>
      <h2>Centralize. Acompanhe. Decida.</h2>
      <p>Uma lógica simples para transformar informação espalhada em uma visão útil do negócio.</p>
    </div>
    <div className="flowGrid">
      {flow.map(item=><article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
    </div>
  </section>

  <section className="finalCta" id="contato">
    <div>
      <span>ORBE</span>
      <h2>Tudo gira em torno do seu negócio.</h2>
      <p>Uma gestão mais conectada para empresas que querem crescer com mais clareza.</p>
    </div>
    <a href="#topo">Conhecer a ORBE <ArrowRight size={18}/></a>
  </section>

  <footer className="footerV3">
    <b>ORBE</b><p>Tudo gira em torno do seu negócio.</p><span>© 2026 ORBE. Todos os direitos reservados.</span>
  </footer>
 </main>
}
