import { AlunoService, Aluno } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alunos',
  template: `
  <div *ngIf="(alunos$ | async) as alunos; else loading">
    <div id="format">
      <h3>Informações dos alunos</h3>
      <table>
        <tr>
          <th>Nomes</th>
          <th>Notas</th>
        </tr>
        
        <tr *ngFor="let aluno of alunos"> 
          <td > 
            {{ aluno.nome }}
          </td>
          <td>
            {{ aluno.nota }}
          </td>
        </tr>
        
      </table>
    </div>
  </div>
  <ng-template #loading>
    Carregando alunos...
  </ng-template>
  `,
  styles: [
  `
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
  `
  ]

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
