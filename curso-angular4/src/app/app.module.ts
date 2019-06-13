import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { routing, appRoutingProvider } from './app.routing';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ConversorPipe } from './pipes/conversor/conversor.pipe';
import { CochesComponent } from './components/coches/coches.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    ConversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
