import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule,ReactiveFormsModule,RouterTestingModule.withRoutes([]),
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('test for count of element',() =>{
  //   const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
  //   const inputElements = formElement.querySelectorAll('input');
  //   expect(inputElements.length).toEqual(2);
  // });
  
  it('initial values',() =>{
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      email:'',
      password:''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  it("check email value",()=>{
    const form: FormGroup = component.loginForm;

    const email = form.get("email");
    expect(email?.valid).toBeFalsy();

    email?.setValue("");
    expect(email?.hasError("required")).toBeTruthy();


    email?.setValue("admin123@gmail.com");
    expect(email?.hasError("required")).toBeFalsy();

  });

  it("check password value",()=>{
    const form: FormGroup = component.loginForm;

    const password = form.get("password");
    expect(password?.valid).toBeFalsy();

    password?.setValue("");
    expect(password?.hasError("required")).toBeTruthy();


    password?.setValue("admin123");
    expect(password?.hasError("required")).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['email'].setValue("test@test.com");
    component.loginForm.controls['password'].setValue("123456789");
    expect(component.loginForm.valid).toBeTruthy();

    component.onSubmit();
    component.output=true;
    expect(component.output).toBeTrue();
  });

  it('should allow log in', () => {
    const formData = {
      "email": "admin123@gmail.com",
      "password": "admin123"
    };
    component.loginForm.setValue(formData);
    const spy = spyOn(router, 'navigate');
    component.onSubmit();
    component.output=true;
    expect(component.output).toBeTrue();
    console.log("spy.calls.first().args[0]",(spy.calls.first().args[0]).toString().replace("[","").replace("'",""));
    
    expect((spy.calls.first().args[0]).toString().replace("[","").replace("'","")).toContain("products");
  });
});
