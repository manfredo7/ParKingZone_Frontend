import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Pago } from '../../../models/pago';
import { PagoService } from '../../../services/pago.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listarpago',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,MatButtonModule, CommonModule],
  templateUrl: './listarpago.component.html',
  styleUrl: './listarpago.component.css'
})
export class ListarpagoComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'documento',
    'monto',
    'fecha',
    'hora',
    'tpago',
    'accion01',
    'accion02'
  ];
  dataSource: MatTableDataSource<Pago> = new MatTableDataSource();
  constructor( private pS: PagoService) {}
  ngOnInit(): void {
    this.pS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.pS.eliminar(id).subscribe((data) => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      });
    });
  }
}
