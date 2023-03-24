import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerAjudaComponent } from './container/container-ajuda/container-ajuda.component';
import { ContainerColegiadoComponent } from './container/container-colegiado/container-colegiado.component';
import { ContainerIniciativasComponent } from './container/container-iniciativas/container-iniciativas.component';
import { ContainerLegislacaoComponent } from './container/container-legislacao/container-legislacao.component';


import { ContainerProjetosDetalharComponent } from './container/container-projetos/container-projetos-detalhar/container-projetos-detalhar.component';
import { ContainerProjetosComponent } from './container/container-projetos/container-projetos.component';
import { ContainerRelatorioComponent } from './container/container-relatorio/container-relatorio.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TobarComponent } from './tobar/tobar.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    ContainerProjetosComponent,
    ContainerIniciativasComponent,
    ContainerProjetosDetalharComponent,
    TobarComponent,
    ContainerRelatorioComponent,
    ContainerLegislacaoComponent,
    ContainerColegiadoComponent,
    ContainerAjudaComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    BsDropdownModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgbTooltipModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
