import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Aqui você pode implementar a lógica para enviar o formulário
    console.log('Form submitted:', this.formData);

    // Limpar o formulário após o envio
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
