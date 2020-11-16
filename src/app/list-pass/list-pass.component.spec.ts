import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPassComponent } from './list-pass.component';

describe('ListPassComponent', () => {
  let component: ListPassComponent;
  let fixture: ComponentFixture<ListPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
