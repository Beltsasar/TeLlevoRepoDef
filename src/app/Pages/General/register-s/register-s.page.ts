import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-s',
  templateUrl: './register-s.page.html',
  styleUrls: ['./register-s.page.scss'],
})
export class RegisterSPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  borrar(){
    console.log("borrado")
    localStorage.removeItem("nuevoConductor")
    localStorage.removeItem("capturedImage")
  }
}
