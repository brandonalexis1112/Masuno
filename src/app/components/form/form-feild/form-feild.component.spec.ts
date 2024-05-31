import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormFeildComponent } from './form-feild.component';

describe('FormFeildComponent', () => {
  let component: FormFeildComponent;
  let fixture: ComponentFixture<FormFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFeildComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate max length', () => {
    component['maxLength'] = 10;
    const control = new FormControl('12345678901');
    const errors = component.validate(control);
    expect(errors?.['maxLength']).toBeTruthy();
  });

  it('should validate pattern', () => {
    component['pattern'] = '^[a-zA-Z]*$';
    const control = new FormControl('1234');
    const errors = component.validate(control);
    expect(errors?.['pattern']).toBeTruthy();
  });

  it('should update value on input', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'new value';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.value).toBe('new value');
  });
});
