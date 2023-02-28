import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { ContentComponent } from './content/content.component';
import { PracticasComponent } from './practicas/practicas.component';
import { CargarscriptsService } from './cargarscripts.service';
import {RouterModule, Routes} from '@angular/router';
import { ModelosComponent } from './content/modelos/modelos.component';
import { ComentariosComponent } from './content/comentarios/comentarios.component';
import { BlogComponent } from './content/blog/blog.component';
import { CategoriasComponent } from './content/categorias/categorias.component';
import { ContactoComponent } from './content/contacto/contacto.component';

const appRoutes: Routes = [  
  {path: '', component: InicioComponent},
  {path: 'inicio', component:InicioComponent }, 
  {path: 'modelos', component:ModelosComponent }, 
  {path: 'comentarios', component:ComentariosComponent }, 
  {path: 'blog', component:BlogComponent }, 
  {path: 'categorias', component:CategoriasComponent }, 
  {path: 'contacto', component:ContactoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent,
    ContentComponent,
    PracticasComponent,
    ModelosComponent,
    ComentariosComponent,
    BlogComponent,
    CategoriasComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [
    
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
