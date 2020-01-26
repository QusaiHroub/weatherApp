import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    @Input() display: string = "none";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email, Validators.maxLength(180), Validators.pattern("^[a-zA-Z0-9._%+-]+@+(pseu.edu)")]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,11}")]]
        }, {

        });
  }

  onSubmit() {
      if (this.submitted) {
          return;
      }

      this.submitted = true;

      if (this.registerForm.invalid) {
          alert("invalid register");
          return;
      }

      alert("login");
    }

    get registerFormControls() {
        return this.registerForm.controls;
    }

}
