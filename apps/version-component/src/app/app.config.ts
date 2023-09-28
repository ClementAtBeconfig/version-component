import {
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { HttpClientModule, } from '@angular/common/http';
import { VersionService } from 'libs/library/src/lib/service/version.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule, HttpClientModule]),
    {
      provide:VersionService, 
      useClass:VersionService
    }
  ],
};
