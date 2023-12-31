import {
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { HttpClientModule, } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([BrowserAnimationsModule, HttpClientModule])],
};
