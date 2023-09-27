import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
 })
export class VersionServerService {
  constructor(private http:HttpClient) { }

  getUrl():Observable<any> {
    const url="https://planning.beconfig-apps.com/api/versions/server";
    return this.http.get(url);
    }

}
