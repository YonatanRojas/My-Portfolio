import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { Objeto3DComponent } from './objeto3D/objeto3-d.component';
import { NoticiasJaponComponent } from './noticias-japon/noticias-japon.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'sobre-mi', component: SobreMiComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'objeto3D', component: Objeto3DComponent},
  { path: 'noticias-japon', component: NoticiasJaponComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    FooterComponent,
    Objeto3DComponent,
    NoticiasJaponComponent,
    FormularioComponent,
    SobreMiComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
