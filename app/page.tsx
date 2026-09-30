import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Boxes,
  CircleDollarSign,
  Orbit,
  Sparkles,
  UsersRound,
  Wrench
} from "lucide-react";

const orbitItems = [
  { label:"Financeiro", icon:CircleDollarSign, pos:"orbitA" },
  { label:"Vendas", icon:BarChart3, pos:"orbitB" },
  { label:"Estoque", icon:Boxes, pos:"orbitC" },
  { label:"Clientes", icon:UsersRound, pos:"orbitD" },
  { label:"Operação", icon:Wrench, pos:"orbitE" },
];

export default function Home(){
  return <main className="v4">
    <header className="v4Header">
      <a href="#topo" className="v4Brand">ORBE<span>.</span></a>
      <nav>
        <a href="#visao">Visão</a>
        <a href="#produto">Produto</a>
        <a href="#modulos">Módulos</a>
        <a className="navCta" href="#contato">Conhecer a ORBE <ArrowRight size={15}/></a>
      </nav>
    </header>

    <section className="orbitalHero" id="topo">
      <div className="heroNoise"/>
      <div className="heroCopyV4">
        <span className="eyebrowV4"><Sparkles size={14}/> GESTÃO EM ÓRBITA</span>
        <h1>Sua empresa não precisa de mais ferramentas.</h1>
        <p className="heroStatement">Precisa de <strong>um centro.</strong></p>
        <p className="heroText">A ORBE conecta financeiro, vendas, estoque, clientes e operação em uma única visão para você entender o negócio sem montar o quebra-cabeça todo dia.</p>
        <div className="heroButtonsV4">
          <a className="mainCtaV4" href="#produto">Entrar na órbita <ArrowDownRight size={17}/></a>
          <a className="textCtaV4" href="#visao">Ver a lógica da ORBE</a>
        </div>
      </div>

      <div className="orbitScene" aria-label="Módulos da ORBE conectados em órbita">
        <div className="orbitGlow"/>
        <div className="ring ring1"/>
        <div className="ring ring2"/>
        <div className="ring ring3"/>
        <div className="core">
          <div className="coreHalo"/>
          <span>ORBE</span>
          <small>centro da operação</small>
        </div>
        {orbitItems.map(({label,icon:Icon,pos}) =>
          <div key={label} className={"orbitNode "+pos}>
            <Icon size={18}/><span>{label}</span>
          </div>
        )}
      </div>

      <div className="heroFooterLine">
        <span>Financeiro</span><i/><span>Vendas</span><i/><span>Estoque</span><i/><span>Clientes</span><i/><span>Operação</span>
      </div>
    </section>

    <section className="manifesto" id="visao">
      <div className="manifestoIndex">01</div>
      <div className="manifestoCopy">
        <span>O PROBLEMA NÃO É FALTA DE DADO</span>
        <h2>É tudo estar em lugares diferentes.</h2>
        <p>Planilha no financeiro. Conversa no WhatsApp. Pedido em outro sistema. Estoque em outro lugar. A empresa funciona, mas a visão fica fragmentada.</p>
      </div>
      <div className="fragmentVisual">
        <div className="fragment fragment1">Financeiro</div>
        <div className="fragment fragment2">Vendas</div>
        <div className="fragment fragment3">Estoque</div>
        <div className="fragment fragment4">Clientes</div>
        <div className="centerLine"/>
      </div>
    </section>

    <section className="productWorld" id="produto">
      <div className="productLead">
        <div className="sectionIndex">02</div>
        <div>
          <span>QUANDO TUDO ENTRA NA MESMA ÓRBITA</span>
          <h2>A operação começa a fazer sentido.</h2>
        </div>
      </div>

      <div className="productShell">
        <aside className="productSidebar">
          <b>ORBE</b>
          <span className="active">Visão Geral</span>
          <span>Financeiro</span>
          <span>Vendas & Serviços</span>
          <span>Estoque</span>
          <span>Clientes</span>
          <span>Relatórios</span>
        </aside>
        <section className="productCanvas">
          <div className="productTopbar">
            <div>
              <small>VISÃO GERAL</small>
              <h3>O que está acontecendo na empresa.</h3>
            </div>
            <span className="liveBadge">● atualizado agora</span>
          </div>

          <div className="metricRail">
            <article><span>Faturamento</span><strong>R$ 48.320</strong><small>este mês</small></article>
            <article><span>Recebimentos</span><strong>R$ 36.740</strong><small>confirmados</small></article>
            <article><span>Clientes ativos</span><strong>128</strong><small>na base</small></article>
            <article><span>OS em andamento</span><strong>14</strong><small>na operação</small></article>
          </div>

          <div className="productGrid">
            <div className="flowPanel">
              <div className="panelTitle"><span>Fluxo da operação</span><small>hoje</small></div>
              <div className="flowTrack">
                <div><i/>Venda criada <b>R$ 3.840</b></div>
                <div><i/>Pagamento recebido <b>R$ 1.280</b></div>
                <div><i/>Estoque movimentado <b>24 itens</b></div>
                <div><i/>OS atualizada <b>#0284</b></div>
              </div>
            </div>
            <div className="pulsePanel">
              <div className="panelTitle"><span>Pulso financeiro</span><small>7 períodos</small></div>
              <div className="pulseBars">
                <i style={{height:"38%"}}/><i style={{height:"58%"}}/><i style={{height:"48%"}}/>
                <i style={{height:"72%"}}/><i style={{height:"62%"}}/><i style={{height:"91%"}}/><i style={{height:"76%"}}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section className="modulesNarrative" id="modulos">
      <div className="sectionIndex light">03</div>
      <div className="modulesHeadline">
        <span>NÃO SÃO MÓDULOS ISOLADOS</span>
        <h2>É uma operação conectada.</h2>
      </div>

      <div className="moduleStory">
        <article className="storyFinance">
          <span className="storyNumber">01</span>
          <CircleDollarSign size={26}/>
          <h3>Financeiro</h3>
          <p>O que vendeu, o que recebeu e o que ainda está pendente, sem perder contexto.</p>
          <div className="microChart"><i/><i/><i/><i/><i/></div>
        </article>

        <article className="storySales">
          <span className="storyNumber">02</span>
          <BarChart3 size={26}/>
          <h3>Vendas & Serviços</h3>
          <p>Orçamentos, vendas e ordens de serviço acompanhados do início ao fim.</p>
          <div className="ticket"><b>#0284</b><span>Em produção</span></div>
        </article>

        <article className="storyStock">
          <span className="storyNumber">03</span>
          <Boxes size={26}/>
          <h3>Estoque</h3>
          <p>Entradas, movimentações, insumos e reposição conectados ao que acontece na operação.</p>
          <div className="stockPills"><span>Entrada +24</span><span>Saída -08</span></div>
        </article>

        <article className="storyCRM">
          <span className="storyNumber">04</span>
          <UsersRound size={26}/>
          <h3>Clientes</h3>
          <p>Histórico e relacionamento centralizados para você entender cada cliente no contexto certo.</p>
          <div className="avatars"><i/><i/><i/><span>+125</span></div>
        </article>
      </div>
    </section>

    <section className="orbitQuote">
      <Orbit size={34}/>
      <p>Quando tudo gira em torno do mesmo centro, a gestão deixa de ser fragmentada e passa a ser uma visão.</p>
    </section>

    <section className="finalOrbit" id="contato">
      <div className="finalOrb"/>
      <div className="finalContent">
        <span>ORBE</span>
        <h2>Tudo gira em torno do seu negócio.</h2>
        <p>Uma plataforma pensada para centralizar a operação e transformar informação espalhada em visão de gestão.</p>
        <a href="#topo">Conhecer a ORBE <ArrowRight size={17}/></a>
      </div>
    </section>

    <footer className="v4Footer">
      <b>ORBE</b>
      <span>Gestão em órbita.</span>
      <small>© 2026 ORBE. Todos os direitos reservados.</small>
    </footer>
  </main>
}
