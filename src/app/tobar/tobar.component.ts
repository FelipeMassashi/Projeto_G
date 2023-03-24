import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faBell,
  faClipboard,
  faExclamationCircle,
  faFileSignature,
  faHome,
  faInfoCircle,
  faLandmark,
  faLock,
  faMoon,
  faProjectDiagram,
  faSitemap,
  faSun,
  faUserCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tobar',
  templateUrl: './tobar.component.html',
  styleUrls: ['./tobar.component.scss']
})
export class TobarComponent implements OnInit {

  icon_foto_de_perfil = faUserCircle;
  icon_sininho = faBell;
  icon_sol = faSun;
  icon_exclamacao = faExclamationCircle;
  icon_lua = faMoon;
  icon_home = faHome;
  icon_seguranca = faLock;
  icon_iniciativa = faFileSignature;
  icon_ajuda = faInfoCircle;
  icon_colegiado = faUsers;
  icon_relatorio = faClipboard;
  icon_sistema = faSitemap;
  icon_legislacao = faLandmark;
  icon_projeto = faProjectDiagram;

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    let tema = 'light';
    tema = localStorage.getItem('tema');
    this.getTheme(tema);
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
