import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioCadastrarComponent } from './proprietario-cadastrar.component';

describe('ProprietarioCadastrarComponent', () => {
  let component: ProprietarioCadastrarComponent;
  let fixture: ComponentFixture<ProprietarioCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietarioCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProprietarioCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
