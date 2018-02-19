import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasListagemComponent } from './lojas-listagem.component';

describe('LojasListagemComponent', () => {
  let component: LojasListagemComponent;
  let fixture: ComponentFixture<LojasListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojasListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
