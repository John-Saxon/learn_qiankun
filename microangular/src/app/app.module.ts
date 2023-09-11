import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: (window as any).__POWERED_BY_QIANKUN__ ? '/app-angular' : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
