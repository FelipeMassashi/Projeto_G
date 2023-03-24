import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRelatorioComponent } from './container-relatorio.component';

describe('ContainerRelatorioComponent', () => {
  let component: ContainerRelatorioComponent;
  let fixture: ComponentFixture<ContainerRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerRelatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
