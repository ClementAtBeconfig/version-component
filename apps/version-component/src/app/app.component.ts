/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { VersionsComponent } from 'libs/library/src/lib/component/versions/versions.component';
import { HttpClientModule } from '@angular/common/http';
import { VersionServerService } from 'libs/library/src/lib/version-server.service';
@Component({
  standalone: true,
  imports: [AppComponent , VersionsComponent  , HttpClientModule  ],
  selector: 'version-component-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'version-component';
  constructor(private VersionService:VersionServerService ){
 
  }
}


