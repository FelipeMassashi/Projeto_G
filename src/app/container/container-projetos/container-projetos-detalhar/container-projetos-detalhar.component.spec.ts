import { ContainerProjetosDetalharComponent } from './container-projetos-detalhar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ContainerProjetosDetalharComponent', () => {
  let component: ContainerProjetosDetalharComponent;
  let fixture: ComponentFixture<ContainerProjetosDetalharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProjetosDetalharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProjetosDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
