import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.itemSelect = localStorage.getItem('itemSelected');
    this.iconSelect = localStorage.getItem('iconSelected');
  }

  title = 'projeto-1.1';

  teste: any;

  itemSelect: string = sessionStorage.getItem('itemSelected');
  iconSelect: string = sessionStorage.getItem('iconSelected');

  getItemInitial(){
    this.itemSelect = 'Home';
    this.iconSelect = 'icon_home'
  }

  onItem(item: string){
    this.itemSelect = item;
  }

  onIcon(icon: string){
    this.iconSelect = icon;
  }

  onActivate(event){
    window.scroll(0,0);
  }
}

