import { AlunoService, Aluno } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alunos',
  template: `
    <div *ngFor="let aluno of alunos$ | async"> 
      {{ aluno.nome }}
      {{ aluno.nota }}
    </div>
  `,
  styles: [
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
