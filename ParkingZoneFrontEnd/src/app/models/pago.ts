import { Tpago } from "./tpago"
import { Time } from "@angular/common";


export class Pago{

    idPago: number = 0;
    documentoPago: string = '';
    montoPago: number = 0;
    fechaPago: Date = new Date(Date.now());
    horaPago: Time = {hours: 0, minutes: 0};
    tpago: Tpago = new Tpago();
}