import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule  } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'version-component-versions',
  standalone: true,
  imports: [CommonModule , BadgeModule   ,ButtonModule , OverlayPanelModule , HttpClientModule ],
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss'],
})
export class VersionsComponent {
  
  visible = false; 
  private _serverVersion="0.0.0.0";
  private _clientVersion="0.0.0.0";
  private _version ="0.0.0.0";
  @Input()
  public get serverVersion(){
    return this._serverVersion;
    
  }
  public set serverVersion(value){
    this._serverVersion=value;
    this.VerifVersion()
  }
  @Input()
  public get clientVersion(){
    return this._clientVersion;
  }
  public set clientVersion(value){
    this._clientVersion=value;
    this.VerifVersion()
  }
  public set version(value){
    this._version=value;
  }
  public get version(){
    return this._version;
  }
  VerifVersion(){
        if(this.clientVersion == this.serverVersion){
      this.version="Version "+this.clientVersion
    }
    else{
      this.version="Version Client "+this.clientVersion+" / Version Server "+this.serverVersion;
    }
    
  }
   

}
