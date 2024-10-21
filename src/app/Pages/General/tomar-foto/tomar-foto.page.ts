import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tomar-foto',
  templateUrl: './tomar-foto.page.html',
  styleUrls: ['./tomar-foto.page.scss'],
})
export class TomarFotoPage {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  image: string | null = null;
  isCameraActive: boolean = true;

  constructor() {}

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error al acceder a la cámara: ', err);
      });
  }

  takePicture() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = this.videoElement.nativeElement.videoWidth;
      canvas.height = this.videoElement.nativeElement.videoHeight;
      context.drawImage(this.videoElement.nativeElement, 0, 0);
      this.image = canvas.toDataURL('image/png');
      this.isCameraActive = false; // Desactivar la cámara
    } else {
      console.error('Error al obtener el contexto del canvas');
    }
  }

  takeAnother() {
    this.image = null; // Limpiar la imagen
    this.isCameraActive = true; // Reactivar la cámara
    this.startCamera(); // Reiniciar la cámara
  }
  saveImage() {
    if (this.image) {
      // Aquí puedes guardar la imagen en una base de datos o en el localStorage
      console.log('Imagen guardada:', this.image);
      // Agrega tu lógica para guardar la imagen aquí
    }
  }
  
}
