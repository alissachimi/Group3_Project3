import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should clear the display when clear is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.appendInput('5');
    component.appendInput('+');
    component.appendInput('3');
    expect(component.display).toBe('5+3');
    component.clear();
    expect(component.display).toBe('');
  });

//   it('should calculate the result when calculate is called with a valid expression', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const component = fixture.componentInstance;
//     component.appendInput('5');
//     component.appendInput('+');
//     component.appendInput('3');
//     component.calculate();
//     expect(component.display).toBe("8");
//   });
});
