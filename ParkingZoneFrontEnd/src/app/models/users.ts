import { Membresia } from "./membresia"

export class Users{
    id:number=0;
    username: string="";
    password: string="";
    enabled: boolean=false;
    Fregistro: Date=new Date();
    Nombre: string=""
    ApellidoP: string=""
    ApellidoM: string=""
    Fnacimiento: Date=new Date();
    Correo: string="";
    membresia: Membresia= new Membresia();
}