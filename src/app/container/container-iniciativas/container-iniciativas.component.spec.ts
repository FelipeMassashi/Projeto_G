import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerIniciativasComponent } from './container-iniciativas.component';

describe('ContainerIniciativasComponent', () => {
  let component: ContainerIniciativasComponent;
  let fixture: ComponentFixture<ContainerIniciativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerIniciativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerIniciativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
