/* eslint-disable no-extra-parens */
"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { useStore } from "zustand";
import store from "@/context/store";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf",
});

Font.register({
  family: "Lato",
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});

Font.register({
  family: "Lato Italic",
  src: "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf",
});

Font.register({
  family: "Lato Bold",
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F5F5F5",
    fontFamily: "Lato"
  },
  PersonalData: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "extrabold",
  },
  subtitleName: {
    fontSize: 15,
    fontFamily: "Lato Italic",
    fontWeight: "light",
    marginBottom: 10
  },
  text: {
    fontSize: 12,
  },
  PDFViewer: {
    width : "80%",
    height: "90vh"
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "light",
    marginBottom: 10
  },
  AcademicFormation: {
    padding: 10,
  },
  sobre: {
    paddingHorizontal: 20
  },
  Experience: {
    padding: 10,
  },
  OtherInformation: {
    padding: 10,
  }
});

export default function CurriculumRender() {
  const { DadosPessoais, FormacaoAcademica, Experiencia, OutrasInformacoes } = useStore(store);

  return (
    <PDFViewer style={styles.PDFViewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <View style={styles.PersonalData}>
              <Text style={styles.header}>{DadosPessoais.NomeCompleto}</Text>
              {DadosPessoais.Subtitulo && <Text style={styles.subtitleName}>{DadosPessoais.Subtitulo}</Text>}
              <Text style={styles.text}>{DadosPessoais.Email}</Text>
              {DadosPessoais.Idade && <Text style={styles.text}>Idade: {DadosPessoais.Idade}</Text>}
              {DadosPessoais.Nacionalidade && <Text style={styles.text}>Nacionalidade: {DadosPessoais.Nacionalidade}</Text>}
              {DadosPessoais.TelefoneResidencial && <Text style={styles.text}>Telefone Residencial: {DadosPessoais.TelefoneResidencial}</Text>}
              {DadosPessoais.Celular && <Text style={styles.text}>Celular: {DadosPessoais.Celular}</Text>}
              {DadosPessoais.Endereco && <Text style={styles.text}>Endereço: {DadosPessoais.Endereco}</Text>}
              {DadosPessoais.Sobre && 
              <>
                <Text style={{ ...styles.text, marginTop: 10 }}>Sobre: </Text>
                <Text style={{ ...styles.sobre, ...styles.text }}>{DadosPessoais.Sobre}</Text>
              </>
              }
            </View>
            { (FormacaoAcademica.length > 0 && FormacaoAcademica[0].Curso)  && 
              <View style={styles.AcademicFormation}>
                <Text style={styles.subtitle}>Formação Acadêmica: </Text>
                {FormacaoAcademica.map((formacao, index) => 
                  <View key={index} style={{ padding: 5 }}>
                    <Text style={styles.text}>{formacao.Curso}</Text>
                    <View style={{ display: "flex", gap: 3, flexDirection: "row" }}>
                      <Text style={styles.text}>{formacao.Instituicao} -</Text>
                      <Text style={styles.text}>{formacao.AnoDeConclusao}</Text>
                    </View>
                  </View>
                )}
              </View>
            }
            { (Experiencia.length > 0 && Experiencia[0].Cargo) && 
              <View style={styles.Experience}>
                <Text style={styles.subtitle}>Experiencia: </Text>
                {Experiencia.map((experiencia, index) => 
                  <View key={index} style={{ padding: 5 }}>
                    <View style={{ display: "flex", gap: 3, flexDirection: "row" }}>
                      <Text style={styles.text}>{experiencia.Cargo}</Text>
                      <Text style={styles.text}>{experiencia.Inicio} -</Text>
                      <Text style={styles.text}>{experiencia.Fim}</Text>
                    </View>
                    <Text style={{ ...styles.text, fontFamily: "Lato Italic" }}>{experiencia.Empresa}</Text>
                    <Text style={styles.text}>{experiencia.Descricao}</Text>
                  </View>
                )}
              </View>
            }
            {OutrasInformacoes.OutrasInformacoes && 
            <View style={styles.OtherInformation}>
              <Text style={styles.subtitle}>Informações Adicionais: </Text>
              <Text style={{ ...styles.text, paddingHorizontal: 10 }}>{ OutrasInformacoes.OutrasInformacoes }</Text>
            </View>
            }
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
