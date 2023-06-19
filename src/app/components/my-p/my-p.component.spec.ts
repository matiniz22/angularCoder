import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPComponent } from './my-p.component';

describe('MyPComponent', () => {
  let component: MyPComponent;
  let fixture: ComponentFixture<MyPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPComponent]
    });
    fixture = TestBed.createComponent(MyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
