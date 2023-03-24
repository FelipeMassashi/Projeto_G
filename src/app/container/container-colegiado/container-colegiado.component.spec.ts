import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerColegiadoComponent } from './container-colegiado.component';

describe('ContainerColegiadoComponent', () => {
  let component: ContainerColegiadoComponent;
  let fixture: ComponentFixture<ContainerColegiadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerColegiadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerColegiadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
