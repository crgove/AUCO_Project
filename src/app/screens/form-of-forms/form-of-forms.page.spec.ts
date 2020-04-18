import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormOfFormsPage } from './form-of-forms.page';

describe('FormOfFormsPage', () => {
  let component: FormOfFormsPage;
  let fixture: ComponentFixture<FormOfFormsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOfFormsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormOfFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
