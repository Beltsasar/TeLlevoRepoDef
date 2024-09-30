import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; // Importa ToastController
import { userDatabase } from '../user-database'; // Asegúrate de que la importación sea correcta

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string = "";
  apellidos: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(
    private router: Router, // Inyección del servicio Router
    private toastController: ToastController // Inyecta ToastController
  ) { }

  ngOnInit() {
  }

  async validar() {
    // Verifica que todos los campos estén llenos
    if (this.nombre === "" || this.apellidos === "" || this.email === "" || this.password === "" || this.confirmPassword === "") {
      await this.presentToast('Por favor, complete todos los campos.');
      return;
    }

    // Verifica el formato del correo electrónico
    const correoValido = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email);
    if (!correoValido) {
      await this.presentToast('Por favor, ingrese un correo válido.');
      return;
    }

    // Verifica si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      await this.presentToast('Las contraseñas no coinciden.');
      return;
    }
    if (this.password.length <=5 || this.password.length>=40) {
      await this.presentToast('Contraseña debe tener entre 6 a 40 caracteres');
      return;
    }

    // Si todo es válido, registra al usuario

    const newUserId = (Object.keys(userDatabase).length + 1).toString();
        this.presentToast('Usuario Registrado');

    userDatabase[newUserId] = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password
    };

    console.log('Usuario registrado:', userDatabase[newUserId]);
    this.presentToast('Usuario Registrado');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500); // 2000 ms (2 segundos) de retraso
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración del toast en milisegundos
      position: 'bottom' // Posición del toast (top, bottom, middle)
    });
    toast.present();
  }
}