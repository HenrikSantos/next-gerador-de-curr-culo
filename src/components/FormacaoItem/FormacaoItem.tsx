import React, { useEffect } from "react";
import { IFormacaoAcademica } from "../FormacaoAcademica/IFormacaoAcademica";
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

interface IFormacaoItem {
  formacao: IFormacaoAcademica, 
  index: number, 
  // eslint-disable-next-line no-unused-vars
  deleteFormacao: (index: number) => void,
  // eslint-disable-next-line no-unused-vars
  updateFormacao: (index: number, newFormacao: IFormacaoAcademica) => void
}

const formSchema = z.object({
  Curso: z.string(),
  Instituicao: z.string(),
  AnoDeConclusao: z.string(),
});

export default function FormacaoItem({ formacao, index, deleteFormacao, updateFormacao }: IFormacaoItem) {
  const form = useForm<IFormacaoAcademica>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Curso: formacao.Curso || "",
      Instituicao: formacao.Instituicao || "",
      AnoDeConclusao: formacao.AnoDeConclusao || "",
    },
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      updateFormacao(index, {
        Curso: values.Curso || "",
        Instituicao: values.Instituicao || "",
        AnoDeConclusao: values.AnoDeConclusao || "",
      });
    });

    return () => subscription.unsubscribe();
  }, [form.watch, form, index, updateFormacao]);

  return (
    <Form {...form} key={index}>
      <form className="space-y-3">
        <FormField
          control={form.control}
          name="Curso"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Curso</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Análise e desenvolvimento de sistemas."/>
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />

        <FormField
          control={form.control}
          name="Instituicao"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Instituição</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Fatec"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />
            
        <FormField
          control={form.control}
          name="AnoDeConclusao"
          render={({ field }) => 
            <FormItem>
              <FormLabel>Ano De Conclusao</FormLabel>
              <FormControl>
                <Input {...field} placeholder="2027"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          }
        />
        <Button className="text-red-600" type="button" onClick={() => deleteFormacao(index)}>
          Deletar
        </Button>
      </form>
    </Form>
  );
}
