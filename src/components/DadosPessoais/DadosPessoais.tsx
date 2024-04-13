"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useStore } from "zustand";
import store from "@/context/store";
import { IDadosPessoais } from "./IDadosPessoais";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  NomeCompleto: z.string().min(5, { message: "O nome deve ter ao menos 5 caracteres." }).max(100),
  Subtitulo: z.string().optional(),
  Email: z.string().email({ message: "O email deve ser válido." }),
  Nacionalidade: z.string().optional(),
  Idade: z.string().optional(),
  TelefoneResidencial: z.string().optional(),
  Celular: z.string().optional(),
  Endereco: z.string().optional(),
  Sobre: z.string().min(20, { message: "É nessário dizer algo sobre você." })
});

export default function DadosPessoais() { 
  const { setDadosPessoais, DadosPessoais } = useStore(store);

  const form = useForm<IDadosPessoais>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      NomeCompleto: DadosPessoais.NomeCompleto,
      Email: DadosPessoais.Email,
      Nacionalidade: DadosPessoais.Nacionalidade,
      Idade: DadosPessoais.Idade,
      TelefoneResidencial: DadosPessoais.TelefoneResidencial,
      Celular: DadosPessoais.Celular,
      Endereco: DadosPessoais.Endereco,
      Subtitulo: DadosPessoais.Subtitulo,
      Sobre: DadosPessoais.Sobre
    },
  });

  const onSubmit = (values: IDadosPessoais) => {
    setDadosPessoais(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Dados Pessoais
        </CardTitle>
        <CardDescription>
          É recomendável preencher com informações pessoais indispensáveis, pois vão ajudar as empresas que vão receber seu currículo definirem o seu perfil.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="NomeCompleto"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"NomeCompleto"}>Nome Completo <span className="text-red-800">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Henrik Ruan Santos de Souza" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />
            <FormField
              control={form.control}
              name="Subtitulo"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"Subtitulo"}>Subtítulo</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Desenvolvedor Fullstack" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"Email"}>Email <span className="text-red-800">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="seu@email.com"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />

            <FormField
              control={form.control}
              name="Sobre"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"Sobre"}>Sobre <span className="text-red-800">*</span></FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Sou desenvolvedor WEB Full Stack,
                      atualmente aluno em Análise e Desenvolvimento de Sistemas na
                      Fatec Taubaté, já atuei como... meus passatempos são...
                      estou em busca do meu primeiro emprego como desenvolvedor." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />

            <FormField
              control={form.control}
              name="Nacionalidade"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"Nacionalidade"}>Nacionalidade</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Brasileira" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />

            <FormField
              control={form.control}
              name="Idade"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"Idade"}>Idade</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="18" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />

            <FormField
              control={form.control}
              name="TelefoneResidencial"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"TelefoneResidencial"}>Telefone Residêncial</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="(55) 9999-9999" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />

            <FormField
              control={form.control}
              name="Celular"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"Celular"}>Celular</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="(55) 99999-9999" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }
            />

            <FormField
              control={form.control}
              name="Endereco"
              render={({ field }) => 
                <FormItem>
                  <FormLabel data-testid={"Endereco"}>Endereço</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="México, Michoacán, Tangamandápio, C. Madero 190, Barrio de San Rafael."/>
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
