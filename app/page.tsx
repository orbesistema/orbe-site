import {
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  ClipboardList,
  Layers3,
  LineChart,
  PackageCheck,
  ShieldCheck,
  UsersRound,
  Workflow
} from "lucide-react";

const modules=[
  {icon:CircleDollarSign,title:"Financeiro",text:"Contas a pagar e receber, conciliação bancária e visão clara do caixa."},
  {icon:BriefcaseBusiness,title:"Vendas & Serviços",text:"Orçamentos, vendas, ordens de serviço e acompanhamento comercial."},
  {icon:Boxes,title:"Estoque",text:"Catálogo, insumos, entradas, movimentações e sugestão de compras."},
  {icon:UsersRound,title:"Clientes",text:"CRM 360° para manter histórico, relacionamento e informações importantes organizadas."},
  {icon:BarChart3,title:"Relatórios",text:"Indicadores para acompanhar financeiro, vendas, estoque e clientes em conjunto."},
  {icon:Layers3,title:"Gestão integrada",text:"Os principais processos da empresa conectados em uma mesma operação."}
];

const pains=[
  {icon:ClipboardList,title:"Planilhas demais",text:"Quando cada área trabalha em uma planilha diferente, a visão do negócio fica fragmentada."},
  {icon:Workflow,title:"Processos desconectados",text:"Financeiro, vendas e estoque sem integração criam retrabalho e dificultam o acompanhamento."},
  {icon:LineChart,title:"Decisões sem contexto",text:"Sem uma visão consolidada, entender o que está acontecendo leva mais tempo do que deveria."}
];

