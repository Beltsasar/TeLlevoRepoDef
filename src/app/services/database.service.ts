import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TablaPasajero } from '../Tablas/TablaPasajero.model' // Asegúrate de que la ruta sea correcta
import { TablaSede } from '../Tablas/TablaSedes.model';
@Injectable({
providedIn: 'root',
})
export class DatabaseService {
private apiUrl = 'http://localhost:3000/api'; // Asegúrate de que tu API corre en la ruta correcta

constructor(private http: HttpClient) {}

getPasajeros(): Observable<TablaPasajero[]> {
return this.http.get<any[]>(`${this.apiUrl}/pasajeros`);
}

recuperarContrasena(correo: string) {
  return this.http.post<any>(`${this.apiUrl}/recuperar-contrasena`, { correo });
}

addPasajero(pasajero: FormData): Observable<TablaPasajero> {
  return this.http.post<TablaPasajero>(`${this.apiUrl}/pasajeros`, pasajero);
}
updateUsuario(usuario: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/usuario/${usuario.id}`, usuario); // Cambia el endpoint según tu API
}

updatePasajero(id: number, pasajero: TablaPasajero): Observable<TablaPasajero> {
  return this.http.put<TablaPasajero>(`${this.apiUrl}/pasajeros/${id}`, pasajero);
}

// Eliminar un pasajero
deletePasajero(id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/pasajeros/${id}`);
}
getSedes(): Observable<TablaSede[]> {
  return this.http.get<any[]>(`${this.apiUrl}/sede`);
    }

login(correo: string, contrasena: string ): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/login`, { correo, contrasena });
}
}

