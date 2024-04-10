import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DadosPessoais from "@/components/DadosPessoais/DadosPessoais";
import CurriculumRender from "@/components/CurriculumRender/CurriculumRender";
import FormacaoAcademica from "@/components/FormacaoAcademica/FormacaoAcademica";
import Experiencia from "@/components/Experiencia/Experiencia";
import OutrasInformacoes from "@/components/OutrasInformacoes/OutrasInformacoes";

export default function Home() {
  return (
    <main className="flex items-start justify-start gap-5 px-32 py-5">
      <Tabs className="w-8/12" defaultValue="DadosPessoais">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="DadosPessoais">Dados pessoais</TabsTrigger>
          <TabsTrigger value="FormacaoAcademica">Formação acadêmica</TabsTrigger>
          <TabsTrigger value="Experiencia">Experiência</TabsTrigger>
          <TabsTrigger value="InformacoesAdicionais">Informações adicionais</TabsTrigger>
        </TabsList>
        <TabsContent value="DadosPessoais"><DadosPessoais /></TabsContent>
        <TabsContent value="FormacaoAcademica"><FormacaoAcademica /></TabsContent>
        <TabsContent value="Experiencia"><Experiencia /></TabsContent>
        <TabsContent value="InformacoesAdicionais"><OutrasInformacoes /></TabsContent>
      </Tabs>
      <CurriculumRender />
    </main>
  );
}
