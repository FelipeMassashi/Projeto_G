import { Component, OnInit } from '@angular/core';
import { faCaretLeft, faCaretRight, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  statusThemeDark: string = 'light'

  ativo: boolean = false;

  icon_mais = faPlus
  icon_seta_left = faCaretLeft;
  icon_seta_right = faCaretRight;
  icon_home = faHome;

  constructor() {}

  ngOnInit(): void {}

}
