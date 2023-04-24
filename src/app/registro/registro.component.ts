
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{
form={
  nombre: "",
  correo: "",
contrasena: ""
}
ccontrasena: any  
constructor(private auth:AngularFireAuth) { }
ngOninit(): void{ 

}
Registrarme(){
  if(this.form.nombre != '' && this.form.correo != '' && this.form.contrasena != '' && this.ccontrasena != ''){
    if(this.form.contrasena!=this.ccontrasena){
      alert("Las contraseñas no coinciden.")
    }
    else{
      this.adduser(this.form).then((result)=>{
        if(result){
          alert("¡Registrado correctamente!")
          this.ngOninit()
        }
        else{
          alert("Error. Intente de nuevo")
        }
      })
    }
  }
  else{
    alert("Favor de completar los datos.")
  }
}


adduser(form:any){
  var promise = new Promise((resolve,reject)=>{
    this.auth.createUserWithEmailAndPassword(form.correo, form.contrasena)
    .then((result)=> {
      resolve(result)
    })
    .catch(function(error){
      if(error.code == 'auth/invalid-email'){
        alert("Ingresa un correo electronico valido.")
      }
      if (error.code == 'auth/email-already-in-use'){
        alert('Ese correo ya se encuentra registrado')
      }
      if(error.code == 'auth/weak-password'){
        alert('La contraseña debe tener al menos 8 caracteres')
      }
    })
  })
  return promise;
}
}