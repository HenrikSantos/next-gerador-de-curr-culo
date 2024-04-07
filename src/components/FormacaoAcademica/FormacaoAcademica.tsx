"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useStore } from "zustand";
import store from "@/context/store";
import { IFormacaoAcademica } from "./IFormacaoAcademica";
import FormacaoItem from "../FormacaoItem/FormacaoItem";

export default function FormacaoAcademica() {
  const { setFormacaoAcademica, FormacaoAcademica } = useStore(store);
  const [ formacoes, setFormacoes ] = useState<IFormacaoAcademica[]>([]);

  useEffect(() => {
    setFormacoes(FormacaoAcademica);
  }, [FormacaoAcademica]);

  const submit = (values: IFormacaoAcademica[]) => {
    setFormacaoAcademica(values);
  };

  const addFormacao = () => {
    setFormacoes([
      ...formacoes,
      {
        Curso: "",
        Instituicao: "",
        AnoDeConclusao: "",
      },
    ]);
  };

  const deleteFormacao = (index: number) => {
    const newFormacoes = [...formacoes];
    newFormacoes.splice(index, 1);
    setFormacoes(newFormacoes);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Dados Pessoais
        </CardTitle>
        <CardDescription>
          Inserir sua formação acadêmica, colocando os cursos mais importantes para a vaga primeiro e sempre do mais recente para o mais antigo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        { formacoes.map((formacao, index) => <FormacaoItem key={index} deleteFormacao={deleteFormacao} formacao={formacao} index={index} /> )}
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button className="mt-3" type="button" onClick={addFormacao}>
          + Adicionar outro curso
        </Button>
        <Button className="mt-3" type="button" onClick={() => submit}>Salvar</Button>
      </CardFooter>
    </Card>
  );
}
