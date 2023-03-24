import { Component, OnInit } from '@angular/core';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container-relatorio',
  templateUrl: './container-relatorio.component.html',
  styleUrls: ['./container-relatorio.component.scss']
})
export class ContainerRelatorioComponent implements OnInit {

  icon_relatorio = faClipboard;

  constructor() { }

  ngOnInit(): void {
  }

}
