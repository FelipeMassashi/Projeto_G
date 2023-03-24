import { Component, OnInit } from '@angular/core';
import {
  faArrowsAltH,
  faClipboardCheck,
  faDollarSign,
  faFile,
  faNetworkWired,
  faPlus,
  faSort,
  faUpload,
  faUser,
  faUserEdit,
  faUserTie,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';

import { ServiceProjetoListarRecursos } from './container-projeto-detalhar.service';

@Component({
  selector: 'app-container-projetos-detalhar',
  templateUrl: './container-projetos-detalhar.component.html',
  styleUrls: ['./container-projetos-detalhar.component.scss'],
})
export class ContainerProjetosDetalharComponent implements OnInit {

  loading: boolean = true;

  recursos = [];

  teste: number = Math.floor(Math.random() * 10);
  teste1 :number = Math.floor(Math.random() * 10);
  teste2 :number = Math.floor(Math.random() * 10);
  teste3 :number = Math.floor(Math.random() * 100);
  teste4 :number = Math.floor(Math.random() * 100);

  icon_arquivo = faFile;
  icon_anexar = faUpload;
  icon_money = faDollarSign;
  icon_checkFile = faClipboardCheck;
  icon_plus = faPlus;
  icon_edit = faUserEdit;
  icon_lig = faNetworkWired;
  icon_setas = faArrowsAltH;
  icon_responsavel = faUserTie;
  icon_substituto = faUser;
  icon_ordenar = faSort;
  icon_projeto = faProjectDiagram;

  constructor(private ServiceProjetoListarRecursos: ServiceProjetoListarRecursos) {
    this.recursos = this.ServiceProjetoListarRecursos.getRecursos();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      console.log(this.loading);
    }, 1000);
  }

}
