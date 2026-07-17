// @ts-nocheck
import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useTheme } from '@/context/ThemeContext';
import { obterUsuario, limparSessao } from '@/lib/auth';
import logoAgendly from '@/assets/logoNavbar.png';
import './CrudNavbar.css';

/**
 * Navbar superior padronizada para todos os CRUDs.
 * Mostra o nome do usuário autenticado (JWT do backend) e permite sair.
 */
const CrudNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const usuario = obterUsuario();

  const sair = () => {
    limparSessao();
    navigate({ to: '/login' });
  };

  return (
    <header className="crud-navbar">
      <div className="crud-navbar-esquerda">
        <Link to="/agenda" className="crud-navbar-logo-link" aria-label="Voltar à agenda">
          <img src={logoAgendly} alt="Agendly" className="crud-navbar-logo" />
        </Link>
      </div>

      <div className="crud-navbar-direita">
        <Link to="/agenda" className="crud-navbar-btn-link">
          ← Agenda
        </Link>

        <button
          className="crud-navbar-btn-icone"
          onClick={toggleTheme}
          title={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
          aria-label="Alternar tema"
          type="button"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <div className="crud-navbar-perfil">
          <button
            className="crud-navbar-btn-perfil"
            type="button"
            aria-label="Sair"
            title="Sair"
            onClick={sair}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
          <span className="crud-navbar-perfil-label">{usuario?.nome || 'Minha conta'}</span>
        </div>
      </div>
    </header>
  );
};

export default CrudNavbar;
