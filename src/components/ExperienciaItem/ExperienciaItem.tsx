import React, { useEffect } from "react";
import { IExperiencia } from "../Experiencia/IExperiencia";

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";

interface IExperienciaItem {
  experiencia: IExperiencia, 
  index: number, 
  // eslint-disable-next-line no-unused-vars
  deleteExperiencia: (index: number) => void
  // eslint-disable-next-line no-unused-vars
  updateExperiencia: (index: number, newExperiencia: IExperiencia) => void
}

const formSchema = z.object({
  Empresa: z.string(),
  Inicio: z.string(),
  Fim: z.string(),
  Cargo: z.string(),
  Descricao: z.string()
});

export default function ExperienciaItem({ experiencia, index, deleteExperiencia, updateExperiencia }: IExperienciaItem) {
  const form = useForm<IExperiencia>({
    resolver: zodResolver(formSchema),
    defaultValues: experiencia,
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      updateExperiencia(index, {
        Empresa: values.Empresa || "",
        Inicio: values.Inicio || "",
        Fim: values.Fim || "",
        Cargo: values.Cargo || "",
        Descricao: values.Descricao || "",
      });
    });

    return () => subscription.unsubscribe();
  }, [form.watch, form, index, updateExperiencia]);

  return (
    <Form {...form} key={index}>
      <form className="space-y-3">

        <FormField
          control={form.control}
          name="Empresa"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Tabajara Comunicações, sei lá :)"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />

        <FormField
          control={form.control}
          name="Inicio"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Início</FormLabel>
              <FormControl>
                <Input {...field} placeholder="1999"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />

        <FormField
          control={form.control}
          name="Fim"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Fim</FormLabel>
              <FormControl>
                <Input {...field} placeholder="2002"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />

        <FormField
          control={form.control}
          name="Cargo"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Cargo</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Desenvolvedor Fullstack"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />

        <FormField
          control={form.control}
          name="Descricao"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Responsável por..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />

        <Button className="text-red-600" type="button" onClick={() => deleteExperiencia(index)}>
          Deletar
        </Button>
      </form>
    </Form>
  );
}
