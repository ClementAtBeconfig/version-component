import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VersionServerService {

  private apiUrl = 'https://planning.beconfig-apps.com/api/versions/server'; // Remplacez par l'URL de l'API

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

