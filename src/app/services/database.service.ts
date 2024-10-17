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

  // Obtener todos los pasajeros desde la base de datos
  getPasajeros(): Observable<TablaPasajero[]> {
return this.http.get<any[]>(`${this.apiUrl}/pasajeros`);
  }

  // Agregar un nuevo pasajero
  addPasajero(pasajero: TablaPasajero): Observable<TablaPasajero> {
    return this.http.post<TablaPasajero>(`${this.apiUrl}/pasajeros`, pasajero);
  }

  // Actualizar un pasajero existente
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
}
