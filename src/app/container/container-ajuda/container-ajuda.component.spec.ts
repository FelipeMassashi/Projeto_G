import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAjudaComponent } from './container-ajuda.component';

describe('ContainerAjudaComponent', () => {
  let component: ContainerAjudaComponent;
  let fixture: ComponentFixture<ContainerAjudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAjudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAjudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
