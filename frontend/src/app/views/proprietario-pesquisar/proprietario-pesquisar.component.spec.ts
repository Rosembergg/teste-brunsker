import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioPesquisarComponent } from './proprietario-pesquisar.component';

describe('ProprietarioPesquisarComponent', () => {
  let component: ProprietarioPesquisarComponent;
  let fixture: ComponentFixture<ProprietarioPesquisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietarioPesquisarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProprietarioPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
