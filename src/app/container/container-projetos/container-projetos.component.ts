import { Component, OnInit } from '@angular/core';
import { faSlidersH, faSort, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import { ServiceProjetoService } from './service-projeto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container-projetos',
  templateUrl: './container-projetos.component.html',
  styleUrls: ['./container-projetos.component.scss']
})
export class ContainerProjetosComponent implements OnInit {

  icon_ordenar = faSort;
  icon_pesquisa_avancada = faSlidersH;
  icon_projeto = faProjectDiagram;

  statusThemeDark: string = 'light';
  ativo: boolean = false;

  teste: number = Math.floor(Math.random() * 100);
  teste1 :number = Math.floor(Math.random() * 100);
  teste2 :number = Math.floor(Math.random() * 100);

  projetos_vencidos = [];
  projetos_vigentes = [];
  projetos_outros = [];

  getColor(x) {
    switch (x) {
      case "Em conclusão":
        return 'em_conclusao'
      case "Concluído":
        return 'concluido'
      case "Cancelado":
        return 'bg-danger'
      case "Transferido":
        return 'transferido'
      case "Suspenso":
        return 'bg-secondary'
    }
  }

  constructor(private ServiceProjetoService: ServiceProjetoService, private route: ActivatedRoute) {
    this.projetos_vencidos = this.ServiceProjetoService.getProjetos_vencidos();

    this.projetos_vigentes = this.ServiceProjetoService.getProjetos_vigentes();

    this.projetos_outros = this.ServiceProjetoService.getProjetos_outros();
  }

  ngOnInit(): void {
    let tema = 'light';
    tema = localStorage.getItem('tema');
    this.getTheme(tema);

    console.log(this.route.snapshot.routeConfig?.path);

  }


  getTheme(tema: string){
    switch (tema) {
      case 'dark':
        localStorage.setItem('tema', 'dark');
        document.getElementById('btn-dark').style.display = 'none';
        document.getElementById('btn-light').style.display = 'block';
        document.documentElement.setAttribute('data-theme', 'dark');
        break;
      default:
        localStorage.setItem('tema', 'light');
        document.getElementById('btn-dark').style.display = 'block';
        document.getElementById('btn-light').style.display = 'none';
        document.documentElement.setAttribute('data-theme', 'light');
        break;
    }
  }

}


