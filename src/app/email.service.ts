import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(form: FormGroup): Observable<any> {
    if (form.valid) {
      return this.http.post('https://formspree.io/f/mnqyrvew', form.value);
    } else {
      return throwError(()=> new Error('Form is invalid'));
    }
  }

}
