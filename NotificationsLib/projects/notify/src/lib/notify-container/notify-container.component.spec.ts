import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyContainerComponent } from './notify-container.component';

describe('NotifyContainerComponent', () => {
  let component: NotifyContainerComponent;
  let fixture: ComponentFixture<NotifyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
