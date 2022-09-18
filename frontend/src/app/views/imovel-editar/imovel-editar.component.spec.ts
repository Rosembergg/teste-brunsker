import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelEditarComponent } from './imovel-editar.component';

describe('ImovelEditarComponent', () => {
  let component: ImovelEditarComponent;
  let fixture: ComponentFixture<ImovelEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImovelEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
