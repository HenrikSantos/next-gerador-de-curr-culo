"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useStore } from "zustand";
import store from "@/context/store";

interface IOutrasInformacoes {
  OutrasInformacoes: string
}

const formSchema = z.object({
  OutrasInformacoes: z.string()
});

export default function OutrasInformacoes() {
  const { setOutrasInformacoes, OutrasInformacoes } = useStore(store);

  const form = useForm<IOutrasInformacoes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      OutrasInformacoes,
    },
  });

  const onSubmit = (values: IOutrasInformacoes) => {
    setOutrasInformacoes(values.OutrasInformacoes);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Experiência
        </CardTitle>
        <CardDescription>
          Adicione outras atividades que mostrem um pouco da sua personalidade e que possam ajudar o recrutador a avaliar que tipo de colaborador você é.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="OutrasInformacoes"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"OutrasInformacoes"}>Outras Informações</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Realizei diversos bootcamps... Sou uma pessoa esforçada... Tenho conhecimento em marketing digital... Participei de trabalhos voluntários..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />
            <Button data-testid={"Salvar"} className="mt-3" type="submit">Salvar</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
