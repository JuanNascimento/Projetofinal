import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DentalNovoPage } from './dental-novo.page';

describe('DentalNovoPage', () => {
  let component: DentalNovoPage;
  let fixture: ComponentFixture<DentalNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DentalNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
