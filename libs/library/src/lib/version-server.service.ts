import { HttpClient, } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable, } from 'rxjs';

@Injectable({  
  providedIn: 'root'
 })
export class VersionServerService {
  constructor(private httpClient:HttpClient) { }

  getUrl():Observable<string> {
    const url="https://planning.beconfig-apps.com/api/versions/server";
    return this.httpClient.get<string>(url);
  }

}
