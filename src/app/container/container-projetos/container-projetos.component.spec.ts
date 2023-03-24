import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProjetosComponent } from './container-projetos.component';

describe('ContainerProjetosComponent', () => {
  let component: ContainerProjetosComponent;
  let fixture: ComponentFixture<ContainerProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
