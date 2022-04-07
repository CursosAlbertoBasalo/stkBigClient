import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from '@stk/api/src/public-api';
import { UiModule } from '@stk/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule, ApiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
