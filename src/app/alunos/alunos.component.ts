import { AlunoService, Aluno } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alunos',
  template: `
  <style>
  #format td, #format th {
    width: 80%;
    border: 1px solid #ddd;
    text-align: center;
    padding:20px;
  }
  #format th {
    background-color: #f2f2f2;
  }
  #format h3{
    text-align: center;
  } 
  #format table {
    margin-left: auto;
    margin-right: auto;
  }
  </style>

  <div id="format">
    <h3>Informações dos alunos</h3>
    <table>
      <tr>
        <th>Nomes</th>
        <th>Notas</th>
      </tr>
      <tr>
        <td> <div *ngFor="let aluno of alunos$ | async">
          {{  aluno.nome }}</div></td>
        <td><div *ngFor="let aluno of alunos$ | async">
          {{ aluno.nota }}</div></td>
      </tr>
    </table>
  </div>
  `,

})
export class AlunosComponent implements OnInit {
  
  alunos$: Observable<Aluno[]>;

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    this.alunos$ = this.alunoService.getAllAlunosWithNota();
  }

}
