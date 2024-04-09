"use client";

import React, { useEffect, useState } from "react";
import store from "@/context/store";
import { useStore } from "zustand";
import { IExperiencia } from "./IExperiencia";
import ExperienciaItem from "../ExperienciaItem/ExperienciaItem";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experiencia() {
  const { setExperiencia, Experiencia } = useStore(store);
  const [ experienciasPage, setExperienciasPage ] = useState<IExperiencia[]>([]);

  useEffect(() => {
    setExperienciasPage(Experiencia);
  }, [Experiencia]);

  const submit = (values: IExperiencia[]) => {
    setExperiencia(values);
  };

  const addExperiencia = () => {
    setExperienciasPage([
      ...experienciasPage,
      {
        Empresa: "",
        Inicio: "",
        Fim: "",
        Cargo: "",
        Descricao: ""
      },
    ]);
  };

  const deleteExperiencia = (index: number) => {
    const newExperiencias = [...experienciasPage];
    newExperiencias.splice(index, 1);
    setExperienciasPage(newExperiencias);
  };

  const updateExperiencia = (index: number, newExperiencia: IExperiencia) => {
    const newExperiencias = [...experienciasPage];
    newExperiencias[index] = newExperiencia;
    setExperienciasPage(newExperiencias);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Experiência
        </CardTitle>
        <CardDescription>
          Colocar neste campo informação sobre as suas últimas experiências profissionais. Escolha apenas as experiências mais relevantes para a vaga ou que mostrem o seu percurso profissional mais recente.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        { experienciasPage.map((experiencia, index) => <ExperienciaItem key={index} updateExperiencia={updateExperiencia} deleteExperiencia={deleteExperiencia} experiencia={experiencia} index={index} /> )}
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button className="mt-3" type="button" onClick={addExperiencia}>
          + Adicionar outro experiência
        </Button>
        <Button className="mt-3" type="button" onClick={() => submit(experienciasPage)}>Salvar</Button>
      </CardFooter>
    </Card>
  );
}
