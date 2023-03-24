import { Injectable } from '@angular/core';

// Injeção de Dependência -> o anuglar cli instância automaticamente uma classe
@Injectable({
  providedIn: 'root'
})
export class ServiceProjetoService {

  constructor() { }

  getProjetos_vencidos(){
    return  [
      {id: 1, codigo: "ACT CENSIPAM/IBAMA", nome: "Acordo de Cooperação Técnica do Centro Gestor e Operacional do Sistema de Proteção da Amazônia – Censipam e o Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis – Ibama", ur: "IBAMA", situacao: "Em conclusão", dataFim: "12 Mar 2023"},
      {id: 2, codigo: "ACT CNJ", nome: "Execução de pesquisas, troca de informações e dados para a condução de análises empíricas e intercâmbio de conhecimentos, a fim de orientar e fortalecer o desenho e a execução de políticas públicas.", ur: "IBAMA", situacao: "Concluído",dataFim: "18 Abr 2023"},
      {id: 3, codigo: "ANA-AMAZONAS-0014", nome: "ACT com Visiona Tecnologia Espacial S/A - Uso das imagens geradas no âmbito do Programa do Nanossatélite VCUB-1", ur: "SECEX", situacao: "Concluído",dataFim: "02 Dez 2023"},
      {id: 4, codigo: "ANA-COPSUL-0007", nome: "Capacitação em gestão de recursos hídricos no Paraguai com ênfase nas zonas", ur: "SECEX", situacao: "Em conclusão",dataFim: "10 Dez 2023"}
    ]
  }

  getProjetos_vigentes(){
    return [
      {id: 1, codigo: "ACT CENSIPAM/IBAMA", nome: "Cooperação Sul-Sul para o fortalecimento da gestão integrada e do uso sustentável dos recursos hídricos o contexto dos países da América Latina e Caribe e da Comunidade dos Países de Líng", ur: "IBAMA", situacao: "Cancelado", dataFim: "12 Mar 2023"},
      {id: 2, codigo: "ACT CNJ", nome: "Apoio ao desenvolvimento da gestão e do sistema de informações de recursos hídricos da Nicarágua", ur: "IBAMA", situacao: "Transferido",dataFim: "18 Abr 2023"},
      {id: 3, codigo: "ANA-AMAZONAS-0014", nome: "Criação de coleção de cactos e suculentas e capacitação da equipe do Jardim Botânico de Juiz de Fora", ur: "SECEX", situacao: "Transferido",dataFim: "02 Dez 2023"}
    ]
  }

  getProjetos_outros(){
    return [
      {id: 1, codigo: "ACT CENSIPAM/IBAMA", nome: "Projeto Interáguas", ur: "IBAMA", situacao: "Suspenso", dataFim: "12 Mar 2023"},
      {id: 2, codigo: "DEFRA-TF015228", nome: "Fortalecimento da rede hidrológica, implementação de uma sala de situação e capacitação técnica para a gestão interada dos recursos hídricos", ur: "SAP", situacao: "Transferido",dataFim: "11 Abr 2023"}
    ]
  }

}
