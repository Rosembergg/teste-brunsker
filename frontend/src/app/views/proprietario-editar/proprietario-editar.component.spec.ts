import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioEditarComponent } from './proprietario-editar.component';

describe('ProprietarioEditarComponent', () => {
  let component: ProprietarioEditarComponent;
  let fixture: ComponentFixture<ProprietarioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietarioEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProprietarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
