import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarusers',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink,MatIconModule],
  templateUrl: './listarusers.component.html',
  styleUrl: './listarusers.component.css'
})
export class ListarusersComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'username',
    'nombre',
    'apellidoP',
    'apellidoM',
    'correo',
    'accion01',
    'accion02'
  ];
  dataSource: MatTableDataSource<Users> = new MatTableDataSource();
  constructor( private uS: UsersService) {}

  ngOnInit(): void {
    this.uS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.uS.eliminar(id).subscribe((data) => {
      this.uS.list().subscribe((data) => {
        this.uS.setList(data);
      });
    });
  }

}
