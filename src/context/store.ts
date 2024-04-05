/* eslint-disable no-unused-vars */
import { IDadosPessoais } from "@/components/DadosPessoais/IDadosPessoais";
import { create } from "zustand";

type Store = {
  DadosPessoais: IDadosPessoais,
  setDadosPessoais: (_DadosPessoais: IDadosPessoais) => void
}

const store = create<Store>()((set) => ({
  DadosPessoais: {
    NomeCompleto: "Henrik Ruan Santos de Souza",
    Subtitulo: "Desenvolvedor Fullstack",
    Email: "henrik.ruan4@gmail.com",
    Nacionalidade: "Brasileira",
    Idade: "22",
    TelefoneResidencial: "(55) 9999-9999",
    Celular: "(12) 99999-9999",
    Endereco: "Projetada 13"
  },
  setDadosPessoais: (_DadosPessoais) => set(() => ({ DadosPessoais: _DadosPessoais })),
}));

export default store;
