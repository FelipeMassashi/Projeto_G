import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLegislacaoComponent } from './container-legislacao.component';

describe('ContainerLegislacaoComponent', () => {
  let component: ContainerLegislacaoComponent;
  let fixture: ComponentFixture<ContainerLegislacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerLegislacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerLegislacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
