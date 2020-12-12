import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DentalExcluirPage } from './dental-excluir.page';

describe('DentalExcluirPage', () => {
  let component: DentalExcluirPage;
  let fixture: ComponentFixture<DentalExcluirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalExcluirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DentalExcluirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
