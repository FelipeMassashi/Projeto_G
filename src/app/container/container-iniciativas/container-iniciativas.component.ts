import { Component, OnInit, Output } from '@angular/core';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container-iniciativas',
  templateUrl: './container-iniciativas.component.html',
  styleUrls: ['./container-iniciativas.component.scss']
})
export class ContainerIniciativasComponent implements OnInit {

  statusThemeDark: string = 'light'

  ativo: boolean = false;

  icon_iniciativa = faFileSignature;

  constructor() { }

  ngOnInit(): void {}

  @Output() public toggle(){
    const theme = document.body.classList.toggle('dark-theme');
    console.log(this.ativo);
    this.ativo = !this.ativo;

  }

}
