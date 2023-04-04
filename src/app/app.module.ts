import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsgkInterceptor } from './core/interceptors/asgk.interceptor';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, CoreModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AsgkInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}