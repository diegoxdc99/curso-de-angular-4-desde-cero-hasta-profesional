import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
