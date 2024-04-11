/* eslint-disable no-unused-vars */
import { IDadosPessoais } from "@/components/DadosPessoais/IDadosPessoais";
import { IExperiencia } from "@/components/Experiencia/IExperiencia";
import { IFormacaoAcademica } from "@/components/FormacaoAcademica/IFormacaoAcademica";
import { IOutrasInformacoes } from "@/components/OutrasInformacoes/IOutrasInformacoes";
import { create } from "zustand";

type Store = {
  DadosPessoais: IDadosPessoais,
  setDadosPessoais: (_DadosPessoais: IDadosPessoais) => void,
  FormacaoAcademica: IFormacaoAcademica[],
  setFormacaoAcademica: (_FormacaoAcademica: IFormacaoAcademica[]) => void
  Experiencia: IExperiencia[],
  setExperiencia: (_Experiencia: IExperiencia[]) => void
  OutrasInformacoes: IOutrasInformacoes,
  setOutrasInformacoes: (_OutrasInformacoes: IOutrasInformacoes) => void
}

const store = create<Store>()((set) => ({
  DadosPessoais: {
    NomeCompleto: "",
    Subtitulo: "",
    Email: "",
    Nacionalidade: "",
    Idade: "",
    TelefoneResidencial: "",
    Celular: "",
    Endereco: "",
    Sobre: ""
  },
  setDadosPessoais: (_DadosPessoais) => set(() => ({ DadosPessoais: _DadosPessoais })),
  FormacaoAcademica: [
    {
      Curso: "",
      Instituicao: "",
      AnoDeConclusao: ""
    },
  ],
  setFormacaoAcademica: (_FormacaoAcademica) => set(() => ({ FormacaoAcademica: _FormacaoAcademica })),
  Experiencia: [
    {
      Empresa: "",
      Inicio: "",
      Fim: "",
      Cargo: "",
      Descricao: ""
    }
  ],
  setExperiencia: (_Experiencia) => set(() => ({ Experiencia: _Experiencia })),
  OutrasInformacoes: { OutrasInformacoes: "" },
  setOutrasInformacoes: (_OutrasInformacoes) => set(() => ({ OutrasInformacoes: _OutrasInformacoes })),
}));

export default store;
