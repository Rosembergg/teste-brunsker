import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelCadastrarComponent } from './imovel-cadastrar.component';

describe('ImovelCadastrarComponent', () => {
  let component: ImovelCadastrarComponent;
  let fixture: ComponentFixture<ImovelCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImovelCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
