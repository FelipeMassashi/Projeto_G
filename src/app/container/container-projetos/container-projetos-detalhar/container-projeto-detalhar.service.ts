import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProjetoListarRecursos {

  constructor() { }

  getRecursos(){
    return  [
      {id: 1, fonte_financiadora: "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis", natureza_do_recurso: "Contrapartida Não Financeira", origem_da_fonte: "Nacional", tipo_da_fonte: "Governo Federal", valor_previsto: "R$ 125.850"},
      {id: 2, codigo: "ACT CNJ", nome: "Execução de pesquisas, troca de informações e dados para a condução de análises empíricas e intercâmbio de conhecimentos, a fim de orientar e fortalecer o desenho e a execução de políticas públicas.", ur: "IBAMA", situacao: "Concluído",dataFim: "18 Abr 2023"},
      {id: 3, codigo: "ANA-AMAZONAS-0014", nome: "ACT com Visiona Tecnologia Espacial S/A - Uso das imagens geradas no âmbito do Programa do Nanossatélite VCUB-1", ur: "SECEX", situacao: "Concluído",dataFim: "02 Dez 2023"},
      {id: 4, codigo: "ANA-COPSUL-0007", nome: "Capacitação em gestão de recursos hídricos no Paraguai com ênfase nas zonas", ur: "SECEX", situacao: "Em conclusão",dataFim: "10 Dez 2023"}
    ]
  }

}
