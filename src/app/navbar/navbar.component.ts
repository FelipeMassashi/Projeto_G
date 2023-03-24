import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faClipboard,
  faFileSignature,
  faHome,
  faInfoCircle,
  faLandmark,
  faLock,
  faProjectDiagram,
  faSitemap,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  click: boolean = false;

  // Emitindo um evento de mudança nas variaveis 'itemSelect' e 'iconSelected', que são compartilhadas para
  // o componente pai

  icon_home = faHome;
  icon_seguranca = faLock;
  icon_iniciativa = faFileSignature;
  icon_ajuda = faInfoCircle;
  icon_colegiado = faUsers;
  icon_relatorio = faClipboard;
  icon_sistema = faSitemap;
  icon_legislacao = faLandmark;
  icon_projeto = faProjectDiagram;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){}

}
