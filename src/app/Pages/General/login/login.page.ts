import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar Router aquí
import { ToastController } from '@ionic/angular'; // Importa ToastController
import { userDatabase } from '../../../user-database'; // Asegúrate de importar el diccionario

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  Correo: string = '';
  Contrasena: string = '';
  lblEmailRecovery:string="";
  

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  enterPresionado(event : KeyboardEvent){
    if(event.key === 'Enter'){
      this.validarDatos()
    }
    
  }

  async validarDatos() {
    const correoValido = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.Correo);
    if (!correoValido) {
      await this.presentToast('Por favor, ingrese un correo válido.');
      return;
    }
  
    if (this.Contrasena.length < 6 || this.Contrasena.length > 40) {
      await this.presentToast('La contraseña debe tener entre 6 y 40 caracteres.');
      return;
    }
  
    const usuarioEncontrado = Object.values(userDatabase).find(user => user.email === this.Correo);
  
    if (usuarioEncontrado && usuarioEncontrado.password === this.Contrasena) {

      console.log('Usuario y contraseña correctos');
      this.router.navigate(['/index']);

    } else {
      console.log('Credenciales incorrectas');
      await this.presentToast('Credenciales incorrectas');
    }

  }
  

  async presentToast(message: string) {
    const toast = await this.toastController.create({
            message: message,
      duration: 2000,
      position: 'top', 
    });
    toast.present();
  }

  
  isModalOpen: boolean = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  recuperarContra() {
    const user = this.findUserByEmail(this.lblEmailRecovery); 

    if(this.lblEmailRecovery===''){
      this.presentToast('Correo no ingresado!');

    }else 
    if (user) {
      console.log('Usuario encontrado:', user); 
    } else {
      console.log('Correo no encontrado.');
      this.presentToast('Correo no encontrado.');
    }
  }
  findUserByEmail(email: string) {
    for (const userId in userDatabase) {
      if (userDatabase[userId].email === email) {
        this.presentToast('Revisar consola');

        return userDatabase[userId];  
      }
    }
    return null; 
  }
  
  
}