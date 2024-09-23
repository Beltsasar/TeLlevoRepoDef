import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
interface MyDictionary {
  [key: string]: string[];
}

// Create a dictionary that conforms to the interface
const myDictionary: MyDictionary = {
  usuario1: ['daniel', 'plasencia ticlia','da.plasencia@duocuc.cl','12345'],
  usuario2: ['Thiare', 'Hernandez gonzales','yisl.hernandez@duocuc.cl','21751534'],
  usuario3: ['Ismael', 'plasencia ticlia','da.plasencia@duocuc.cl','12345'],
};