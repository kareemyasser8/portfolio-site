import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  submitted = false;
  isLoading = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required])
  })

  get name() {
    return this.form.get('name')
  }

  get email() {
    return this.form.get('email')
  }

  get message() {
    return this.form.get('message')
  }

  constructor(private emailService: EmailService) { }


  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.emailService.sendEmail(this.form).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.form.reset();
          alert('Email sent successfully!');
        },
        error: (error) => {
          this.isLoading = false;
          alert('Error sending email')
          this.submitted = true;
        }
      })
    } else {
      this.submitted = true;
    }
  }


  ngOnInit(): void {
  }

}
