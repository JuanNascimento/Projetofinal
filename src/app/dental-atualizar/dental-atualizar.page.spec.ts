import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DentalAtualizarPage } from './dental-atualizar.page';

describe('DentalAtualizarPage', () => {
  let component: DentalAtualizarPage;
  let fixture: ComponentFixture<DentalAtualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalAtualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DentalAtualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