export default function Home(){
 return <main className="orbeLanding">
  <nav className="landingNav">
   <a href="#topo" className="landingBrand" aria-label="ORBE">ORBE<span>.</span></a>
   <div className="landingNavLinks">
    <a href="#problema">O problema</a>
    <a href="#recursos">Recursos</a>
    <a href="#como-funciona">Como funciona</a>
    <a className="landingLogin" href="#contato">Conhecer a ORBE <ArrowRight size={16}/></a>
   </div>
  </nav>

  <section className="landingHero" id="topo">
   <div className="landingGlow glowA"/><div className="landingGlow glowB"/>
   <div className="landingHeroCopy">
    <span className="landingEyebrow">GESTÃO EMPRESARIAL, SEM PEÇAS SOLTAS</span>
    <h1>Sua empresa inteira, em uma visão só.</h1>
    <p>Financeiro, vendas, estoque, clientes e operação conectados para você acompanhar o negócio sem depender de controles espalhados.</p>
    <div className="landingActions">
     <a className="landingPrimary" href="#recursos">Conhecer a ORBE <ArrowRight size={18}/></a>
     <a className="landingSecondary" href="#problema">Ver como funciona</a>
    </div>
    <div className="landingTrust">
     <span><Check size={15}/> Gestão centralizada</span>
     <span><Check size={15}/> Acesso online</span>
     <span><Check size={15}/> Informações conectadas</span>
    </div>
   </div>

   <div className="landingPreview">
    <div className="previewTop"><div><i/><i/><i/></div><span>ORBE • VISÃO GERAL</span></div>
    <div className="previewBody">
     <aside><b>ORBE</b><span className="active">Visão Geral</span><span>Financeiro</span><span>Vendas</span><span>Estoque</span><span>Clientes</span><span>Relatórios</span></aside>
     <section>
      <div className="previewTitle">
       <div><small>PAINEL DE GESTÃO</small><strong>Visão geral da empresa</strong></div>
       <ShieldCheck size={24}/>
      </div>
      <div className="previewStats">
       <article><small>Faturamento</small><strong>R$ 48.320</strong><span>este mês</span></article>
       <article><small>Recebimentos</small><strong>R$ 36.740</strong><span>confirmados</span></article>
       <article><small>Clientes</small><strong>128</strong><span>ativos</span></article>
      </div>
      <div className="previewBottom">
       <div className="previewChart">
        <div className="chartHeader"><span>Fluxo financeiro</span><small>últimos 7 períodos</small></div>
        <div className="bars"><span style={{height:"46%"}}/><span style={{height:"72%"}}/><span style={{height:"58%"}}/><span style={{height:"83%"}}/><span style={{height:"68%"}}/><span style={{height:"94%"}}/><span style={{height:"76%"}}/></div>
       </div>
       <div className="previewActivity">
        <small>ATIVIDADE RECENTE</small>
        <p><i/> Pagamento recebido <b>R$ 1.280</b></p>
        <p><i/> Nova ordem de serviço <b>#0284</b></p>
        <p><i/> Estoque atualizado <b>+24 itens</b></p>
       </div>
      </div>
     </section>
    </div>
   </div>
  </section>

  <section className="landingStrip">
   <span>FINANCEIRO</span><i/><span>VENDAS</span><i/><span>ESTOQUE</span><i/><span>CLIENTES</span><i/><span>OPERAÇÃO</span><i/><span>RELATÓRIOS</span>
  </section>

  <section className="problemSection" id="problema">
   <div className="problemIntro">
    <span>QUANDO CADA COISA FICA EM UM LUGAR</span>
    <h2>O problema não é falta de ferramenta. É excesso de ferramenta desconectada.</h2>
    <p>A ORBE nasce para reduzir esse ruído e reunir a operação em uma visão mais simples, organizada e útil no dia a dia.</p>
   </div>
   <div className="painGrid">
    {pains.map(({icon:Icon,title,text})=><article key={title}><div><Icon size={22}/></div><h3>{title}</h3><p>{text}</p></article>)}
   </div>
  </section>

  <section className="landingSection" id="recursos">
   <div className="sectionIntro">
    <span>O QUE A ORBE REÚNE</span>
    <h2>Uma base única para acompanhar a operação de ponta a ponta.</h2>
    <p>Menos troca de tela. Menos informação solta. Mais contexto para entender o que está acontecendo na empresa.</p>
   </div>
   <div className="moduleGrid">
    {modules.map(({icon:Icon,title,text})=><article key={title}><div><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}
   </div>
  </section>

  <section className="productSection">
   <div className="productCopy">
    <span>PRODUTO DE VERDADE</span>
    <h2>Não é só um dashboard bonito. É operação conectada.</h2>
    <p>A mesma informação acompanha o fluxo entre vendas, financeiro, estoque e clientes. Isso reduz retrabalho e deixa a rotina mais previsível.</p>
    <ul>
     <li><Check size={18}/> Uma visão geral da empresa</li>
     <li><Check size={18}/> Histórico centralizado por cliente</li>
     <li><Check size={18}/> Acompanhamento financeiro e operacional no mesmo ambiente</li>
    </ul>
   </div>
   <div className="productMock">
    <div className="mockHeader"><span>ORBE</span><b>Operação em andamento</b><small>Hoje</small></div>
    <div className="mockRows">
     <article><div><PackageCheck size={19}/><span>Pedido #1042</span></div><b>Em produção</b></article>
     <article><div><CircleDollarSign size={19}/><span>Recebimento</span></div><b>Confirmado</b></article>
     <article><div><UsersRound size={19}/><span>Cliente</span></div><b>Histórico atualizado</b></article>
     <article><div><Boxes size={19}/><span>Estoque</span></div><b>Movimentação registrada</b></article>
    </div>
   </div>
  </section>

  <section className="howSection" id="como-funciona">
   <div className="sectionIntro">
    <span>COMO FUNCIONA</span>
    <h2>Centralize. Acompanhe. Decida.</h2>
    <p>Uma lógica simples para transformar informação espalhada em visão de negócio.</p>
   </div>
   <div className="steps">
    <article><span>01</span><h3>Centralize</h3><p>Reúna financeiro, vendas, estoque, clientes e operação em um só ambiente.</p></article>
    <article><span>02</span><h3>Acompanhe</h3><p>Veja o que mudou, o que está pendente e o que precisa de atenção.</p></article>
    <article><span>03</span><h3>Decida</h3><p>Use dados organizados para agir com mais contexto e menos improviso.</p></article>
   </div>
  </section>

  <section className="whySection">
   <div className="whyPanel">
    <div>
     <span>POR QUE ORBE</span>
     <h2>Menos controles espalhados. Mais visão do negócio.</h2>
     <p>A ORBE foi pensada para empresas que querem organizar a operação sem transformar a gestão em mais uma tarefa complicada.</p>
    </div>
    <ul>
     <li><Check size={18}/> Informações centralizadas</li>
     <li><Check size={18}/> Rotina mais organizada</li>
     <li><Check size={18}/> Visão integrada da operação</li>
     <li><Check size={18}/> Estrutura preparada para crescer</li>
    </ul>
   </div>
  </section>

  <section className="landingCta" id="contato">
   <div>
    <span>ORBE</span>
    <h2>Tudo gira em torno do seu negócio.</h2>
    <p>Conheça uma gestão mais conectada, organizada e simples de acompanhar.</p>
   </div>
   <a href="#topo">Conhecer a ORBE <ArrowRight size={18}/></a>
  </section>

  <footer className="landingFooter">
   <b>ORBE</b>
   <p>Tudo gira em torno do seu negócio.</p>
   <span>© 2026 ORBE. Todos os direitos reservados.</span>
  </footer>
 </main>
}
