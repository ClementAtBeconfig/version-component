import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { gitDescribeSync } from 'git-describe';

@Component({
  selector: 'version-component-versions',
  standalone: true,
  imports: [CommonModule, BadgeModule, ButtonModule, OverlayPanelModule],
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss'],
})
export class VersionsComponent implements OnInit {

  private _serverVersion = '0.0.0.0';
  private _clientVersion = '0.0.0.0';
  private _version = '0.0.0.0';
  gitInfo: string | undefined;

  @Input()
  public get serverVersion() {
    return this._serverVersion;
  }

  public set serverVersion(value) {
    this._serverVersion = value;
    this.verifVersion();
  }

  @Input()
  public get clientVersion() {
    return this._clientVersion;
  }

  public set clientVersion(value) {
    this._clientVersion = value;
    this.verifVersion();
  }

  public set version(value) {
    this._version = value;
  }

  public get version() {
    return this._version;
  }

  ngOnInit() {
    this.gitInfo = this.getGitInfo();
  }

  verifVersion() {
    // your version verification logic here
  }

  private getGitInfo(): string {
    try {
      const gitInfo = gitDescribeSync();
      return 'Version ' + gitInfo;
    } catch (error) {
      console.error('Error getting git describe:', error);
      return 'Version N/A'; // Handle the case where git describe fails
    }
  }
}
