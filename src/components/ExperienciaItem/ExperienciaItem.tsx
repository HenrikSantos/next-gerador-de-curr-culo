import React from "react";
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

interface IExperienciaItem {
  experiencia: IExperiencia, 
  index: number, 
  // eslint-disable-next-line no-unused-vars
  deleteExperiencia: (index: number) => void
}

const formSchema = z.object({
  Empresa: z.string(),
  Inicio: z.string(),
  Fim: z.string(),
  Cargo: z.string(),
  Descricao: z.string()
});

export default function ExperienciaItem({ experiencia, index, deleteExperiencia }: IExperienciaItem) {
  const form = useForm<IExperiencia>({
    resolver: zodResolver(formSchema),
    defaultValues: experiencia,
  });

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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
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
