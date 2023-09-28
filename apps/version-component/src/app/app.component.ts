/* eslint-disable @nx/enforce-module-boundaries */
import { Component, } from '@angular/core';
import { VersionsComponent, } from 'libs/library/src/lib/component/versions/versions.component';
import { VersionServerService, } from 'libs/library/src/lib/version-server.service';
@Component({
  standalone: true,
  imports: [AppComponent , VersionsComponent   ],
  selector: 'version-component-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  
  constructor(private versionService:VersionServerService ){
 
  }
}


