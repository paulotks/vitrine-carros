import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCssComponent } from './teste-css.component';

describe('TesteCssComponent', () => {
  let component: TesteCssComponent;
  let fixture: ComponentFixture<TesteCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteCssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
