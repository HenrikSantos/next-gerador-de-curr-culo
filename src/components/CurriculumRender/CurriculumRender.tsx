"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from "@react-pdf/renderer";
import { useStore } from "zustand";
import store from "@/context/store";

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
  FirstSection: {
    padding: 10,
    flexGrow: 1,
    borderBottom: "1 solid #CCCCCC",
  },
  header: {
    fontSize: 18,
    fontWeight: "extrabold",
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Lato Italic",
    fontWeight: "light",
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  PDFViewer: {
    width : "80%",
    height: "90vh"
  }
});

export default function CurriculumRender() {
  const { DadosPessoais } = useStore(store);

  return (
    <PDFViewer style={styles.PDFViewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.FirstSection}>
            <Text style={styles.header}>{DadosPessoais.NomeCompleto}</Text>
            {DadosPessoais.Subtitulo && <Text style={styles.subtitle}>{DadosPessoais.Subtitulo}</Text>}
            <Text style={styles.text}>{DadosPessoais.Email}</Text>
            {DadosPessoais.Idade && <Text style={styles.text}>Idade: {DadosPessoais.Idade}</Text>}
            {DadosPessoais.Nacionalidade && <Text style={styles.text}>Nacionalidade: {DadosPessoais.Nacionalidade}</Text>}
            {DadosPessoais.TelefoneResidencial && <Text style={styles.text}>Telefone Residencial: {DadosPessoais.TelefoneResidencial}</Text>}
            {DadosPessoais.Celular && <Text style={styles.text}>Celular: {DadosPessoais.Celular}</Text>}
            {DadosPessoais.Endereco && <Text style={styles.text}>Endereço: {DadosPessoais.Endereco}</Text>}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
