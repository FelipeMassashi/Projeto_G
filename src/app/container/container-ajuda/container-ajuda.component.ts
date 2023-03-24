import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container-ajuda',
  templateUrl: './container-ajuda.component.html',
  styleUrls: ['./container-ajuda.component.scss']
})
export class ContainerAjudaComponent implements OnInit {

  icon_ajuda = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
