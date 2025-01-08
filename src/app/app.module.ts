import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';

import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ContactoComponent } from './contacto/contacto.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: 'sobre-mi', component: SobreMiComponent},
  { path: 'contacto', component: ContactoComponent},
  
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    FooterComponent,
    
    SobreMiComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
