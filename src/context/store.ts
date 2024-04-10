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
    NomeCompleto: "Henrik Ruan Santos de Souza",
    Subtitulo: "Desenvolvedor Fullstack",
    Email: "henrik.ruan4@gmail.com",
    Nacionalidade: "Brasileira",
    Idade: "22",
    TelefoneResidencial: "(55) 9999-9999",
    Celular: "(12) 99999-9999",
    Endereco: "Projetada 13",
    Sobre: "Sou desenvolvedor WEB Full Stack, atualmente aluno em Análise e Desenvolvimento de Sistemas na Fatec Taubaté, já atuei como auxiliar administrativo e vendedor interno, meus passatempos são programar, jogar e ler mangás, estou em busca do meu primeiro emprego como desenvolvedor."
  },
  setDadosPessoais: (_DadosPessoais) => set(() => ({ DadosPessoais: _DadosPessoais })),
  FormacaoAcademica: [
    {
      Curso: "Análise e desenvolvimento de sistemas",
      Instituicao: "Fatec Taubaté",
      AnoDeConclusao: "2027",
    },
    {
      Curso: "Técnico de informática",
      Instituicao: "IFSP - Caraguatatuba",
      AnoDeConclusao: "2019",
    },
  ],
  setFormacaoAcademica: (_FormacaoAcademica) => set(() => ({ FormacaoAcademica: _FormacaoAcademica })),
  Experiencia: [
    {
      Empresa: "Americanas S.A",
      Inicio: "2021",
      Fim: "2022",
      Cargo: "Vendedor interno",
      Descricao: "Responsável por prestar um atendimento ao público, também auxiliei na organização da loja, no controle de entrada e saída de mercadorias e no fechamento de caixa."
    },
    {
      Empresa: "Litoral MED",
      Inicio: "2020",
      Fim: "2020",
      Cargo: "Assistente administrativo",
      Descricao: "Responsável pelo atendimento telefônico e presencial e pela organização dos arquivos da empresa. Também me encarreguei de enviar e receber documentos por e-mail e criar planilhas no Excel."
    }
  ],
  setExperiencia: (_Experiencia) => set(() => ({ Experiencia: _Experiencia })),
  OutrasInformacoes: { OutrasInformacoes: "Meus principais hobbies são: programação, hacking, arte 2D/3D, jogos, criptografia e tecnologia, e Minha principal característica é ser resiliente!" },
  setOutrasInformacoes: (_OutrasInformacoes) => set(() => ({ OutrasInformacoes: _OutrasInformacoes })),
}));

export default store;
