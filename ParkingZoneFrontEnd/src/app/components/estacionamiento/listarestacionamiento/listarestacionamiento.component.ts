import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { EstacionamientoService } from '../../../services/estacionamiento.service';
import { Estacionamiento } from '../../../models/estacionamiento';

@Component({
  selector: 'app-listarestacionamiento',
  standalone: true,
  imports: [
    MatTableModule,MatButtonModule,RouterLink, MatIconModule
  ],
  templateUrl: './listarestacionamiento.component.html',
  styleUrl: './listarestacionamiento.component.css'
})
export class ListarestacionamientoComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'direccion',
    'capacidad',
    'tarifa',
    'hoperativo',
    'ventaja',
    'desventaja',
    'te',
    'accion01',
    'accion02'
  ];

  dataSource: MatTableDataSource<Estacionamiento> = new MatTableDataSource();
  constructor(private eS: EstacionamientoService) {}
  ngOnInit(): void {
    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.eS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.eS.eliminar(id).subscribe((data) => {
      this.eS.list().subscribe((data) => {
        this.eS.setList(data);
      });
    });
  }

}
