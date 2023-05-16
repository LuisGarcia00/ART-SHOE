import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent {
usuario_activo!:boolean

form={
  compra:""
}
constructor( private auth:AngularFireAuth) {

}


ngOnInit() :void {

  this.auth.authState.subscribe(user => {
    if (user) {
    this.usuario_activo = true
 }
 else{
   this.usuario_activo = false
 }
 })
}
}
