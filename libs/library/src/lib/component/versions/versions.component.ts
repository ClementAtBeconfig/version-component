import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { VersionService } from '../../service/version.service';

@Component({
  selector: 'beconfig-common-version-part',
  standalone: true,
  imports: [CommonModule, BadgeModule, ButtonModule, OverlayPanelModule],
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss'],
})
export class VersionsComponent {
  private _clientVersion = '0.0.0.0';
  private _localClientVersion = '0.0.0.0';
  private _serverVersion = '0.0.0.0';

  public displayInfo = false;
  public displayRefresh = false;
  public shortsha = '-';
  public version = '0.0.0.0';

  @Input()
  public get clientVersion() {
    return this._clientVersion;
  }
  public set clientVersion(value) {
    this._clientVersion = value;
    this.checkVersion();
  }

  @Input()
  public get localClientVersion() {
    return this._localClientVersion;
  }
  public set localClientVersion(value) {
    this._localClientVersion = value;
    this.checkVersion();
  }

  @Input()
  public get serverVersion() {
    return this._serverVersion;
  }
  public set serverVersion(value) {
    this._serverVersion = value;
    this.checkVersion();
  }


  @Output()
  public refresh  = new EventEmitter();

  constructor(private versionService:VersionService){

  }

  private checkVersion() {
    this.displayInfo = false;
    this.displayRefresh = false;

    if (
      this._clientVersion &&
      this._localClientVersion &&
      this._serverVersion
    ) {

      const localClientVersion = this.versionService.parseVersion(this._localClientVersion);
      this.version = localClientVersion.version;
      this.shortsha = localClientVersion.shortsha;
      
      // les versions clientes diffèrent
      if (this._clientVersion !== this._localClientVersion) {
        this.displayRefresh = true;
      }

      // les versions serveur et client diffèrent
      if (this._clientVersion !== this._serverVersion) {
        this.displayInfo = true;
      }
    }
  }

  public handleDisplayInfo(event:Event, overlaypanel:OverlayPanel){
    overlaypanel.show(event);
  }

  public handleRefresh(){
    this.refresh.emit();
  }

}
