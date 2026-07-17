// @ts-nocheck
import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { useTheme } from '../../../context/ThemeContext';
import { authService } from '@/services/endpoints';
import { salvarSessao } from '@/lib/auth';
import './LoginView.css';
import imagemLogin from '../../../assets/login.jpg';
import logoAgendly from '../../../assets/logoNavbar.png';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function BotaoGoogle({ theme, onErro }) {
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);

  const handleSuccess = async (credentialResponse) => {
    const idToken = credentialResponse?.credential;
    if (!idToken) {
      onErro('O Google não retornou um credential válido.');
      return;
    }
    setCarregando(true);
    onErro('');
    try {
      // idToken vai pro backend, que valida assinatura/aud/iss e emite o JWT próprio.
      const dados = await authService.loginGoogle(idToken);
      salvarSessao(dados);
      toast.success('Conectado com Google!');
      navigate({ to: '/agenda' });
    } catch (err) {
      onErro(err?.response?.data || 'Não foi possível entrar com Google.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: 44 }}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => onErro('Falha ao autenticar com Google.')}
        theme={theme === 'light' ? 'outline' : 'filled_black'}
        size="large"
        width={320}
        locale="pt-BR"
        text="continue_with"
      />
      {carregando && <p className="subtitulo" style={{ marginLeft: 12 }}>Conectando...</p>}
    </div>
  );
}

export default function LoginView() {
  const { theme, toggleTheme } = useTheme();
  const [errorMessage, setErrorMessage] = useState('');

  const classeTema = theme === 'light' ? 'tema-claro' : 'tema-escuro';

  if (!GOOGLE_CLIENT_ID) {
    return (
      <div className={`login-page-container ${classeTema}`}>
        <div className="login-right-side">
          <div className="login-form-wrapper">
            <div className="error-alert">
              VITE_GOOGLE_CLIENT_ID não configurado no .env do front.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className={`login-page-container ${classeTema}`} suppressHydrationWarning>
        <button type="button" onClick={toggleTheme} className="theme-toggle-btn" suppressHydrationWarning>
          {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
        </button>

        <div className="login-left-side">
          <img src={imagemLogin} alt="Bem-vindo de volta!" className="login-bg-image" />
          <img src={logoAgendly} alt="Agendly" className="login-left-logo" />
          <div className="login-left-overlay">
            <h3>Sua agenda. Sua rotina.<br />Tudo em um só lugar.</h3>
            <p>Gerencie clientes, equipes e horários com a fluidez que o seu negócio merece.</p>
          </div>
        </div>

        <div className="login-right-side">
          <div className="login-form-wrapper">
            <h2>Bem-vindo</h2>
            <p className="subtitulo">Entre com a sua conta Google para continuar.</p>

            {errorMessage && <div className="error-alert">{errorMessage}</div>}

            <BotaoGoogle theme={theme} onErro={setErrorMessage} />

            <p className="signup-redirect" style={{ marginTop: 24 }}>
           
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
