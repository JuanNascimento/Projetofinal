import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DentaisPage } from './dentais.page';

describe('DentaisPage', () => {
  let component: DentaisPage;
  let fixture: ComponentFixture<DentaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DentaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
