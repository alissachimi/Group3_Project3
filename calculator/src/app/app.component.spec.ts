import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // should pass
  it('should clear the display when clear is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // append an expression to the display
    component.appendInput('5');
    component.appendInput('+');
    component.appendInput('3');

    // first check display is correct
    expect(component.display).toBe('5+3');

    // call clear
    component.clear();

    // check has been successfully cleared
    expect(component.display).toBe('');
  });

  // should pass
  it('should calculate the result when calculate is called with a valid addition expression', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // append an expression to the display
    component.appendInput('5');
    component.appendInput('+');
    component.appendInput('3');

    // first check display is correct
    expect(component.display).toBe('5+3');

    // call calculate
    component.calculate();

    // check has been successfully calculated
    expect(String(component.display)).toBe("8");
  });

  // should pass
  it('should calculate the result when calculate is called with a valid multiplication expression', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // append an expression to the display
    component.appendInput('5');
    component.appendInput('*');
    component.appendInput('3');

    // first check display is correct
    expect(component.display).toBe('5*3');

    // call calculate
    component.calculate();

    // check has been successfully calculated
    expect(String(component.display)).toBe("15");
  });

  // should pass
  it('should calculate the result when calculate is called with a valid division expression', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // append an expression to the display
    component.appendInput('9');
    component.appendInput('/');
    component.appendInput('3');

    // first check display is correct
    expect(component.display).toBe('9/3');

    // call calculate
    component.calculate();

    // check has been successfully calculated
    expect(String(component.display)).toBe("3");
  });

  // should pass
  it('should calculate the result when calculate is called with a valid subtraction expression', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // append an expression to the display
    component.appendInput('5');
    component.appendInput('-');
    component.appendInput('3');

    // first check display is correct
    expect(component.display).toBe('5-3');

    // call calculate
    component.calculate();

    // check has been successfully calculated
    expect(String(component.display)).toBe("2");
  });

  // should pass
  it('should append / when "/" is pressed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // get all buttons
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    // Find the button with text '3'
    const button = buttons.find(btn => btn.nativeElement.textContent.trim() === '/');

    // Simulate a click on the button
    button?.triggerEventHandler('click', null);

    // Check the display value
    fixture.detectChanges();
    expect(component.display).toBe('/');
  })

  // EXPECTED TO FAIL!
  it('should append . when "." is pressed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // get all buttons
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    // Find the button with text '3'
    const button = buttons.find(btn => btn.nativeElement.textContent.trim() === '.');

    // Simulate a click on the button
    button?.triggerEventHandler('click', null);

    // Check the display value
    fixture.detectChanges();
    expect(component.display).toBe('.');
  })

  // EXPECTED TO FAIL!
  it('should append 3 when "3" is pressed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // get all buttons
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    // Find the button with text '3'
    const button = buttons.find(btn => btn.nativeElement.textContent.trim() === '3');

    // Simulate a click on the button
    button?.triggerEventHandler('click', null);

    // Check the display value
    fixture.detectChanges();
    expect(component.display).toBe('3');
  })
});
