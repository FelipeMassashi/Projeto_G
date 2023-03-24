import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container-colegiado',
  templateUrl: './container-colegiado.component.html',
  styleUrls: ['./container-colegiado.component.scss']
})
export class ContainerColegiadoComponent implements OnInit {

  icon_colegiado = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
