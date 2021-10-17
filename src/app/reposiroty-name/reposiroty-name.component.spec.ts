import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposirotyNameComponent } from './reposiroty-name.component';

describe('ReposirotyNameComponent', () => {
  let component: ReposirotyNameComponent;
  let fixture: ComponentFixture<ReposirotyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposirotyNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposirotyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
