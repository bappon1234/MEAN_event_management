import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string = '';
 

constructor(
  private router:Router,
  private fb:FormBuilder,
  private authService:AuthService
  
){this.registerForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  number: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(6)]],
});
}



onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
    return;
  }

  this.authService.register(this.registerForm.value).subscribe(
    data => {
      console.log('Registration successful', data);
      this.router.navigate(['/login'])
    },
    error => {
      this.errorMessage = error.error.message || 'Registration failed';
    });
  }
  toggleForm(){
    this.router.navigate(['/login']);
  }
}
