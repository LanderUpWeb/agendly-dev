// @ts-nocheck
import api from '@/config/axios';

const crud = (recurso: string) => ({
  listar: () => api.get(`/${recurso}`).then((r) => r.data),
  buscar: (id: string | number) => api.get(`/${recurso}/${id}`).then((r) => r.data),
  criar: (payload: any) => api.post(`/${recurso}`, payload).then((r) => r.data),
  atualizar: (id: string | number, payload: any) =>
    api.put(`/${recurso}/${id}`, payload).then((r) => r.data),
  remover: (id: string | number) => api.delete(`/${recurso}/${id}`).then((r) => r.data),
});

export const clientesService = crud('clientes');
export const lojasService = crud('lojas');
export const servicosService = crud('servicos');
export const equipesService = crud('equipes');
export const funcionariosService = crud('funcionarios');
export const cobrancistasService = crud('cobrancistas');
export const areasAtuacaoService = crud('area-atuacao');
export const areasFuncionarioService = crud('area-funcionario');
export const agendamentosService = crud('agendamentos');

export const authService = {
  loginGoogle: (idToken: string) => api.post('/auth/google', { idToken }).then((r) => r.data),
  loginEmailSenha: (email: string, senha: string) =>
    api.post('/auth/login', { email, senha }).then((r) => r.data),
};
