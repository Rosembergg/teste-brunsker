import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelPesquisarComponent } from './imovel-pesquisar.component';

describe('ImovelPesquisarComponent', () => {
  let component: ImovelPesquisarComponent;
  let fixture: ComponentFixture<ImovelPesquisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelPesquisarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImovelPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
