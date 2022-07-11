import * as axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const apiCep = {
  async searchCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json`);
  }
};
