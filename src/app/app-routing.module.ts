import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ContainerProjetosComponent } from './container/container-projetos/container-projetos.component';
import { ContainerIniciativasComponent } from './container/container-iniciativas/container-iniciativas.component';
import { ContainerProjetosDetalharComponent } from './container/container-projetos/container-projetos-detalhar/container-projetos-detalhar.component';
import { ContainerRelatorioComponent } from './container/container-relatorio/container-relatorio.component';
import { ContainerLegislacaoComponent } from './container/container-legislacao/container-legislacao.component';
import { ContainerColegiadoComponent } from './container/container-colegiado/container-colegiado.component';
import { ContainerAjudaComponent } from './container/container-ajuda/container-ajuda.component';

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'projetos', component: ContainerProjetosComponent},
  {path: 'projetos-detalhar', component: ContainerProjetosDetalharComponent},
  {path: 'iniciativas', component: ContainerIniciativasComponent},
  {path: 'relatorio', component: ContainerRelatorioComponent},
  {path: 'legislacao', component: ContainerLegislacaoComponent},
  {path: 'colegiado', component: ContainerColegiadoComponent},
  {path: 'ajuda', component: ContainerAjudaComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
