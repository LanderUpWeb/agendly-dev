// @ts-nocheck
import axios from 'axios';
import { toast } from 'sonner';

export const BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  'http://localhost:8080/api/v1';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Request: anexa token se existir
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const msgServidor = error?.response?.data?.message || error?.response?.data?.error;
    let mensagem = msgServidor || 'Erro inesperado ao comunicar com o servidor.';

    if (error?.code === 'ERR_NETWORK') {
      mensagem = 'Não foi possível conectar à API (localhost:8080). Verifique se o backend está rodando.';
    } else if (status === 401) {
      mensagem = msgServidor || 'Sessão expirada. Faça login novamente.';
    } else if (status === 403) {
      mensagem = msgServidor || 'Você não tem permissão para esta ação.';
    } else if (status === 404) {
      mensagem = msgServidor || 'Recurso não encontrado.';
    } else if (status >= 500) {
      mensagem = msgServidor || 'Erro interno no servidor.';
    }

    if (typeof window !== 'undefined') {
      toast.error(mensagem);
    }
    return Promise.reject(error);
  }
);

export default api;
