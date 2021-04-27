import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TotalizadorGrupoComponent } from './components/totalizador-grupo/totalizador-grupo.component';

@NgModule({
  declarations: [AppComponent, TotalizadorGrupoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
