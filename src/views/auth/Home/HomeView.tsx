// @ts-nocheck
import React, { useState } from 'react';
import '../Home/HomeView.css';
import logoAgendly from '@/assets/logoNavbar.png';

export default function Home() {
    const [menuAberto, setMenuAberto] = useState(false);
    const fecharMenu = () => setMenuAberto(false);
    const planos = [
        {
            id: 1,
            nome: 'Basico',
            foco: 'Para pequenos salões',
            preco: '79',
            popular: false,
            beneficios: [
                'Apenas uma loja',
                'Agenda online',
                'ADS',
            ]
        },
        {
            id: 2,
            nome: 'Semi-Basico',
            foco: 'Para pequenos salões iniciantes',
            preco: '149',
            popular: false, // Define que este card receberá o destaque verde
            beneficios: [
                'Apenas uma loja',
                'Ausência ADS',
                'Agenda online',
                'Integração com o WhatsApp'
            ]
        },
        {
            id: 3,
            nome: 'Intermediario',
            foco: 'Para profissionais autônomos',
            preco: '299',
            popular: true,
            beneficios: [
                'Apenas uma loja',
                'Ausência ADS',
                'Agenda online',
                'Integração com o WhatsApp',
                'BI Financeiro',
                'ChatBot'
            ]
        },
        {
            id: 4,
            nome: 'Pro',
            foco: 'Para grandes estéticas',
            preco: '299',
            popular: false,
            beneficios: [
                'Multi-unidades',
                'Ausência ADS',
                'Agenda online',
                'Integração com o WhatsApp',
                'BI Financeiro',
                'ChatBot'
            ]
        }
    ];
    const recursos = [
        {
            id: 1,
            icone: (
                <svg className="icone-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            titulo: 'Agenda inteligente',
            descricao: 'Reservas online 24h com confirmação automática e bloqueio de horários.'
        },
        {
            id: 2,
            icone: (
                <svg className="icone-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            titulo: 'CRM de clientes',
            descricao: 'Histórico completo, observações e aniversários.'
        },
        {
            id: 3,
            icone: (
                <svg className="icone-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            titulo: 'Financeiro completo',
            descricao: 'Controle de caixa, comissões, fluxo e relatórios em tempo real.'
        },
        {
            id: 4,
            icone: (
                <svg className="icone-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            ),
            titulo: 'Lembretes automáticos',
            descricao: 'WhatsApp e SMS para reduzir faltas em até 70%.'
        },
        {
            id: 5,
            icone: (
                <svg className="icone-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm12 0v-3a2 2 0 00-2-2h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
            ),
            titulo: 'Relatórios e métricas',
            descricao: 'Acompanhe faturamento, serviços mais vendidos e desempenho da equipe.'
        },
        {
            id: 6,
            icone: (
                <svg className="icone-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
            ),
            titulo: 'Gestão de equipe',
            descricao: 'Escala, comissões individuais e acesso por perfil de profissional.'
        }
    ];
    return (
        <div className="landing-page" style={{
            height: '100vh',       /* Ocupa a altura da tela visível */
            overflowY: 'scroll',   /* Força a barra de rolagem vertical (Igual ao ScrollView) */
            overflowX: 'hidden'    /* Evita quebras para os lados */
        }}>
            <div className="fundo-hero" />
            <div className="gradiente-fundo" />

            <header className={`header container ${menuAberto ? 'header-menu-aberto' : ''}`}>
                <a href="/" className="logo" style={{ textDecoration: 'none' }} onClick={fecharMenu}>
                    <img src={logoAgendly} alt="Agendly" className="logo-img" />
                </a>

                <button
                    className="btn-hamburger"
                    aria-label="Abrir menu"
                    aria-expanded={menuAberto}
                    onClick={() => setMenuAberto((v) => !v)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className="nav-links" onClick={fecharMenu}>
                    <a href="#recursos">Recursos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#planos">Planos</a>
                    <a href="#contato">Contato</a>
                </nav>

                <div className="header-ctas">
                    <a href="/login"><button className="btn-primary btn-header">Entrar</button></a>
                    <a href="/register"><button className="btn-secondary btn-header">Cadastrar</button></a>
                </div>
            </header>


            <main className="hero container">
                <div className="col-esquerda">
                    <div className="badge">SaaS para o seu setor de beleza</div>
                    <h1 className="titulo">
                        Sua estética em <br />
                        <span className="destaque">destaque</span>
                    </h1>
                    <p className="descricao">
                        A plataforma completa para gerenciar agendamentos, clientes, equipe e finanças do seu salão, barbearia, clínica ou estúdio de beleza.
                    </p>
                    <div className="ctas">
                        <button className="btn-primary" style={{ padding: '16px 32px' }}>Começar grátis</button>
                        <button className="btn-secondary">Ver demonstração</button>
                    </div>

                </div>
            </main>
            <section className="secao-recursos" id="recursos">
                <div className="container-recursos">

                    {/* Cabeçalho da Seção */}
                    <div className="recursos-header" id="recurso">
                        <span className="recursos-tagline">Recursos</span>
                        <h2 className="recursos-titulo">Tudo que sua loja precisa</h2>
                        <p className="recursos-subtitulo">
                            Centralize a operação do seu negócio em uma plataforma elegante e simples de usar.
                        </p>
                    </div>

                    {/* Grid de Cards */}
                    <div className="recursos-grid">
                        {recursos.map((recurso) => (
                            <div key={recurso.id} className="card-recurso">
                                <div className="wrapper-icone">
                                    {recurso.icone}
                                </div>
                                <h3 className="titulo-recurso">{recurso.titulo}</h3>
                                <p className="descricao-recurso">{recurso.descricao}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* SEÇÃO SOBRE NÓS (BACKGROUND ESCURO) */}
            <section className="secao-sobre" id="sobre">
                <div className="container container-sobre">

                    {/* Coluna da Esquerda: Imagem e Badge Flutuante */}
                    <div className="sobre-col-esquerda">
                        <div className="wrapper-imagem-sobre">
                            <img
                                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
                                alt="Interior do salão moderno"
                                className="imagem-sobre"
                            />
                            {/* Badge flutuante verde de 10 anos */}
                            <div className="badge-anos-sobre">
                                <div className="sobre-coracao-icone">
                                    <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                                <h3>A nova solução</h3>
                                <p>no setor de beleza</p>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Direita: Textos e Lista de Vantagens */}
                    <div className="sobre-col-direita" id='sobre'>
                        <span className="sobre-tagline">Sobre Nós</span>
                        <h2 className="sobre-titulo">Feito por quem entende de gestão</h2>
                        <p className="sobre-descricao">
                            A Agendly nasceu para entregar uma plataforma moderna, bonita e prática para profissionais que vivem de agenda e relacionamento com clientes.
                        </p>

                        {/* Lista de Checkmarks */}
                        <ul className="sobre-lista-vantagens">
                            <li>
                                <div className="sobre-check-icone">
                                    <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>Implantação guiada gratuita</span>
                            </li>
                            <li>
                                <div className="sobre-check-icone">
                                    <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>Sem fidelidade ou taxa de adesão</span>
                            </li>
                            <li>
                                <div className="sobre-check-icone">
                                    <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>Integração com WhatsApp e Pix</span>
                            </li>
                        </ul>

                        <button className="btn-primary" style={{ padding: '16px 32px', marginTop: '16px' }}>
                            Conheça a história
                        </button>
                    </div>

                </div>
            </section>
            <section className="secao-planos" id="planos">
                <div className="container-planos">

                    {/* Cabeçalho da Seção */}
                    <div className="planos-header">
                        <span className="planos-tagline">Planos</span>
                        <h2 className="planos-titulo">Escolha o plano ideal</h2>
                        <p className="planos-subtitulo">Escolha um dos nossos planos.</p>
                    </div>

                    {/* Grid Dinâmico de Cards */}
                    <div className="planos-grid">
                        {planos.map((plano) => (
                            <div
                                key={plano.id}
                                className={`card-plano ${plano.popular ? 'plano-popular' : ''}`}
                            >
                                {/* Tag de "Mais Popular" renderizada condicionalmente */}
                                {plano.popular && <span className="badge-popular">MAIS POPULAR</span>}

                                <div className="plano-topo">
                                    <h3 className="plano-nome">{plano.nome}</h3>
                                    <p className="plano-foco">{plano.foco}</p>
                                </div>

                                <div className="plano-preco">
                                    <span className="cifrão">R$</span>
                                    <span className="valor">{plano.preco}</span>
                                    <span className="periodo">/mês</span>
                                </div>

                                {/* Botão com estilo condicional baseado no destaque do plano */}
                                <button className={`btn-plano ${plano.popular ? 'btn-plano-popular' : 'btn-plano-padrao'}`}>
                                    Começar agora
                                </button>

                                {/* Lista Dinâmica de Benefícios (N Benefícios) */}
                                <ul className="plano-beneficios">
                                    {plano.beneficios.map((beneficio, index) => (
                                        <li key={index}>
                                            <div className="plano-check-icone">
                                                <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span>{beneficio}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <footer className="footer-landing">
                <div className="container container-footer">
                    <div className="footer-logo">
                        <img src={logoAgendly} alt="Agendly" className="footer-logo-img" />
                    </div>
                    <div className="footer-copy">
                        &copy; 2026 Agendly. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </div>

    );
}

