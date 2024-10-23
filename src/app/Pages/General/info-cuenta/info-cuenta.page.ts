import { DatabaseService } from 'src/app/services/database.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-cuenta',
  templateUrl: './info-cuenta.page.html',
  styleUrls: ['./info-cuenta.page.scss'],
})
export class InfoCuentaPage implements OnInit {
  usuario: any = {}; // Objeto para almacenar la información del usuario
  isModalOpen: boolean = false; // Estado del modal

  constructor(
    private databaseService: DatabaseService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cargarUsuarioDesdeLocalStorage();
  }

  cargarUsuarioDesdeLocalStorage() {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (usuarioAutenticado) {
      this.usuario = JSON.parse(usuarioAutenticado); // Parsea el JSON guardado en localStorage
    }
  }

  openModal() {
    this.isModalOpen = true; // Abre el modal
  }

  closeModal() {
    this.isModalOpen = false; // Cierra el modal
  }

  async updateUsuario() {
    try {
      const response = await this.databaseService.updateUsuario(this.usuario);
      this.presentToast('Información actualizada correctamente');
      localStorage.setItem('usuarioAutenticado', JSON.stringify(this.usuario)); // Actualizar localStorage
      this.closeModal(); // Cerrar el modal
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      this.presentToast('Error al actualizar la información');
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
}
