/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { VersionsComponent } from 'libs/library/src/lib/component/versions/versions.component';

@Component({
  standalone: true,
  imports: [AppComponent , VersionsComponent   ],
  selector: 'version-component-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'version-component';
}
