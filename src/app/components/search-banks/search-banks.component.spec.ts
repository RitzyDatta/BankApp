import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBanksComponent } from './search-banks.component';

describe('SearchBanksComponent', () => {
  let component: SearchBanksComponent;
  let fixture: ComponentFixture<SearchBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
