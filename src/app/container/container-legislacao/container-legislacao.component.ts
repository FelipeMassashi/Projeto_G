import { Component, OnInit } from '@angular/core';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container-legislacao',
  templateUrl: './container-legislacao.component.html',
  styleUrls: ['./container-legislacao.component.scss']
})
export class ContainerLegislacaoComponent implements OnInit {

  icon_legislacao = faLandmark;

  constructor() { }

  ngOnInit(): void {
  }

}
