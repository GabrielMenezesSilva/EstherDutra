import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    // Inicializar o EmailJS com sua chave pública
    emailjs.init('TDTMa4BO1MhM6dqrS');
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        const templateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        };

        await emailjs.send(
          'estherdutra', // ID do seu serviço no EmailJS
          'template_ocsmuzb', // ID do seu template no EmailJS
          templateParams
        );

        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Erro ao enviar email:', error);
        this.submitError = true;
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
